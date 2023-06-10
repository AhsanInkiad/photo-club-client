import React, { useContext, useEffect, useState } from 'react';
import './MyClasses.css';
import { AuthContext } from '../../../providers/AuthProvider';

const MyClasses = () => {
    const { user } = useContext((AuthContext));
    const [data, setData] = useState([]);

    const url = `http://localhost:5000/addClasses?insEmail=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => { setData(data) })
    }, [])
    console.log(data);
    const getStatusTextColor = (status) => {
        if (status === 'pending') {
            return 'text-yellow-400';
        } else if (status === 'approved') {
            return 'text-green-400';
        } else if (status === 'denied') {
            return 'text-red-400';
        } else {
            return 'text-black';
        }
    };

    const isFeedback = (status) => {
        return status === 'denied';
    };

    const noFeedback = (status) => {
        return status === 'approved' || status=== 'pending';
    };

    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className='text-black'>

                                <th className='text-lg text-center'>Class Name</th>
                                <th className='text-lg text-center'>Status</th>
                                <th className='text-lg text-center'>Total Enrollment</th>
                                <th className='text-lg text-center'>Feedback</th>


                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                data.map((tab) => (
                                    <tr>

                                        <td className=''>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-32 h-32">
                                                        <img src={tab.image} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-black font-semibold">{tab.name}</div>

                                                </div>
                                            </div>
                                        </td>
                                        {/* Status */}
                                        <td className={`text-center text-lg font-semibold ${getStatusTextColor(tab.status)}`}>
                                            {tab.status}
                                        </td>
                                        {/* Total Enrolled */}
                                        <td className='text-black text-center font-semibold'>{tab.total_enrolled_students}</td>
                                        {/* Feedback */}
                                        {isFeedback(tab.status) && <td className="text-red-600 text-center font-bold">{tab.feedback}</td> }
                                        {noFeedback(tab.status) && <td className="text-black text-center font-semibold "> You will see feedback only <br/> if status is <span className='text-red-400'>denied!</span>  </td> }


                                    </tr>
                                ))
                            }



                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClasses;
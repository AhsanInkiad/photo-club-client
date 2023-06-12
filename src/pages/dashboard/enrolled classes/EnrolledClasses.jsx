import React, { useContext } from 'react';
import './EnrolledClasses.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
const EnrolledClasses = () => {
    const { user,  totalEnrolled, setTotalEnrolled } = useContext((AuthContext));
    const url = `https://photo-club-server-ahsaninkiad.vercel.app/mypayment?userEmail=${user.email}`;

    // tanstack query
    const { data: pays = [], refetch } = useQuery(['pays'], async () => {
        const res = await fetch(url)
        return res.json();
    })

    console.log('length',pays.length)
    setTotalEnrolled(pays.length);

    console.log("payment", pays);
    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className='text-black'>

                                <th className='text-lg text-center'>Class Name</th>
                                <th className='text-lg text-center'>Instructor Name</th>
                                <th className='text-lg text-center'>Instructor Email</th>
                                <th className='text-lg text-center'>Price</th>


                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                pays.map(tab => (
                                    <tr>

                                        <td className=''>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-32 h-32">
                                                        <img src={tab.coursePhoto} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-black font-semibold">{tab.courseName}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-black text-center font-semibold'>
                                            {tab.instructor_name}
                                        </td>
                                        <td className='text-black text-center font-semibold'>{tab.instructor_email}</td>
                                        <td className='text-black text-center font-semibold'>${tab.price}</td>


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

export default EnrolledClasses;
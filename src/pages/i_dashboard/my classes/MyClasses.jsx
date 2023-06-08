import React from 'react';
import './MyClasses.css';

const MyClasses = () => {
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

                            <tr>

                                <td className=''>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-32 h-32">
                                                <img src="https://images.unsplash.com/photo-1580428261891-cb29e9e409e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-black font-semibold">asdasd</div>

                                        </div>
                                    </div>
                                </td>
                                <td className='text-black text-center font-semibold'>
                                    dddd
                                </td>
                                <td className='text-black text-center font-semibold'>qqwssqd</td>
                                <td className='text-white text-center font-semibold'>
                                    <textarea className="w-full h-20 px-2 py-1 border border-gray-300 rounded" placeholder="Enter feedback"></textarea>
                                </td>


                            </tr>



                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClasses;
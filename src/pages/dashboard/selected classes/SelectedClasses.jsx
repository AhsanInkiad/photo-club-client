import React from 'react';
import { Link } from 'react-router-dom';
import './selectedclasses.css'

const SelectedClasses = () => {
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

                                <th className='text-lg text-center'>Delete</th>
                                <th className='text-lg text-center'> Pay</th>
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
                                <td className='text-black text-center font-semibold'>dfgdfg</td>

                                <th>
                                    <button className=" Nabutton Nanoselect"><span className="Natext">Delete</span><span className="Naicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                                </th>
                                <th>
                                    <Link to='/dashboard/payment'> <button className="btn btn-outline btn-info">Make Payment</button></Link>

                                </th>
                            </tr>

                           

                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SelectedClasses;
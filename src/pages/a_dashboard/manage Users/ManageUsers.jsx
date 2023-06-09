import React from 'react';
import './ManageUsers.css'
const ManageUsers = () => {
    return (
        <div>

        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-black'>

                            <th className='text-lg text-center'>Photo</th>
                            <th className='text-lg text-center'>Name</th>
                            <th className='text-lg text-center'>Email</th>
                            <th className='text-lg text-center'>Role</th>

                            <th className='text-lg text-center'>Make Instructor</th>
                            <th className='text-lg text-center'> Make Admin</th>
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
                                    
                                </div>
                            </td>
                            <td className='text-black text-center font-semibold'>
                                dddd
                            </td>
                            <td className='text-black text-center font-semibold'>qqwssqd</td>
                            <td className='text-black text-center font-semibold'>dfgdfg</td>

                            <th>
                          <button className="btn  btn-outline btn-info">Make Instructor</button>
                            </th>
                            <th>
                                <button className="btn btn-outline btn-error">Make Admin</button>

                            </th>
                        </tr>

                       

                    </tbody>
                    
                </table>
            </div>
        </div>
    </div>
    );
};

export default ManageUsers;
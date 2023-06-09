import React, { useContext, useEffect, useState } from 'react';

import { GrUserAdmin } from "react-icons/gr";
import './ManageUsers.css'
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';
const ManageUsers = () => {
    const { user } = useContext(AuthContext);
    const [status, setStatus] = useState("Student");
    // tanstack query
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin = (tab) => {
        fetch(`http://localhost:5000/users/admin/${tab._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log("hit korar kotha");
                console.log(data.modifiedCount);
                if (data.modifiedCount) {

                    console.log('hit korlo bhaisap')
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${tab.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeInstructor = (tab) => {
        fetch(`http://localhost:5000/users/instructor/${tab._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log("hit korar kotha");
                console.log(data.modifiedCount);
                if (data.modifiedCount) {

                    console.log('hit korlo bhaisap')
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${tab.name} is an instructor now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            const saveInstructor = { ins_name: tab.name, ins_email: tab.email, c_name:tab.name, c_image: tab.photo };
            fetch('http://localhost:5000/addainstructor', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveInstructor)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("not posted ins");
                    if (data.insertedId) {
                        console.log("posted");
                    }
                })
        
    }
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

                            {
                                users.map((tab) => (
                                    <tr>

                                        <td className=''>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-32 h-32">
                                                        <img src={tab.photo} />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td className='text-black text-lg text-center font-semibold'>
                                            {tab.name}
                                        </td>
                                        <td className='text-black text-center font-semibold'>{tab.email}</td>
                                        <td className='text-black text-center font-semibold'>
                                            {
                                                tab.role === 'admin' ? <span className='text-red-400 text-lg'><GrUserAdmin className='inline'></GrUserAdmin> </span> : (tab.role === 'instructor' ? <span className='text-blue-400'>Instructor</span> : 'Student')
                                            }
                                        </td>

                                        <th className='text-black font-semibold'>
                                            {
                                                tab.role === 'instructor' ? 'User is an instructor' :
                                                    <button onClick={() => handleMakeInstructor(tab)} className="btn btn-outline btn-info flex text-center justify-center items-center">Make Instructor</button>
                                            }
                                        </th>
                                        <th className='text-black font-semibold'>
                                            {
                                                tab.role === 'admin' ? 'User is an admin' :
                                                    <button onClick={() => handleMakeAdmin(tab)} className="btn btn-outline btn-error flex text-center justify-center items-center"><GrUserAdmin></GrUserAdmin></button>
                                            }

                                        </th>
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

export default ManageUsers;
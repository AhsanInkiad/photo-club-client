import React, { useState } from 'react';
import './ManageClasses.css';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const { data: users = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json();
    });

    const [hoveredRow, setHoveredRow] = useState(null);
    const [selectedTab, setSelectedTab] = useState(null);

    const handleRowHover = (index) => {
        setHoveredRow(index);
    };

    const handleApprove = (tab) => {
        fetch(`http://localhost:5000/classes/aprove/${tab._id}`, {
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
                        title: `Class Approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDeny = (tab) => {
        fetch(`http://localhost:5000/classes/deny/${tab._id}`, {
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
                        icon: 'error',
                        title: 'DENIED..',
                        text: 'Class is denied!',

                    })
                }
            })
    }

    const handleFeedback = event => {
        event.preventDefault();
        const form = event.target;
        const text = form.feedback.value;
        console.log(text);
        console.log(selectedTab);

        fetch(`http://localhost:5000/feedbacks/${selectedTab._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                feedback: text
            })
        })
            .then(res => res.json())
            .then(d => {
                console.log(d);
                event.target.reset();
                if (d.modifiedCount > 0) {
                    // update state
                    Swal.fire(
                        'Done!',
                        'Feedback is submitted.',
                        'success'
                      )
                }
            })


        closeModal();
    };

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

    const showModal = () => {
        const modal = document.getElementById('my_modal_1');
        if (modal) {
            modal.showModal();
        }
    };

    const closeModal = () => {
        const modal = document.getElementById('my_modal_1');
        if (modal) {
            modal.close();
        }
    };
    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className='text-black'>
                                <th className='text-lg text-center'>Class</th>
                                <th className='text-lg text-center'>Instructor Name</th>
                                <th className='text-lg text-center'>Instructor Email</th>
                                <th className='text-lg text-center'>Available Seats</th>
                                <th className='text-lg text-center'>Price</th>
                                <th className='text-lg text-center'>Status</th>
                                <th className='text-lg text-center'>Decision</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* rows */}
                            {users.map((tab, index) => (
                                <tr
                                    key={tab.id}
                                    className={hoveredRow === index ? 'hovered-row' : ''}
                                    onMouseEnter={() => handleRowHover(index)}
                                    onMouseLeave={() => handleRowHover(null)}
                                >
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-32 h-32">
                                                    <img
                                                        src={tab.image}
                                                        alt={tab.name}
                                                        className="zoom-image"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-black font-semibold">{tab.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-black text-center font-semibold'>{tab.instructor_name}</td>
                                    <td className='text-black text-center font-semibold'>{tab.instructor_email}</td>
                                    <td className='text-black text-center font-semibold'>{tab.available_seats}</td>
                                    <td className='text-black text-center font-semibold'>${tab.price}</td>

                                    <td className={`text-center font-semibold ${getStatusTextColor(tab.status)}`}>
                                        {tab.status}
                                    </td>
                                    <td className='grid grid-cols-1 gap-2 pt-5'>
                                        <button onClick={() => handleApprove(tab)} className="btn btn-sm btn-outline btn-success">Approve</button>
                                        <button onClick={() => handleDeny(tab)} className="btn btn-sm btn-outline btn-error">Deny</button>
                                        <button className="btn btn-sm btn-outline text-black" onClick={() => { setSelectedTab(tab); showModal(); }} disabled={tab.status === 'approved' || tab.status === 'pending'}><span className='text-black'>Feedback</span></button>

                                        <dialog id="my_modal_1" className="modal ">
                                            <form onSubmit={handleFeedback} method="dialog" className="modal-box bg-[#1E293B]">
                                                <h3 className="font-bold text-lg">Write Feedback below:</h3>
                                                <textarea className='mt-4 rounded-lg text-white font-semibold p-2 bg-black' name="feedback" placeholder="Write your feedback here" rows="4" cols="50" />

                                                <div className="modal-action">
                                                    {/* if there is a button in form, it will close the modal */}

                                                    <button className="btn text-black hover:text-white bg-[#1DA1F2]">Submit</button>

                                                </div>
                                            </form>
                                        </dialog>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClasses;

import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './selectedclasses.css'
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { IoIosCard } from "react-icons/io";

const SelectedClasses = () => {
    const { user,setPayprice, paycourse, setPaaycorse, setPayid,  totalSelectedClass, setTotalSelectedClass,paycoursePic, 
        setPaaycorsePic,
        paycourseInsName, 
        setPaaycorseInsName,
        paycourseInsEmail, 
        setPaaycorseInsEmail } = useContext((AuthContext));
    const [data, setData] = useState([]);
    const [hoveredRow, setHoveredRow] = useState(null);
    const url = `https://photo-club-server-ahsaninkiad.vercel.app/sClasses?userEmail=${user.email}`;

    // tanstack query
    const { data: sClasses = [], refetch } = useQuery(['sClasses'], async () => {
        const res = await fetch(url)
        return res.json();
    })


    console.log('tanstack er data niche:')
    console.log(sClasses);
    setTotalSelectedClass(sClasses.length)




    const handleRowHover = (index) => {
        setHoveredRow(index);
    };

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://photo-club-server-ahsaninkiad.vercel.app/del/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(datas => {
                        console.log(datas);
                        if (datas.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                       
                    })
              
            }
        })
}

    const handlePay = tab => {
        setPayid(tab._id);
        setPayprice(tab.price);
        setPaaycorse(tab.name);
        setPaaycorsePic(tab.image);
        setPaaycorseInsEmail(tab.instructor_email);
        setPaaycorseInsName(tab.instructor_name);
    }


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

                            {
                                sClasses.map((tab, index) => (
                                    <tr
                                        key={tab.id}
                                        className={hoveredRow === index ? 'hovered-row' : ''}
                                        onMouseEnter={() => handleRowHover(index)}
                                        onMouseLeave={() => handleRowHover(null)}>

                                        <td className=''>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-32 h-32">
                                                        <img className="zoom-image" src={tab.image} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-black font-semibold">{tab.name}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-black text-center font-semibold'>
                                            {tab.instructor_name}
                                        </td>
                                        <td className='text-black text-center font-semibold'>{tab.instructor_email}</td>
                                        <td className='text-black text-center font-semibold'>${tab.price}</td>

                                        <th>
                                            <button onClick={() => handleDelete(tab._id)} className=" Nabutton Nanoselect"><span className="Natext">Delete</span><span className="Naicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                                        </th>
                                        <th>
                                            <Link to='/dashboard/payment'> <button onClick={()=>handlePay(tab)} className="btn btn-outline btn-info"><IoIosCard></IoIosCard></button></Link>

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

export default SelectedClasses;
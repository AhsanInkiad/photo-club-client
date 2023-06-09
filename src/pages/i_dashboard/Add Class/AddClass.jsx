import React, { useContext, useEffect } from 'react';
import './AddClass.css';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
const AddClass = () => {
    useEffect(() => {
        document.title = "Photo Hero | Add Class";
    }, []);
    const { user } = useContext(AuthContext);
    const handleAddClass = event => {
        event.preventDefault();

        const form = event.target;

        const cName = form.pic_URL.value;
        const cImg = form.class_name.value;
        const iName = form.ins_name.value;
        const iEmail = form.ins_email.value;
        const aSeats = form.available_seats.value;
        const cPrice = form.course_price.value;
        const cStatus = form.status.value;
        const tEnroll = form.total_enroll.value;
        const bDescription = form.brief_description.value;


        const addedClass = {
            name: cName,
            image: cImg,
            instructor_name: iName,
            instructor_email: iEmail,
            available_seats: aSeats,
            price: cPrice,
            total_enrolled_students: tEnroll,
            brief_details: bDescription,
            status: cStatus
        }

        console.log(addedClass);
        fetch('http://localhost:5000/addaclass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Your toy has been added!',
                        'success'
                    )
                }
            })

    }
    return (
        <div>

            <div className="hero bg-[#1E293B] py-10 px-10 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Add a class!</h1>
                        <p className="py-6">You can see your added class in MY Classes page!</p>
                    </div>
                    <form onSubmit={handleAddClass} className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body ">
                            <div className=' lg:grid lg:grid-cols-2 lg:gap-6'>
                                {/* Class name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white font-semibold">Class Name</span>
                                    </label>
                                    <input type="text" placeholder="class name" name="class_name" className="text-white input input-bordered" />
                                </div>

                                {/* Pic url */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white font-semibold">Picture URL</span>
                                    </label>
                                    <input type="text" placeholder="picture URL" name="pic_URL" className="text-white input input-bordered" />
                                </div>

                            </div>


                            {/* Instructor name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white font-semibold">Instructor Name</span>
                                </label>
                                <input type="text" placeholder="instructor name" defaultValue={user.displayName} name="ins_name" className="text-white input input-bordered" />
                            </div>


                            {/* Instructor email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white font-semibold">Instructor Email</span>
                                </label>
                                <input type="text" placeholder="instructor email" defaultValue={user.email} name="ins_email" className="text-white input input-bordered" />
                            </div>

                            <div className='lg:grid lg:grid-cols-2 lg:gap-6'>

                                {/* Available Seats */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white font-semibold">Available seats</span>
                                    </label>
                                    <input type="text" placeholder="available seats" name="available_seats" className="text-white input input-bordered" />
                                </div>


                                {/* Price */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white font-semibold">Price</span>
                                    </label>
                                    <input type="text" placeholder="price" name="course_price" className="text-white input input-bordered" />
                                </div>

                            </div>

                            <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
                                {/* Status */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white font-semibold">Status</span>
                                    </label>
                                    <input type="text" placeholder="" disabled defaultValue={"pending"} name="status" className="input input-bordered" />
                                </div>

                                {/* Total enrolled students */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white font-semibold">Total Enrollment</span>
                                    </label>
                                    <input type="text" placeholder="" disabled defaultValue={0} name="total_enroll" className="input input-bordered" />
                                </div>
                            </div>





                            {/* Brief details */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white font-semibold">Brief Details</span>
                                </label>
                                <input type="text" placeholder="description" name="brief_description" className="input text-white input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-outline btn-info" type="submit" value="Add" />
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default AddClass;
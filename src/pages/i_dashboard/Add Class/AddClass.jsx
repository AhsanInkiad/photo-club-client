import React, { useContext, useEffect } from 'react';
import './AddClass.css';
import { AuthContext } from '../../../providers/AuthProvider';
const AddClass = () => {
    useEffect(() => {
        document.title = "Photo Hero | Add Class";
    }, []);
    const { user } = useContext(AuthContext);
    return (
        <div>

            <div className="hero bg-[#1E293B] py-10 px-10 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Add a class!</h1>
                        <p className="py-6">You can see your added class in MY Classes page!</p>
                    </div>
                    <form className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body ">
                            <div className=' lg:grid lg:grid-cols-2 lg:gap-6'>
                                {/* Class name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Class Name</span>
                                    </label>
                                    <input type="text" placeholder="class name" name="class_name" className="input input-bordered" />
                                </div>

                                {/* Pic url */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Picture URL</span>
                                    </label>
                                    <input type="text" placeholder="picture URL" name="pic_URL" className="input input-bordered" />
                                </div>

                            </div>


                            {/* Instructor name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white">Instructor Name</span>
                                </label>
                                <input type="text" placeholder="instructor name" defaultValue={user.displayName} name="ins_name" className="input input-bordered" />
                            </div>


                            {/* Instructor email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white">Instructor Email</span>
                                </label>
                                <input type="text" placeholder="instructor email" defaultValue={user.email} name="ins_email" className="input input-bordered" />
                            </div>

                            <div className='lg:grid lg:grid-cols-2 lg:gap-6'>

                                {/* Available Seats */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Available seats</span>
                                    </label>
                                    <input type="text" placeholder="available seats" name="available_seats" className="input input-bordered" />
                                </div>


                                {/* Price */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Price</span>
                                    </label>
                                    <input type="text" placeholder="price" name="course_price" className="input input-bordered" />
                                </div>

                            </div>

                            <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
                                {/* Status */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Status</span>
                                    </label>
                                    <input type="text" placeholder="" disabled defaultValue={"pending"} name="status" className="input input-bordered" />
                                </div>

                                 {/* Total enrolled students */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white">Total Enrollment</span>
                                </label>
                                <input type="text" placeholder="" disabled defaultValue={0} name="status" className="input input-bordered" />
                            </div>
                            </div>
                           
                        



                        {/* Brief details */}
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white">Brief Details</span>
                            </label>
                            <input type="text" placeholder="description" name="brief_description" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Add" />
                        </div>
                </div>
            </form>
        </div>
        </div >
    </div >
    );
};

export default AddClass;
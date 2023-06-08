import React, { useEffect } from 'react';
import logo2 from '../../assets/logo-6.png'
import { Link, Outlet } from 'react-router-dom';
import { BsCartCheckFill, BsFillPersonLinesFill, BsCamera } from "react-icons/bs";
import { MdOutlinePendingActions } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import './Dashboard.css';




const Dashboard = () => {
    useEffect(() => {
        document.title = "PhotoHero | Dashboard";
    }, []);
    return (
        <div className="dashboard bg-white">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                   
                   
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-sm my-10 btn-primary drawer-button lg:hidden">Open dashboard</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#1E293B] text-base-content">
                        {/* Sidebar content here */}
                        {/* Logo and website name */}
                        <Link to='/'><div className='mb-4 space-x-4 btn btn-ghost  bg-slate-800 h-20 '>
                            <img className='border-4 border-[#1DA1F2] w-10 md:w-12 lg:w-16 m-auto rounded-lg' src={logo2} />
                            <p className="text-white  normal-case text-xsm md:text-lg  lg:text-xl"> <span className='flex align-items-center'>Photo Hero </span></p>
                        </div></Link>

                        <Link to="/dashboard/userhome">  <li className='text-white text-lg font-bold'><p><span className='text-blue-400'> <AiFillHome></AiFillHome></span> User Home</p></li> </Link>
                        <Link to="/dashboard/paymenthistory">  <li className='text-white text-lg font-bold'><p><span className='text-blue-400'><BsCashCoin></BsCashCoin></span> Payment History</p></li> </Link>
                        <Link to="/dashboard/selectedclasses">  <li className='text-white text-lg font-bold'><p><span className='text-blue-400'><MdOutlinePendingActions></MdOutlinePendingActions> </span> Selected Classes</p></li> </Link>
                        <Link to="/dashboard/enrolledclasses">  <li className='text-white text-lg font-bold'><p><span className='text-green-400'> <BsCartCheckFill></BsCartCheckFill> </span> Enrolled Classes</p> </li> </Link>
                       
                        <div className="divider"></div>
                        <Link to="/">  <li className='text-white text-lg font-bold'><p><span className='text-white'> <AiFillHome></AiFillHome> </span> Home</p> </li> </Link>
                        <Link to="/instructors">  <li className='text-white text-lg font-bold'><p><span className='text-white'> <BsFillPersonLinesFill></BsFillPersonLinesFill> </span> Instructors</p> </li> </Link>
                        <Link to="/classes">  <li className='text-white text-lg font-bold'><p><span className='text-white'> <BsCamera></BsCamera> </span> Class </p> </li> </Link>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
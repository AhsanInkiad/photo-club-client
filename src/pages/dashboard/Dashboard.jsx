import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { BsCartCheckFill } from "react-icons/bs";

import { MdOutlinePendingActions } from "react-icons/md";

import { AiFillHome } from "react-icons/ai";

import { BsCashCoin } from "react-icons/bs";




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
                    
                    
                   
                    <Link to="/dashboard/selectedclasses">  <li className='text-white text-lg font-bold'><p><span className='text-blue-400'><MdOutlinePendingActions></MdOutlinePendingActions> </span> Selected Classes</p></li> </Link>  
                    <Link to="/dashboard/enrolledclasses">  <li className='text-white text-lg font-bold'><p><span className='text-green-400'> <BsCartCheckFill></BsCartCheckFill> </span> Enrolled Classes</p> </li> </Link>
                    <Link to="/dashboard/paymenthistory">  <li className='text-white text-lg font-bold'><p><span className='text-blue-400'><BsCashCoin></BsCashCoin></span> Payment History</p></li> </Link>  
                    <div className="divider"></div> 
                    <Link to="/">  <li className='text-white text-lg font-bold'><p><span className='text-white'> <AiFillHome></AiFillHome> </span> Home</p> </li> </Link>  
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
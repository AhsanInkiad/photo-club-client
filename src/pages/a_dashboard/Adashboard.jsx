import React, { useEffect } from 'react';
import './Adashboard.css';
import logo2 from '../../assets/logo-6.png'


import { FaUserCog } from "react-icons/fa";
import { BsFillPersonLinesFill, BsCamera } from "react-icons/bs";
import { MdOutlinePendingActions } from "react-icons/md";
import { AiFillHome, AiFillFileAdd } from "react-icons/ai";
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
const Adashboard = () => {
    useEffect(() => {
        document.title = "PhotoHero | aDashboard";
    }, []);

    const location = useLocation();
    return (
        <div className="dashboard bg-white">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-sm my-10 btn-primary drawer-button lg:hidden">
                        Open dashboard
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#1E293B] text-base-content">
                        {/* Sidebar content here */}
                        {/* Logo and website name */}
                        {/* Logo and website name */}
                        <Link to='/'><div className='mb-4 space-x-4 btn btn-ghost  bg-slate-800 h-20 '>
                            <img className='border-4 border-[#1DA1F2] w-10 md:w-12 lg:w-16 m-auto rounded-lg' src={logo2} />
                            <p className="text-white  normal-case text-xsm md:text-lg  lg:text-xl"> <span className='flex align-items-center'>Photo Hero </span></p>
                        </div></Link>


                        <NavLink exact to="/adashboard/auserhome" className={`text-white text-lg font-bold ${location.pathname === '/adashboard/auserhome' ? 'active-link' : ''}`}>
                            <li><p><span className='text-blue-400 '> <AiFillHome /></span> Admin Home</p></li>
                        </NavLink>

                        <NavLink exact to="/adashboard/manageclasses" className={`text-white text-lg font-bold ${location.pathname === '/adashboard/manageclasses' ? 'active-link' : ''}`}>
                            <li>
                                <p>
                                    <span className='text-green-400'> <AiFillFileAdd></AiFillFileAdd></span> Manage Classes
                                </p>
                            </li>
                        </NavLink>

                        <NavLink exact to="/adashboard/manageusers" className={`text-white text-lg font-bold ${location.pathname === '/adashboard/manageusers' ? 'active-link' : ''}`}>
                            <li>
                                <p>
                                    <span className='text-blue-400'><FaUserCog /></span> Manage Users
                                </p>
                            </li>
                        </NavLink>



                        <div className="divider"></div>

                        <NavLink exact to="/" className={`text-white text-lg font-bold ${location.pathname === '/' ? 'active-link' : ''}`}>
                            <li>
                                <p>
                                    <span className='text-white'> <AiFillHome /></span> Home
                                </p>
                            </li>
                        </NavLink>

                        <NavLink exact to="/instructors" className={`text-white text-lg font-bold ${location.pathname === '/instructors' ? 'active-link' : ''}`}>
                            <li>
                                <p>
                                    <span className='text-white'> <BsFillPersonLinesFill /></span> Instructors
                                </p>
                            </li>
                        </NavLink>

                        <NavLink exact to="/classes" className={`text-white text-lg font-bold ${location.pathname === '/classes' ? 'active-link' : ''}`}>
                            <li>
                                <p>
                                    <span className='text-white'> <BsCamera /></span> Class
                                </p>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Adashboard;
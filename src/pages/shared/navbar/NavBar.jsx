import React, { useContext, useEffect, useState } from 'react';
import logo2 from '../../../assets/logo-6.png'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiCarWheel } from "react-icons/gi";
import './NavBar.css'
import { getAuth, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
const NavBar = () => {
    const auth = getAuth();
    const { user, setUser, setLoading, setCount, count, dp, setDp } = useContext(AuthContext);
    const [fusers, setFusers] = useState([]);
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://photo-club-server-ahsaninkiad.vercel.app/users')
        return res.json();
    })
    useEffect(() => {
        if (users && users.length > 0) {
          setFusers(users?.filter((userItem) => userItem.email === user?.email));
        }
      }, [users, user]);
 
    console.log(fusers[0]?.role);
    // TODO: load data from the server to have dynamic isAdmin based on Data
    let isStudent = false;
    let isInstructor = false;
    let isAdmin = false;
    let isDisabled = false;
    if(fusers[0]?.role=='admin'){
        isAdmin = true;
        setCount(true);
    } 
    else if(fusers[0]?.role=='instructor'){
        isInstructor = true;
        setCount(true);

    }
    else{
        isStudent = true;
        setCount(false);
    }

 




    console.log(user?.photoURL);
    console.log(user?.displayName);
    const handleLogOut = (event) => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser(null);
                

            })
            .catch((error) => {
                // An error happened.
            });
    }
    return (
        <div className="navbar bg-slate-800 p-6 s">
            <div className="navbar-start">
                {/* Logo and website name */}
                <Link to='/'><div className='flex space-x-4 btn btn-ghost  bg-slate-800 h-20 '>
                    <img className='border-4 border-[#1DA1F2] w-10 md:w-12 lg:w-16 m-auto rounded-lg' src={logo2} />
                    <p className="text-white  normal-case text-xsm md:text-lg  lg:text-xl"> <span className='flex align-items-center'>Photo Hero </span></p>
                </div></Link>

                {/* Dropdown */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-[#1DA1F2] h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                    </label>
                    <ul tabIndex={0} className="text-white menu menu-compact dropdown-content mt-3 p-2 shadow border border-[#1DA1F2] bg-[#1D1F1F] rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='instructors'>Instructors</Link></li>
                        <li><Link to="classes">Classes</Link> </li>
                        {user && <li><Link to='dashboard/userhome'>Dashboard</Link></li>}


                    </ul>
                </div>
            </div>
            {/* Menu in the center */}
            <div className="navbar-center text-lg font-semibold text-white hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/' className='mr-2 pt-4 btn btn-ghost'>Home</Link></li>
                    <li><Link to='instructors' className='mr-2 pt-4 btn btn-ghost'>Instructors</Link></li>
                    <li><Link to="classes" className='mr-2 pt-4 btn btn-ghost '>Classes</Link></li>
                    {user && isStudent && <li><Link to='dashboard/userhome' className='pt-4 mr-2 btn btn-ghost'>  Dashboard</Link></li>}
                    {user && isInstructor && <li><Link to='idashboard/iuserhome' className='pt-4 mr-2 btn btn-ghost'>  i_Dashboard</Link></li>}
                    {user && isAdmin && <li><Link to='adashboard/auserhome' className='pt-4 mr-2 btn btn-ghost'>  a_Dashboard</Link></li>}
                </ul>
            </div>
            {/* Profile pic and login/logout button */}
            <div className="navbar-end">
                {user && <div className="w-12  rounded-full">
                    <img className='rounded-full h-12 -ml-2' title={user.displayName} src={user.photoURL} />
                </div>}

                {user ?
                    <button onClick={handleLogOut} className="MaBtn">
                        <div className="Masign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                        <div className="Matext">Logout</div>
                    </button> :
                    <Link to='/login'>
                        <button className="Btn ">
                            <div className="sign"><svg viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg></div>
                            <div className="text">Login</div>
                        </button>
                    </Link>
                }






            </div>
        </div>
    );
};

export default NavBar;
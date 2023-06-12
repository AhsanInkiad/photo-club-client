import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import { AiFillMail } from "react-icons/ai";
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Home = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.title = "PhotoHero | Home";
    }, []);
    const { setCount, count, user } = useContext(AuthContext);
    const [tabs, setTabs] = useState([]);
    const [instabs, setInstabs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setTabs(data.sort((a, b) => b.total_enrolled_students - a.total_enrolled_students)))

    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstabs(data))
    }, [])

    console.log(tabs);

    const handleSelect = (tab) => {
        const selectedClass = {
            userName: user.displayName,
            userEmail: user.email,
            name: tab.name,
            image: tab.image,
            instructor_name: tab.instructor_name,
            instructor_email: tab.instructor_email,
            price: tab.price,
        }

        console.log(selectedClass);
        fetch('http://localhost:5000/selectedclass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(selectedClass)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    // Show the message to the user
                    console.log(data.message);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'You have already selected this class!',
                        footer: '<a href="/dashboard/selectedclasses">Go to selected Classes</a>'
                    })
                }
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Done!',
                        'Class selected.',
                        'success'
                    );
                }
            });
    };

    const toggleTheme = () => {
        setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
        console.log(theme);
    };



    return (

        <div className={`${theme}`}>

            <div className='pt-40'>
                <div onClick={toggleTheme} className=" mx-auto  rwrapper">
                    <input type="checkbox" name="checkbox" className="rswitch" />

                </div>
            </div>
            {/* Slider/Carousel */}
            <div className='mx-auto w-6/7 md:w-3/4 pt-40 lg:pt-5 px-20'>
                <div className="carousel mx-auto  border-4 rounded-xl border-[#1E293B]">
                    <div id="slide1" className="carousel-item relative w-full">

                        <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full brightness-50" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle btn-xs md:btn-sm">❮</a>
                            <a href="#slide2" className="btn btn-circle btn-xs md:btn-sm">❯</a>
                        </div>
                        <div className=" border rounded-xl border-black p-5 lg:p-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <p className='text-white lg:text-4xl pb-8 font-bold'>Capture Life's Brilliance with Nikon Cameras</p>
                            <p className='font-semibold pb-2'>Experience Unparalleled Photography with Nikon's Cutting-edge Technology</p>

                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1542567455-cd733f23fbb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full brightness-50" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle btn-xs md:btn-sm">❮</a>
                            <a href="#slide3" className="btn btn-circle btn-xs md:btn-sm">❯</a>
                        </div>
                        <div className=" border rounded-xl border-black p-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <p className='text-white lg:text-4xl pb-8 font-bold'>Unleash the Power of Portraits with Our Photography Tips and Techniques</p>
                            <p className='font-semibold pb-2'>Master the Art of Portraiture and Capture Timeless Moments </p>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1506241537529-eefea1fbe44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full brightness-50" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle btn-xs md:btn-sm">❮</a>
                            <a href="#slide4" className="btn btn-circle btn-xs md:btn-sm">❯</a>
                        </div>
                        <div className=" border rounded-xl border-black p-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <p className='text-white lg:text-4xl pb-8 font-bold'>Unleash the Power of Portraits with Our Photography Tips and Techniques</p>
                            <p className='font-semibold pb-2'>Master the Art of Portraiture and Capture Timeless Moments </p>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1531860995303-e732ee6bdb1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full brightness-50" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle btn-xs md:btn-sm">❮</a>
                            <a href="#slide1" className="btn btn-circle btn-xs md:btn-sm">❯</a>
                        </div>
                        <div className=" border rounded-xl border-black p-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <p className='text-white lg:text-4xl pb-8 font-bold'>Unleash Your Inner Photographer with Canon: Ignite Your Passion for Photography</p>
                            <p className='font-semibold pb-2'>Capture Life's Precious Moments in Stunning Detail with Our Cutting-edge Canon Cameras</p>
                        </div>
                    </div>
                </div>
            </div>



            { /* Popular Classes */}
            <div className='pt-40 '>
                <p className='pb-10 text-black text-center text-2xl font-semibold lg:text-4xl lg:font-bold'>Popular Classes</p>
                {/* Popular classes card */}
                <div className='mx-auto grid grid-cols-1 w-3/4  justify-items-center lg:grid-cols-3 gap-10 px-10 lg:px-28'>
                    {/* Card-1 */}
                    {
                        tabs.slice(0, 6).map((tab) => (
                            <div>
                                <div className="card bg-white border-2 border-[#1E293B] shadow-xl hover:scale-110 transition duration-300">
                                    <div>
                                        <img className="daimg pt-10  mx-auto rounded-xl  hover:scale-110 transition duration-300" src={tab.image} />
                                    </div>

                                    <div className="card-body text-black">
                                        <h2 className="card-title mx-auto font-bold text-2xl text-center">{tab.name} (${tab.price})</h2>
                                        <p className="text-center text-slate-600 font-semibold">Instructor: <br></br>{tab.instructor_name}</p>
                                        <div className='pt-1 lg:pt-5 text-center '>
                                            <p className="text-[#1DA1F2] text-2xl lg:text-3xl font-bold">{tab.total_enrolled_students}</p>
                                            <p className="text-center text-slate-600 font-semibold text-sm">Enrolled Students</p>
                                        </div>
                                        <div className="card-actions justify-center">
                                            {count ? (
                                                <></>
                                            ) : (

                                                <button onClick={() => handleSelect(tab)} className="mt-1 lg:mt-5 btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg font-bold">
                                                    Select
                                                </button>

                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))

                    }





                </div>
            </div>



            { /* Popular Instructors */}
            <div className='pt-40 pb-36'>
                <p className='pb-32 text-black text-center text-2xl font-semibold lg:text-4xl lg:font-bold'>Popular Instructors</p>
                {/* Popular Instructors card */}
                <div className='grid px-24 justify-items-center lg:px-60 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {/*card-1 */}
                    {
                        instabs.slice(0, 6).map((tab) => (
                            <div className="vacard-container">
                                <div className="vacard">
                                    <div className="vafront-content">
                                        <div>
                                            <img className="px-5 h-40 w-48 rounded-lg hover:scale-110 transition duration-300" src={tab.c_image} />
                                            <p className='text-center text-lg pt-4'>{tab.ins_name}</p>
                                        </div>


                                    </div>
                                    <div className="vacontent">
                                        <p className="vaheading text-sm leading-10 pt-8 "> {tab.c_name}</p>
                                        <p>
                                            <AiFillMail className='inline'></AiFillMail>:
                                            {tab.ins_email}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        ))

                    }




                </div>
            </div>



            { /* Cubic design for featured photo */}
            <div className='bod pb-40 pt-10'>
                <div className="btitle">
                    <p className='pb-10 text-black text-center text-2xl font-semibold lg:text-4xl lg:font-bold'>Our Digital Arts:</p>

                </div>
                <div className="bslider pt-20 pb-20">
                    <div className="bcontainer pb-20">
                        <div className="bslide x"></div>
                        <div className="bslide y"></div>
                        <div className="bslide z"></div>
                    </div>
                    <div className="bshadow pb-20"></div>
                </div>

            </div>




        </div>
    );
};

export default Home;
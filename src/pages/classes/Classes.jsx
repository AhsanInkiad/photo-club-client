import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Classes.css'
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Classes = () => {
    useEffect(() => {
        document.title = "PhotoHero | Classes";
    }, []);

    const { setCount, count, user, totalClass, setTotalClass } = useContext(AuthContext);
    const [tabs, setTabs] = useState([]);

    // Loading all classes
    useEffect(() => {
        fetch('https://photo-club-server-ahsaninkiad.vercel.app/classes')
            .then(res => res.json())
            .then(data => setTabs(data))
    }, []);

    console.log(tabs);
    setTotalClass(tabs.length);

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

        // Creating instances in the database

        fetch('https://photo-club-server-ahsaninkiad.vercel.app/selectedclass', {
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

    return (
        <div className='bg-white'>
            {/* Our Classes */}
            <div className='pt-40 pb-40'>
                <p className='pb-10 text-black text-center text-2xl font-semibold lg:text-4xl lg:font-bold'>Our Classes</p>
                {/* Popular classes card */}
                <div className='mx-auto grid grid-cols-1 w-3/4 justify-items-center lg:grid-cols-3 gap-10 px-10 lg:px-28'>
                    {/* Card-1 */}
                    {tabs.map((tab) => (
                        <div key={tab.id}>
                            <div className="card bg-white border-2 border-[#1E293B] shadow-xl hover:scale-110 transition duration-300">
                                <div>
                                    <img className="daimg pt-10 mx-auto rounded-xl hover:scale-110 transition duration-300" src={tab.image} />
                                </div>
                                <div className="card-body text-black">
                                    <h2 className="card-title mx-auto font-bold text-2xl text-center">{tab.name} (${tab.price})</h2>
                                    <p className="text-center text-slate-600 font-semibold">Instructor: <br />{tab.instructor_name}</p>
                                    <div className='pt-1 lg:pt-5 text-center'>
                                        <p className="text-[#1DA1F2] text-2xl lg:text-3xl font-bold">{tab.available_seats}</p>
                                        <p className="text-center text-slate-600 font-semibold text-sm">Seats Available</p>
                                    </div>
                                    <div className="card-actions justify-center">
                                        {count ? (
                                            <></>
                                        ) : (
                                            tab.status === 'approved' ? (
                                                
                                                    <button onClick={() => handleSelect(tab)} className="mt-1 lg:mt-5 btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg font-bold">
                                                        Select
                                                    </button>
                                                
                                            ) : (tab.status === 'pending' ? (
                                                <p className="mt-1 lg:mt-5 text-center text-yellow-500 font-semibold">Approval {tab.status}! </p>
                                            ) : (
                                                <p className="mt-1 lg:mt-5 text-center text-red-500 font-semibold">Approval of this class is denied!</p>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Classes;

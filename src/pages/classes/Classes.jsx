import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Classes = () => {
    useEffect(() => {
        document.title = "PhotoHero | Classes";
      }, []);
    return (
        <div className='bg-white'>
            { /* Our Classes */}
            <div className='pt-40 pb-40'>
                <p className='pb-10 text-black text-center text-2xl font-semibold lg:text-4xl lg:font-bold'>Our Classes</p>
                {/* Popular classes card */}
                <div className='mx-auto grid grid-cols-1 w-3/4  justify-items-center lg:grid-cols-3 gap-10 px-10 lg:px-28'>
                    {/* Card-1 */}
                    <div>
                        <div className="card  bg-white border-2 border-[#1E293B] shadow-xl hover:scale-110 transition duration-300">
                            <div>
                                <img className="pt-10 mx-auto rounded-xl w-1/2 hover:scale-110 transition duration-300" src="https://i.ibb.co/7QQrXdc/cristiano-ronaldo-4k-hd-pc-download-wallpaper-preview.jpg" />
                            </div>

                            <div className="card-body text-black">
                                <h2 className="card-title mx-auto font-bold text-2xl">Wedding ($23)</h2>
                                <p className="text-center text-slate-600 font-semibold">Instructor: <br></br> Krishna Ronaldo</p>
                                <div className='pt-1 lg:pt-5 text-center '>
                                    <p className="text-[#1DA1F2] text-2xl lg:text-3xl font-bold">1000</p>
                                    <p className="text-center text-slate-600 font-semibold text-sm">Seats Available</p>
                                </div>
                                <div className="card-actions justify-center">
                                    <Link to="/selectedclasses"> <button className="mt-1 lg:mt-5 btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg font-bold">Select</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card-2 */}
                    <div>
                        <div className="card  bg-white border-2 border-[#1E293B] shadow-xl hover:scale-110 transition duration-300">
                            <div>
                                <img className="pt-10 mx-auto rounded-xl w-1/2 hover:scale-110 transition duration-300" src="https://i.ibb.co/7QQrXdc/cristiano-ronaldo-4k-hd-pc-download-wallpaper-preview.jpg" />
                            </div>

                            <div className="card-body text-black">
                                <h2 className="card-title mx-auto font-bold text-2xl">Wedding ($23)</h2>
                                <p className="text-center text-slate-600 font-semibold">Instructor: <br></br> Krishna Ronaldo</p>
                                <div className='pt-1 lg:pt-5 text-center '>
                                    <p className="text-[#1DA1F2] text-2xl lg:text-3xl font-bold">1000</p>
                                    <p className="text-center text-slate-600 font-semibold text-sm">Seats Available</p>
                                </div>
                                <div className="card-actions justify-center">
                                    <button className="mt-1 lg:mt-5 btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg font-bold">Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card-3 */}
                    <div>
                        <div className="card  bg-white border-2 border-[#1E293B] shadow-xl hover:scale-110 transition duration-300">
                            <div>
                                <img className="pt-10 mx-auto rounded-xl w-1/2 hover:scale-110 transition duration-300" src="https://i.ibb.co/7QQrXdc/cristiano-ronaldo-4k-hd-pc-download-wallpaper-preview.jpg" />
                            </div>

                            <div className="card-body text-black">
                                <h2 className="card-title mx-auto font-bold text-2xl">Wedding ($23)</h2>
                                <p className="text-center text-slate-600 font-semibold">Instructor: <br></br> Krishna Ronaldo</p>
                                <div className='pt-1 lg:pt-5 text-center '>
                                    <p className="text-[#1DA1F2] text-2xl lg:text-3xl font-bold">1000</p>
                                    <p className="text-center text-slate-600 font-semibold text-sm">Seats Available</p>
                                </div>
                                <div className="card-actions justify-center">
                                    <button className="mt-1 lg:mt-5 btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg font-bold">Select</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Card-4 */}
                    <div>
                        <div className="card  bg-white border-2 border-[#1E293B] shadow-xl hover:scale-110 transition duration-300">
                            <div>
                                <img className="pt-10 mx-auto rounded-xl w-1/2 hover:scale-110 transition duration-300" src="https://i.ibb.co/7QQrXdc/cristiano-ronaldo-4k-hd-pc-download-wallpaper-preview.jpg" />
                            </div>

                            <div className="card-body text-black">
                                <h2 className="card-title mx-auto font-bold text-2xl">Wedding ($23)</h2>
                                <p className="text-center text-slate-600 font-semibold">Instructor: <br></br> Krishna Ronaldo</p>
                                <div className='pt-1 lg:pt-5 text-center '>
                                    <p className="text-[#1DA1F2] text-2xl lg:text-3xl font-bold">1000</p>
                                    <p className="text-center text-slate-600 font-semibold text-sm">Seats Available</p>
                                </div>
                                <div className="card-actions justify-center">
                                    <button className="mt-1 lg:mt-5 btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg font-bold">Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card-5 */}
                    <div>
                        <div className="card  bg-white border-2 border-[#1E293B] shadow-xl hover:scale-110 transition duration-300">
                            <div>
                                <img className="pt-10 mx-auto rounded-xl w-1/2 hover:scale-110 transition duration-300" src="https://i.ibb.co/7QQrXdc/cristiano-ronaldo-4k-hd-pc-download-wallpaper-preview.jpg" />
                            </div>

                            <div className="card-body text-black">
                                <h2 className="card-title mx-auto font-bold text-2xl">Wedding ($23)</h2>
                                <p className="text-center text-slate-600 font-semibold">Instructor: <br></br> Krishna Ronaldo</p>
                                <div className='pt-1 lg:pt-5 text-center '>
                                    <p className="text-[#1DA1F2] text-2xl lg:text-3xl font-bold">1000</p>
                                    <p className="text-center text-slate-600 font-semibold text-sm">Seats Available</p>
                                </div>
                                <div className="card-actions justify-center">
                                    <button className="mt-1 lg:mt-5 btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg font-bold">Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card-6 */}
                    <div>
                        <div className="card  bg-white border-2 border-[#1E293B] shadow-xl hover:scale-110 transition duration-300">
                            <div>
                                <img className="pt-10 mx-auto rounded-xl w-1/2 hover:scale-110 transition duration-300" src="https://i.ibb.co/7QQrXdc/cristiano-ronaldo-4k-hd-pc-download-wallpaper-preview.jpg" />
                            </div>

                            <div className="card-body text-black">
                                <h2 className="card-title mx-auto font-bold text-2xl">Wedding ($23)</h2>
                                <p className="text-center text-slate-600 font-semibold">Instructor: <br></br> Krishna Ronaldo</p>
                                <div className='pt-1 lg:pt-5 text-center '>
                                    <p className="text-[#1DA1F2] text-2xl lg:text-3xl font-bold">1000</p>
                                    <p className="text-center text-slate-600 font-semibold text-sm">Seats Available</p>
                                </div>
                                <div className="card-actions justify-center">
                                    <button className="mt-1 lg:mt-5 btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg font-bold">Select</button>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default Classes;
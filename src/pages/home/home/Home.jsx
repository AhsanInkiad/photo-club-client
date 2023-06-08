import React, { useEffect, useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        document.title = "PhotoHero | Home";
    }, []);
    const [tabs, setTabs] = useState([]);
    const [sortedTabs, setSortedTabs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setTabs(data.sort((a, b) => b.total_enrolled_students - a.total_enrolled_students)))
            
    }, [])


    console.log(tabs);

    return (

        <div className='bg-white'>
            {/* Slider/Carousel */}
            <div className='mx-auto w-6/7 md:w-3/4 pt-40 lg:pt-40 px-20'>
                <div className="carousel mx-auto  border-4 rounded-xl border-[#1E293B]">
                    <div id="slide1" className="carousel-item relative w-full">

                        <img src="https://i.ibb.co/m8TRr4w/jake-espedido-ugk-B-S2-O5s-unsplash.jpg" className="w-full brightness-50" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle btn-xs md:btn-sm">❮</a>
                            <a href="#slide2" className="btn btn-circle btn-xs md:btn-sm">❯</a>
                        </div>
                        <div className=" border rounded-xl border-black p-5 lg:p-20 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <p className='text-white lg:text-6xl font-bold'>Text for slide 1</p>
                            <p>Info</p>
                            <p>Msg</p>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/QQ1SSvV/jake-espedido-KTb8-UQ-Qd5w-unsplash.jpg" className="w-full brightness-50" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle btn-xs md:btn-sm">❮</a>
                            <a href="#slide3" className="btn btn-circle btn-xs md:btn-sm">❯</a>
                        </div>
                        <div className=" border rounded-xl border-black p-20 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <p className='text-white text-6xl font-bold'>Text for slide 1</p>
                            <p>Info</p>
                            <p>Msg</p>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/m8TRr4w/jake-espedido-ugk-B-S2-O5s-unsplash.jpg" className="w-full brightness-50" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle btn-xs md:btn-sm">❮</a>
                            <a href="#slide4" className="btn btn-circle btn-xs md:btn-sm">❯</a>
                        </div>
                        <div className=" border rounded-xl border-black p-20 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <p className='text-white text-6xl font-bold'>Text for slide 1</p>
                            <p>Info</p>
                            <p>Msg</p>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/QQ1SSvV/jake-espedido-KTb8-UQ-Qd5w-unsplash.jpg" className="w-full brightness-50" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle btn-xs md:btn-sm">❮</a>
                            <a href="#slide1" className="btn btn-circle btn-xs md:btn-sm">❯</a>
                        </div>
                        <div className=" border rounded-xl border-black p-20 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <p className='text-white text-6xl font-bold'>Text for slide 1</p>
                            <p>Info</p>
                            <p>Msg</p>
                        </div>
                    </div>
                </div>
            </div>



            { /* Popular Classes */}
            <div className='pt-40'>
                <p className='pb-10 text-black text-center text-2xl font-semibold lg:text-4xl lg:font-bold'>Popular Classes</p>
                {/* Popular classes card */}
                <div className='mx-auto grid grid-cols-1 w-3/4  justify-items-center lg:grid-cols-3 gap-10 px-10 lg:px-28'>
                    {/* Card-1 */}
                    {
                        tabs.slice(0,6).map((tab) => (
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
                                            <Link to="/selectedclasses"> <button className="mt-1 lg:mt-5 btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg font-bold">Select</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))

                    }





                </div>
            </div>



            { /* Popular Instructors */}
            <div className='pt-40'>
                <p className='pb-32 text-black text-center text-2xl font-semibold lg:text-4xl lg:font-bold'>Popular Instructors</p>
                {/* Popular Instructors card */}
                <div className='grid px-24 justify-items-center lg:px-60 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {/*card-1 */}
                    <div className="vacard-container">
                        <div className="vacard">
                            <div className="vafront-content">
                                <div>
                                    <img className="px-5 rounded-lg hover:scale-110 transition duration-300" src="https://i.ibb.co/7QQrXdc/cristiano-ronaldo-4k-hd-pc-download-wallpaper-preview.jpg" />
                                    <p className='text-center text-lg pt-4'>Sir Krishna Ronaldo</p>
                                </div>


                            </div>
                            <div className="vacontent">
                                <p className="vaheading">Card Hover</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipii
                                    voluptas ten mollitia pariatur odit, ab
                                    minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                    necessitatibus dignissimos molestias.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*card-2 */}
                    <div className="vacard-container">
                        <div className="vacard">
                            <div className="vafront-content">
                                <div>
                                    <img className="px-5 rounded-lg hover:scale-110 transition duration-300" src="https://i.ibb.co/7QQrXdc/cristiano-ronaldo-4k-hd-pc-download-wallpaper-preview.jpg" />
                                    <p className='text-center text-lg pt-4'>Sir Krishna Ronaldo</p>
                                </div>


                            </div>
                            <div className="vacontent">
                                <p className="vaheading">Card Hover</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipii
                                    voluptas ten mollitia pariatur odit, ab
                                    minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                    necessitatibus dignissimos molestias.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*card-3 */}
                    <div className="vacard-container">
                        <div className="vacard">
                            <div className="vafront-content">
                                <div>
                                    <img className="px-5 rounded-lg hover:scale-110 transition duration-300" src="https://i.ibb.co/7QQrXdc/cristiano-ronaldo-4k-hd-pc-download-wallpaper-preview.jpg" />
                                    <p className='text-center text-lg pt-4'>Sir Krishna Ronaldo</p>
                                </div>


                            </div>
                            <div className="vacontent">
                                <p className="vaheading">Card Hover</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipii
                                    voluptas ten mollitia pariatur odit, ab
                                    minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                    necessitatibus dignissimos molestias.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*card-4 */}
                    <div className="vacard-container">
                        <div className="vacard">
                            <div className="vafront-content">
                                <div>
                                    <img className="px-5 rounded-lg hover:scale-110 transition duration-300" src="https://i.ibb.co/7QQrXdc/cristiano-ronaldo-4k-hd-pc-download-wallpaper-preview.jpg" />
                                    <p className='text-center text-lg pt-4'>Sir Krishna Ronaldo</p>
                                </div>


                            </div>
                            <div className="vacontent">
                                <p className="vaheading">Card Hover</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipii
                                    voluptas ten mollitia pariatur odit, ab
                                    minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                    necessitatibus dignissimos molestias.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*card-5 */}
                    <div className="vacard-container">
                        <div className="vacard">
                            <div className="vafront-content">
                                <div>
                                    <img className="px-5 rounded-lg hover:scale-110 transition duration-300" src="https://i.ibb.co/7QQrXdc/cristiano-ronaldo-4k-hd-pc-download-wallpaper-preview.jpg" />
                                    <p className='text-center text-lg pt-4'>Sir Krishna Ronaldo</p>
                                </div>


                            </div>
                            <div className="vacontent">
                                <p className="vaheading">Card Hover</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipii
                                    voluptas ten mollitia pariatur odit, ab
                                    minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                    necessitatibus dignissimos molestias.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*card-6 */}
                    <div className="vacard-container">
                        <div className="vacard">
                            <div className="vafront-content">
                                <div>
                                    <img className="px-5 rounded-lg hover:scale-110 transition duration-300" src="https://i.ibb.co/7QQrXdc/cristiano-ronaldo-4k-hd-pc-download-wallpaper-preview.jpg" />
                                    <p className='text-center text-lg pt-4'>Sir Krishna Ronaldo</p>
                                </div>


                            </div>
                            <div className="vacontent">
                                <p className="vaheading">Card Hover</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipii
                                    voluptas ten mollitia pariatur odit, ab
                                    minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                    necessitatibus dignissimos molestias.
                                </p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>



            { /* Cubic design for featured photo */}
            <div className='bod pb-40 pt-10'>
                <div className="btitle">
                    <h1 className='text-black font-semibold text-2xl' >Our Featured Photo:</h1>

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
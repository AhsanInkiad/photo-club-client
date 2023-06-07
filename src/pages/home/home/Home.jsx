import React, { useEffect } from 'react';
import './Home.css'

const Home = () => {
    useEffect(() => {
        document.title = "PhotoHero | Home";
    }, []);
    return (

        <div className='bg-white'>
            {/* Slider/Carousel */}
            <div className='mx-auto w-6/7 md:w-3/4 pt-40 lg:pt-40 px-20'>
                <div className="carousel mx-auto  border-4 rounded-xl border-black ">
                    <div id="slide1" className="carousel-item relative w-full">
                        
                        <img  src="https://i.ibb.co/m8TRr4w/jake-espedido-ugk-B-S2-O5s-unsplash.jpg" className="w-full brightness-50" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle btn-xs md:btn-sm">❮</a>
                            <a href="#slide2" className="btn btn-circle btn-xs md:btn-sm">❯</a>
                        </div>
                        <div className=" border rounded-xl border-black p-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <p className='text-white text-6xl font-bold'>Text for slide 1</p>
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
                        <div className=" border rounded-xl border-black p-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
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
                        <div className=" border rounded-xl border-black p-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
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
                        <div className=" border rounded-xl border-black p-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <p className='text-white text-6xl font-bold'>Text for slide 1</p>
                            <p>Info</p>
                            <p>Msg</p>
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
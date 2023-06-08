import React, { useEffect } from 'react';

const Instructors = () => {
    useEffect(() => {
        document.title = "PhotoHero | Instructors";
      }, []);
    return (
        <div className='bg-white'>
        
            { /* Popular Instructors */}
            <div className='pt-32 pb-32'>
                <p className='pb-32 text-black text-center text-2xl font-semibold lg:text-4xl lg:font-bold'>Our Instructors</p>
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
        </div>
    );
};

export default Instructors;
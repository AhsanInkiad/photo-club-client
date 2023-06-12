import React, { useEffect, useState } from 'react';
import { AiFillMail } from "react-icons/ai";

const Instructors = () => {
    useEffect(() => {
        document.title = "PhotoHero | Instructors";
      }, []);
      const [tabs, setTabs] = useState([]);
      useEffect(() => {
          fetch('https://photo-club-server-ahsaninkiad.vercel.app/instructors')
              .then(res => res.json())
              .then(data => setTabs(data))
      }, [])

      console.log(tabs);
    return (
        <div className='bg-white'>
        
            { /* Popular Instructors */}
            <div className='pt-32 pb-32'>
                <p className='pb-32 text-black text-center text-2xl font-semibold lg:text-4xl lg:font-bold'>Our Instructors</p>
                {/* Popular Instructors card */}
                <div className='grid px-24 justify-items-center lg:px-60 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {/*card-1 */}
                    {
                     tabs.map((tab) => (
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
        </div>
    );
};

export default Instructors;
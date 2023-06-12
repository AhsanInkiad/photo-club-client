import React, { useContext, useEffect, useState } from 'react';
import './UserHome.css';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UserHome = () => {
    const { user, totalClass, setTotalClass, setTotalSelectedClass, totalSelectedClass,setTotalEnrolled, totalEnrolled } = useContext(AuthContext);
    const [tabs, setTabs] = useState([]);
    const [s, setS] = useState(null);

    useEffect(() => {
        fetch('https://photo-club-server-ahsaninkiad.vercel.app/classes')
            .then(res => res.json())
            .then(data => setTabs(data))
    }, []);

    const { data: sUsers = [], refetc } = useQuery(['users'], async () => {
        const res = await fetch(`https://photo-club-server-ahsaninkiad.vercel.app/sUsers?userEmail=${user.email}`)
        return res.json();
    })

    console.log(sUsers);

    const url = `https://photo-club-server-ahsaninkiad.vercel.app/sClasses?userEmail=${user.email}`;

    // tanstack query
    const { data: sClasses = [], refetch } = useQuery(['sClasses'], async () => {
        const res = await fetch(url)
        return res.json();
    })
    setTotalSelectedClass(sClasses.length)
    setTotalClass(tabs.length);
    const purl = `https://photo-club-server-ahsaninkiad.vercel.app/mypayment?userEmail=${user.email}`;
 // tanstack query
 const { data: pays = [], refetchu } = useQuery(['pays'], async () => {
    const res = await fetch(purl)
    return res.json();
})

console.log('length',pays.length)
setTotalEnrolled(pays.length);


    return (
        <>
            {
                sUsers.map(tab => (
                    <div className='flex gap-60 items-center border-2 rounded-lg border-[#1E293B] p-24'>
                        <div>
                            <div className=' rounded-full '>
                                <img className='dp  ' src={tab.photo} alt="" />

                            </div>
                            <p className='text-[#1E293B] pt-4 font-bold text-lg'>Name: {tab.name}</p>
    
                        </div>
                        <div className="wcards">
                            <div className="wcard wred">
                                <p className="wtip text-lg">Total Available Classes: </p>
                                <p className="wsecond-text text-2xl font-bold">{totalClass}</p>
                            </div>
                            <div className="wcard wred">
                                <p className="wtip text-lg">Total Selected Classes:</p>
                                <p className="wsecond-text text-2xl font-bold">{totalSelectedClass}</p>
                            </div>
                            <div className="wcard wblue">
                                <p className="wtip text-lg">Total Enrolled Classes:</p>
                                <p className="wsecond-text text-2xl font-bold">{totalEnrolled}</p>
                            </div>

                        </div>
                    </div>
                ))
            }
        </>


    );
};

export default UserHome;


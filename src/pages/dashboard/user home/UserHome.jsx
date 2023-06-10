import React, { useContext, useEffect, useState } from 'react';
import './UserHome.css';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UserHome = () => {
    const { user, totalClass, setTotalClass,  setTotalSelectedClass, totalSelectedClass } = useContext(AuthContext);
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setTabs(data))
    }, []);

    const url = `http://localhost:5000/sClasses?userEmail=${user.email}`;

    // tanstack query
    const { data: sClasses = [], refetch } = useQuery(['sClasses'], async () => {
        const res = await fetch(url)
        return res.json();
    })
    setTotalSelectedClass(sClasses.length)
    setTotalClass(tabs.length);
   
    return (
        <div>
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
                    <p className="wsecond-text text-2xl font-bold">10</p>
                </div>

            </div>
        </div>
    );
};

export default UserHome;
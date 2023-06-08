import React from 'react';
import './UserHome.css';

const UserHome = () => {
    return (
        <div>
            <div className="wcards">
                <div className="wcard wred">
                    <p className="wtip text-lg">Total Available Classes:</p>
                    <p className="wsecond-text text-2xl font-bold">25</p>
                </div>
                <div className="wcard wred">
                    <p className="wtip text-lg">Total Selected Classes:</p>
                    <p className="wsecond-text text-2xl font-bold">10</p>
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
import React, { useEffect } from 'react';

const Dashboard = () => {
    useEffect(() => {
        document.title = "PhotoHero | Dashboard";
      }, []);
    return (
        <div className="dashboard">
       <p>this is dashboard</p>
      </div>
    );
};

export default Dashboard;
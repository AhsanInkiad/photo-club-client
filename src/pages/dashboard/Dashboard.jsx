import React, { useEffect } from 'react';

const Dashboard = () => {
    useEffect(() => {
        document.title = "PhotoHero | Dashboard";
      }, []);
    return (
        <div>
            <p>This is the dashboard</p>
        </div>
    );
};

export default Dashboard;
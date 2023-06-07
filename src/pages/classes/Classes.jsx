import React, { useEffect } from 'react';

const Classes = () => {
    useEffect(() => {
        document.title = "PhotoHero | Classes";
      }, []);
    return (
        <div>
            <p>This is the class</p>
        </div>
    );
};

export default Classes;
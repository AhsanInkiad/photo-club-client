import React, { useEffect } from 'react';

const Instructors = () => {
    useEffect(() => {
        document.title = "PhotoHero | Instructors";
      }, []);
    return (
        <div>
            <p>This is instructors page</p>
        </div>
    );
};

export default Instructors;
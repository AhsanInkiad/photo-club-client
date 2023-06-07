import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/footer';
import NavBar from '../pages/shared/navbar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
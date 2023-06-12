import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
       
            <div className="w-full  page_404   my-40">
                <div className="container h-full   mx-auto">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>


                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Look like you're lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>

                                  <Link to="/"> <button className='btn btn-outline my-10'>Home</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default NotFound;
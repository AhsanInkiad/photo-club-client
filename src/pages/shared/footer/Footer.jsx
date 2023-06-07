import React from 'react';
import logo2 from '../../../assets/logo-6.png'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { AiOutlinePhone, AiOutlineMail, AiFillCopyrightCircle } from "react-icons/ai";

import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
        <footer className="footer p-8 py-10 bg-slate-800  md:grid md:grid-cols-3 lg:flex justify-between">
            {/* Logo and website name */}
            <div className='my-auto'>
                <Link to='/'><div className='flex  space-x-4 btn btn-ghost  bg-slate-800 h-20 '>
                    <img className='border-4 border-[#1DA1F2] w-12 lg:w-16 m-auto rounded-lg' src={logo2} />
                    <p className="text-white  normal-case text-xsm md:text-lg  lg:text-xl"> <span className='flex align-items-center'>Photo Hero </span></p>
                </div></Link>
                <p className='mt-4 text-white'>Fast and Curious Ltd.<br />Providing reliable service since 2018.</p>
            </div>
            {/* Contact Info */}
            <div className='my-auto'>
                <p className=' text-white font-bold text-xl pb-2'>Contact Information :</p>
                <p className='flex text-white'>  <AiOutlinePhone className='mt-1 text-[#1DA1F2]'> </AiOutlinePhone> - 017077XXXXX - [Store-1]   </p>
                <p className='flex text-white'>  <AiOutlinePhone className='mt-1 text-[#1DA1F2]'> </AiOutlinePhone> - 016066XXXXX - [Store-2]   </p>
                <p className='flex text-white'>  <AiOutlineMail className='mt-1 text-[#1DA1F2]'> </AiOutlineMail> - fastandcurious@gmail.com   </p>
            </div>
            {/* Address */}
            <div className='my-auto'>
                <p className=' text-white font-bold md:text-lg lg:text-xl'>Address :</p>
                <p className='flex text-white'>  <BiMap className='mt-1 text-[#1DA1F2]'> </BiMap> - Gulshan-Badda, Link Road, Dhaka <br /> .. Bangladesh. [Store-1]   </p>
                <p className='flex text-white'>  <BiMap className='mt-1 text-[#1DA1F2]'> </BiMap> - Dhanmondi-32, Ar-Plaza, Dhaka <br /> .. Bangladesh. [Store-2]   </p>
            </div>
            {/* Subscribe */}
            <div className="my-auto subscribe">
                <p>Subscribe for updates</p>
                <input placeholder="Your e-mail" className="subscribe-input" name="email" type="email" />
                <br />
                <div className="submit-btn">SUBMIT</div>
            </div>
            {/* Social Media */}
            <div className=''>
                <p className='mx-auto text-white font-bold text-xl'>Find us on :</p>
                <div className="Lamain">
                    <div className="Laup">
                        <button className="Lacard1">
                            <a href="https://www.instagram.com/"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="30px" height="30px" fill-rule="nonzero" className="instagram"><g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g></svg></a>
                        </button>
                        <button className="Lacard2">
                            <a href="https://www.twitter.com/"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px" className="twitter"><path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path></svg></a>
                        </button>
                    </div>
                    <div className="Ladown">
                        <button className="Lacard3">
                            <a href="https://github.com/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" className="github">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg></a>

                        </button>
                        <button className="Lacard4">
                            <a href="https://www.facebook.com/"> <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="discord"><path id="mainIconPathAttribute" d="M23.446 18l0.889-5.791h-5.557v-3.758c0-1.584 0.776-3.129 3.265-3.129h2.526v-4.93c0 0-2.292-0.391-4.484-0.391-4.576 0-7.567 2.774-7.567 7.795v4.414h-5.087v5.791h5.087v14h6.26v-14z"></path></svg></a>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
        <div className='bg-slate-800 p-10 flex'>   
            <p className='mx-auto '> © Copyright: INKIAD </p>
        </div>

    </div>
    );
};

export default Footer;
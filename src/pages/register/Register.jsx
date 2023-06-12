import React, { useContext, useRef, useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const [err, setErr] = useState('');
    const { createUser, setDp,  user, setUser, signIn, GooglesignIn, setCount, dp } = useContext(AuthContext);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const passwordRef = useRef(null);

    // const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const handleConfirmPasswordChange = event => {
        const confirmPwd = event.target.value;
        setPasswordMatch(confirmPwd === passwordRef.current.value);
        setConfirmPassword(confirmPwd);
    };


    const handleRegister = event => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        // Validate password
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=])[A-Za-z\d!@#$%^&*()_\-+=]{6,}$/;
        if (password.length < 6) {
            setErr('Password should be at least 6 characters long');
            return;
        }
        if (!passwordRegex.test(password)) {
            setErr(
                'Password should contain at least one capital letter, one digit, and one special character'
            );
            return;
        }


        console.log(name, email, password, photo);
        if (password !== confirmPassword) {
            setErr('Passwords do not match');
            return;
        }


        createUser(email, password, photo)
            .then(result => {
                const createdUser = result.user;
                Swal.fire(
                    'Good job!',
                    'Your registration is done!',
                    'success'
                )
                console.log(createdUser);

                createdUser.photoURL = photo;
                result.user.photoURL = photo;
                setDp(photo);
                setErr('');
                const saveUser = { name: name, email: email, photo: photo };
                fetch('https://photo-club-server-ahsaninkiad.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            {/* Navigate to homepage when registration is done */ }
                            navigate('/');

                            event.target.reset();
                        }
                    })


            })
            .catch(error => {
                const errorMessage = error.message;
                setErr(errorMessage.slice(9,));
            })


    }

    const handleGlogin = () => {
        GooglesignIn(provider)
            .then(result => {
                const Guser = result.user;
                // Swal.fire(
                //     'Good job!',
                //     'Your toy has been added!',
                //     'success'
                //   )
                // setCount(1);
                console.log(Guser);
                
                setUser(Guser);
                const saveUser = { name: Guser.displayName, email: Guser.email, photo: Guser.photoURL };
                fetch('https://photo-club-server-ahsaninkiad.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                            {/* Navigate to homepage when registration is done */ }
                            navigate('/');

                           
                       
                    })


            })
            .catch(error => {
                console.log(error);
            })
    }
    return (

        <div className='pb-10 pt-10'>
            <div className='flex '>
                <form onSubmit={handleRegister} className="Laform mx-auto">
                    <div className="Latitle mx-auto  text-center"> <span className=''></span>     Welcome<br /><span>Complete your registration :</span></div>
                    <input type="text" placeholder="Name" name="name" className="Lainput" required />
                    <input type="email" placeholder="Email" name="email" className="Lainput" required />
                    <input type="password" placeholder="Password" name="password" className="Lainput" ref={passwordRef} required />
                    {err && <p className="Lainput-error-text">{err}</p>}
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" className="Lainput" required value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    {!passwordMatch && <p className="Lainput-error-text">Passwords did not match</p>}
                    {passwordMatch && <p className="Lainput-match-text">Password matched</p>}
                    <input type="text" placeholder="Photo URL" name="photo" className="Lainput" required />
                    <button className='mx-auto w-1/2 btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline btn-info '> <span className='text-black'>Register</span> </button>


                    <div className="-mt-6 font-semibold text-[#666] mx-auto   text-center"> <br /><span className='text-sm'>Already have an account? : <Link to='/login'> <u className=' hover:text-blue-500 text-md font-bold'>Log in</u></Link> </span></div>
                </form>



            </div>
            <button onClick={handleGlogin} className="mt-6 Lalogin-with mx-auto">
                <div className="Labutton-log">
                    <svg className="Laicon" height="56.6934px" id="Layer_1" version="1.1" viewBox="0 0 56.6934 56.6934" width="56.6934px" xml: space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink"><path d="M51.981,24.4812c-7.7173-0.0038-15.4346-0.0019-23.1518-0.001c0.001,3.2009-0.0038,6.4018,0.0019,9.6017  c4.4693-0.001,8.9386-0.0019,13.407,0c-0.5179,3.0673-2.3408,5.8723-4.9258,7.5991c-1.625,1.0926-3.492,1.8018-5.4168,2.139  c-1.9372,0.3306-3.9389,0.3729-5.8713-0.0183c-1.9651-0.3921-3.8409-1.2108-5.4773-2.3649  c-2.6166-1.8383-4.6135-4.5279-5.6388-7.5549c-1.0484-3.0788-1.0561-6.5046,0.0048-9.5805  c0.7361-2.1679,1.9613-4.1705,3.5708-5.8002c1.9853-2.0324,4.5664-3.4853,7.3473-4.0811c2.3812-0.5083,4.8921-0.4113,7.2234,0.294  c1.9815,0.6016,3.8082,1.6874,5.3044,3.1163c1.5125-1.5039,3.0173-3.0164,4.527-4.5231c0.7918-0.811,1.624-1.5865,2.3908-2.4196  c-2.2928-2.1218-4.9805-3.8274-7.9172-4.9056C32.0723,4.0363,26.1097,3.995,20.7871,5.8372  C14.7889,7.8907,9.6815,12.3763,6.8497,18.0459c-0.9859,1.9536-1.7057,4.0388-2.1381,6.1836  C3.6238,29.5732,4.382,35.2707,6.8468,40.1378c1.6019,3.1768,3.8985,6.001,6.6843,8.215c2.6282,2.0958,5.6916,3.6439,8.9396,4.5078  c4.0984,1.0993,8.461,1.0743,12.5864,0.1355c3.7284-0.8581,7.256-2.6397,10.0725-5.24c2.977-2.7358,5.1006-6.3403,6.2249-10.2138  C52.5807,33.3171,52.7498,28.8064,51.981,24.4812z"></path></svg>
                </div>
            </button>
        </div>

    );
};

export default Register;
import React, { useContext, useRef, useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const [err, setErr] = useState('');
    const { createUser, setDp, signIn } = useContext(AuthContext);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const passwordRef = useRef(null);

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
                    'Your toy has been added!',
                    'success'
                )
                console.log(createdUser);

                createdUser.photoURL = photo;
                result.user.photoURL = photo;
                setDp(photo);
                setErr('');
                {/* Navigate to log in when registration is done */ }
                navigate('/');

                event.target.reset();
            })
            .catch(error => {
                const errorMessage = error.message;
                setErr(errorMessage.slice(9,));
            })


    }
    return (
        <div className='flex py-20'>
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

    );
};

export default Register;
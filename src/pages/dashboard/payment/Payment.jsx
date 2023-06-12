import React, { useContext } from 'react';
import './Payment.css'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOut from './CheckOut';
import { AuthContext } from '../../../providers/AuthProvider';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateay_PK);
const Payment = () => {
    const {  payprice, payid, paycourse, paycoursePic, paycourseInsName, paycourseInsEmail} = useContext((AuthContext));
   console.log("price", payprice);
    return (
        <div>
            <p className='text-center text-[#2d384a] font-bold text-3xl  mb-40'>Payment page</p>
            <Elements stripe={stripePromise}>
                <CheckOut 
                price={payprice}
                payid={payid}
                paycourse={paycourse}
                paycoursePic={paycoursePic}
                paycourseInsName={paycourseInsName}
                paycourseInsEmail={paycourseInsEmail}
                ></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;
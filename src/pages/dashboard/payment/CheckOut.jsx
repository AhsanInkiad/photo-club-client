import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = ({ price, payid, paycourse, paycoursePic, paycourseInsName, paycourseInsEmail }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [trxId, setTrxId] = useState('');
    const { user } = useContext((AuthContext));

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        if (price > 0) {
            fetch("http://localhost:5000/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ price }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
    }, []);






    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        console.log('card', card);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('');
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'

                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent);

        setProcessing(false);

        // Payment successll

        if (paymentIntent.status === 'succeeded') {
            setTrxId(paymentIntent.id);
            Swal.fire({
                position: 'middle',
                icon: 'success',
                title: 'Payment Succesfull!',
                showConfirmButton: false,
                timer: 1500
            })
            // save payment info
            const payment = {
                email: user?.email,
                classID: payid,
                courseName: paycourse,
                coursePhoto: paycoursePic,
                instructor_name: paycourseInsName,
                instructor_email: paycourseInsEmail,
                price: price,
                date: new Date(),
                transactioId: paymentIntent.id
            }

            // Creating instances in the database

            fetch('http://localhost:5000/payment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data);
                    if (data.insertedId) {
                        // TODO
                        fetch(`http://localhost:5000/del/${payid}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(datas => {
                                console.log(datas);
                                if (datas.deletedCount > 0) {
                                    Swal.fire(
                                        'Done!',
                                        'Check Enrolled Classes.',
                                        'success'
                                    )
                                    refetch();
                                }

                            })
                    }
                });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='w-[800px]'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-outline btn-info btn-sm mt-10' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-600 mt-2'>{cardError}</p>}
            {trxId && <p className='text-green-500 mt-2'>Transaction completed. <span className='font-semibold'>TransacrionId:</span>  <span className='text-black text-sm font-semibold'>{trxId}</span>  </p>}
        </>
    );
};

export default CheckOut;

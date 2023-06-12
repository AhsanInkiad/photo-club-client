import React, { useContext } from 'react';
import './PaymentHistory.css'
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { user } = useContext((AuthContext));
    const url = `http://localhost:5000/paymenthistory?email=${user.email}`;

    // tanstack query
    const { data: payh = [], refetch } = useQuery(['payh'], async () => {
        const res = await fetch(url)
        return res.json();
    })

    console.log("payment", payh);
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table text-black text-lg font-semibold">
                    {/* head */}
                    <thead>
                        <tr className='text-black text-xl text-center'>

                            <th>Class Name</th>

                            <th>Price</th>
                            <th>TrxID</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payh.map(tab => (
                                <tr>

                                    <td className='text-center'>{tab.courseName}</td>

                                    <td className='text-center'>${tab.price}</td>
                                    <td className='text-center text-sm text-green-600'>{tab.transactioId}</td>
                                    <td className='text-center'>{tab.date}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
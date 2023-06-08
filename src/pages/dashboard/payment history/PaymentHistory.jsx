import React from 'react';
import './PaymentHistory.css'

const PaymentHistory = () => {
    return (
        <div>
           
            <div className="overflow-x-auto">
                <table className="table text-black text-lg font-semibold">
                    {/* head */}
                    <thead>
                        <tr className='text-black text-xl text-center'>
                           
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                  
                            <td className='text-center'>Cy Ganderton</td>
                            <td className='text-center'>Quality Control Specialist</td>
                            <td className='text-center'>$29</td>
                            <td className='text-center'>Blue</td>
                        </tr>
            
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
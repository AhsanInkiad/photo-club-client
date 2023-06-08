import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    const {user, loading} =useContext(AuthContext);
    if(user?.email){
        return children;
    }

    if(loading) {
        return <progress className="progress text-white bg-white w-56"></progress>
    }

    return <Navigate to='/login' replace></Navigate>;

};

export default PrivateRoutes;
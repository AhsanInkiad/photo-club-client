import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(false);
    const [dp, setDp] = useState(null);
    const [picId, setPicId] = useState(null);
    const [fpicId, fsetPicId] = useState(null);
    const [totalClass, setTotalClass] = useState(null);
    const [totalSelectedClass, setTotalSelectedClass] = useState(null);
    const [payprice, setPayprice] = useState(null);
    const [payid, setPayid] = useState(null); 
    const [paycourse, setPaaycorse] = useState(null); 
    const [paycoursePic, setPaaycorsePic] = useState(null);
    const [paycourseInsName, setPaaycorseInsName] = useState(null);
    const [paycourseInsEmail, setPaaycorseInsEmail] = useState(null);   
    const [totalEnrolled, setTotalEnrolled] = useState(null); 

    const createUser = (email, password, photos) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const GooglesignIn = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
         setUser(currentUser);
         setLoading(false);
         })
 
         return () =>{
             unsubscribe()
         }
     },[])
   
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        GooglesignIn,
        count, 
        setCount,
        dp, 
        setDp,
        picId, 
        setPicId,
        fpicId, 
        fsetPicId,
        totalClass, 
        setTotalClass,
        totalSelectedClass, 
        setTotalSelectedClass,
        payid, 
        setPayid,
        payprice, 
        setPayprice,
        paycourse, 
        setPaaycorse,

        paycoursePic, 
        setPaaycorsePic,
        paycourseInsName, 
        setPaaycorseInsName,
        paycourseInsEmail, 
        setPaaycorseInsEmail,
        totalEnrolled, 
        setTotalEnrolled
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
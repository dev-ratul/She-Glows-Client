import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);

    const signUp=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

     useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

    const authInfo= {
        signUp,
        signIn,
        user

        

    }
    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;
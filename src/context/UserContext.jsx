import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useState, useEffect } from 'react';
import { useSignInWithGoogle, useSignOut } from 'react-firebase-hooks/auth';
import app from '../firebase.init';
import Loading from '../Shared/Loading/Loading';


export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [signInWithGoogle, gUser, gSignInLoading, gSignInError] = useSignInWithGoogle(auth);  
    const [signOut, gSignOutLoading, gSignOutError] = useSignOut(auth);
    const [user, setUser] = useState({})


    const handleSignInWithGoogle =async () => {
        await signInWithGoogle()
        setUser(gUser)
    }
    const handleSignOutWithGoogle =async () => {
        await signOut()
        setUser({})
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (createUser) => {
          setUser(createUser);
        });
        return () => unsubscribe();
      }, []);

    if (gSignInLoading || gSignOutLoading) {
        <Loading></Loading>
    }

    const props = {
        user,
        handleSignInWithGoogle,
        handleSignOutWithGoogle,
        auth
    }
    return <AuthContext.Provider value = {props}>
        {children}
    </AuthContext.Provider>
};

export default UserContext;

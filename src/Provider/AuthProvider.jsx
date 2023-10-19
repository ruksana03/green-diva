import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import {auth} from "../Firebase/firebaseConfig";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    // google login 

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

        // Create user & sign up
        const createUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword (auth, email, password);
        }

        // sign in

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

        // user profile manage

        const handleProfile = (name, img) => {
            return updateProfile(auth.currentUser, {
                displayName: name, photoURL: img
            })
        }

        // sign Out 
        const logOut = () =>{
            return signOut(auth)
        }

        // observer 

        useEffect(()=>{
            onAuthStateChanged(auth,(user)=>{
                setUser(user);
                setLoading(false);
            })
        },[])

    const authentications = {
        user,
        createUser,
        loading,
        signIn,
        handleProfile,
        googleLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
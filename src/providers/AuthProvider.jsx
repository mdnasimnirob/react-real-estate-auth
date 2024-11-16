import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            console.log('user state change', currentUser);
            setUser(currentUser);
        });
        return () => {
            unSubcribe();
        }
    }, [])

    const info = {
        user,
        createUser,
        signIn,
        logOut,

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;;
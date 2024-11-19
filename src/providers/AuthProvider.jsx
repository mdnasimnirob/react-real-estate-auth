import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from "prop-types";

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider;
const proviferFacebook = new FacebookAuthProvider;
const githubProvider = new GithubAuthProvider;


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

    const googleLogin = () => {
        return signInWithPopup(auth, providerGoogle);
    }

    const facebookLogin = () => {
        return signInWithPopup(auth, proviferFacebook)
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
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
        googleLogin,
        facebookLogin,
        githubLogin,


    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

export default AuthProvider;;
import React, {useState} from 'react';
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'
import firebaseConfig from "../services/firebase-config";

const AuthContext = React.createContext(null);

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    let signin = async (newUser, callback) => {
        const auth = getAuth(firebaseConfig);
        await signInWithEmailAndPassword(auth, newUser.email, newUser.password);
        await onAuthStateChanged(auth, (user)=>{
            if(user) {
                setUser(user);
            }
        });
        callback();
    }

    let signout = async (callback) => {
        const auth = getAuth(firebaseConfig);
        await signOut(auth);
        setUser(null);
        callback();
    }

    let value = {user, signin, signout};

    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
}

const useAuth = () => {
    return React.useContext(AuthContext);
}

export default useAuth;

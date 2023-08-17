import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase.config";
const UserContext = createContext(null)
const auth = getAuth(app)

const Providers = ({ children }) => {

    const [user, setUser] = useState(null)
    const [services, setServices] = useState([])
    const [isLogin, setLogin] = useState(false)
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])


    /** firebase registration section handler */


    /**handle create new user */
    const handleSignup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Signed in 
                console.log('success')
                window.history.back()
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage)
                // ..
            });
    }
    /**handle create new user */

    /** handle sign in  */

    const handleSignIn = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Signed in 
                console.log('success')
                window.history.back()
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage)
            });
    }


    /** handle sign in  */

    /*** take user */

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            //const uid = user.uid;
            setUser(user)
            // ...
        } else {
            // User is signed out
            // ...
        }
    });


    /*** take user */

    /** handle signning out */


    /** handle signning out */
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser(null)
        }).catch((error) => {
            // An error happened.
            console.error(error)
        });
    }
    /** update user profile */

    const handleUserProfileUpdate = () => {
        updateProfile(auth.currentUser, {
            displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
            console.error(error)
        });
    }
    /** update user profile */

    /** firebase registration section handler */

    const info = {
        services,
        isLogin,
        setLogin,
        auth,
        handleSignup,
        handleSignIn,
        handleSignOut,
        handleUserProfileUpdate,
        user,
        loading,
        setLoading,

    }

    return (
        <UserContext.Provider value={info}>
            {children}
        </UserContext.Provider>
    );
};

export { Providers, UserContext };
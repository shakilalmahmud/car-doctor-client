import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase.config";
const UserContext = createContext(null)

const Providers = ({ children }) => {

    const [user, setUser] = useState(null)
    const [services, setServices] = useState([])
    const [isLogin, setLogin] = useState(false)
    const [loading, setLoading] = useState(false)
    const auth = getAuth(app)

    const handleCreateEmailandPassword = (auth, email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLoginWithEmailandPassword = (auth, email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleLogOut = (auth) => {
        return signOut(auth)
    }

    
   

    // const handleProfileUpdate = (auth, name) =>{
    //     return updateProfile (auth.currentUser, {
    //         displayName : {name}
    //     })

    // }

    

    onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user)
            console.log(user)
        }
        else {
            setUser(null)
        }
    })

    useEffect(() => {
        setLoading(true)
        fetch('https://car-server-ggpcw5za6-shakilam1092-gmailcom.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [loading, services])

    const info = {
        services,
        isLogin,
        setLogin,
        auth,
        handleCreateEmailandPassword,
        handleLoginWithEmailandPassword,
        // handleProfileUpdate,
        user,
        loading,
        setLoading,
        handleLogOut,
        }

    return (
        <UserContext.Provider value={info}>
            {children}
        </UserContext.Provider>
    );
};

export { Providers, UserContext };
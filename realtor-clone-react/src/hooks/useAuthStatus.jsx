import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useState } from "react"

export function useAuthStatus() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setChekingStatus] = useState(true)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) =>{
            if(user){
                setLoggedIn(true);
            }
            setChekingStatus(false);
        })
    }, [])
  return { loggedIn, checkingStatus}
}

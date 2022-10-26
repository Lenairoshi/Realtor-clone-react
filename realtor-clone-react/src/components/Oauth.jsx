import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'
import { db } from  '../firebase'
import { useNavigate } from 'react-router-dom'





export default function Oauth() {

  const navigate = useNavigate()


 async function onGoogleClick(){
    
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()

      const result = await signInWithPopup(auth, provider)
      const user = user.result

      // check for the user

      const docRef = doc(db, "users", user.uid)

      const docSnap = await getDoc(docRef)

      if(!docSnap.exists()){

        await setDoc(docRef, {
          name: user.name,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/")
      
    } catch (error) {
      toast.error("Could not connect!")
      
    }

  }
  return (
    <div>
      <button type='button' onClick={ onGoogleClick } className='flex items-center justify-center w-full bg-red-700 text-white rounded px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900  hover:shadow-lg transition duration-150 ease-in-out'>
        <FcGoogle className='text-2xl mr-2 rounded-full bg-white'/>
        Continue with Google</button>
    </div>
  )
}
 
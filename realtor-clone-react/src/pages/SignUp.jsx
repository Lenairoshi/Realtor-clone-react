import React from 'react'
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { Link } from "react-router-dom"
import Oauth from '../components/Oauth';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db } from '../firebase'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function SignUp() {

  /*create the hook to store the form data */

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  /* create the variable to store the email and password where it can be accessed */

  const { name, email, password } = formData;

  const navigate = useNavigate()

  /** create the function that responds to the onchange event */
  function onChange(e) {

    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,

    }));

  }

  async function onSubmit(e) {

    e.preventDefault();

    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      updateProfile(auth.currentUser, {
        displayName: name
      })

      const user = userCredential.user
      const formDataCopy = { ...formData }

      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      // eslint-disable-next-line no-undef
      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      // notification after successful registration
      toast.success("Sign up successful!")

      navigate('/');


    } catch (error) {

      toast.error("Error: Make sure you have entered the correct information!")
    }

  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>
        Sign Up
      </h1>

      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ml-20'>

        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtleWJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Key"
            className='w-full rounded-2xl' />
        </div>

        <div className='w-full md:[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
            <input type="text" id="name" value={name} onChange={onChange} placeholder="Full Name" className='mb-6 w-full px-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />
            <input type="email" id="email" value={email} onChange={onChange} placeholder="Email address" className='mb-6 w-full px-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />

            <div className='relative mb-6'>
              <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={onChange} placeholder="Password" className='w-full px-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />


              {showPassword ? <AiFillEyeInvisible className='absolute right-3 top-3 cursor-pointer text-xl' onClick={() => setShowPassword((prevState) => !prevState)} /> : <AiFillEye className='absolute right-3 top-3 cursor-pointer text-xl' onClick={() => setShowPassword((prevState) => !prevState)} />
              }
            </div>

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>Have an account?
                <Link className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1' to="/sign-in">Log in</Link>
              </p>
              <p>
                <Link className='text-blue-600 hover:text-blue-900 transition duration-200 ease-in-out' to="/forgot-password"> Forgot Password?</Link>
              </p>

            </div>
            <button type="submit" className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-900'>Sign Up</button>

            <div className=' flex my-4 items-center before:border-t  before:flex-1  before:border-gray-300  after:border-t  after:flex-1  after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>
            <Oauth />

          </form>

        </div>

      </div>
    </section>
  )
}

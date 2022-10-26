import React from 'react'
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import Oauth from '../components/Oauth';
import { signInWithEmailAndPassword, auth, getAuth } from 'firebase/auth'
import { toast } from 'react-toastify';

export default function SignIn() {

  /*create the hook to store the form data */

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({ email:'', password:''});
  /* create the variable to store the email and password where it can be accessed */

  const {email, password } = formData;
  const navigate = useNavigate()
  /** create the function that responds to the onchange event */
  function onChange(e){

    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value,
     
    }));

  }
  async function onSubmit(e){
      e.preventDefault()
      try {
        const auth = getAuth()
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)

        if(userCredentials.user){
          navigate("/");
        }

              
      } catch (error) {
        
        toast.error("Wrong user credentials")
      }
  }
  return (
    <section>
    <h1 className="text-3xl text-center mt-6 font-bold">
      Sign In
    </h1>

    <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ml-20'>

      <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
        <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Key"
        className='w-full rounded-2xl' />
      </div>

      <div className='w-full md:[67%] lg:w-[40%] lg:ml-20'>
        <form onSubmit={onSubmit}>
          <input type="email" id="email" value={ email } onChange={ onChange } placeholder="Email address" className='mb-6 w-full px-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />

          <div className='relative mb-6'>
            <input type={ showPassword ? "text" : "password"} id="password" value={ password } onChange={ onChange } placeholder="Password" className='w-full px-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />


            { showPassword ? <AiFillEyeInvisible className='absolute right-3 top-3 cursor-pointer text-xl' onClick={()=>setShowPassword((prevState)=>!prevState)} /> : <AiFillEye className='absolute right-3 top-3 cursor-pointer text-xl' onClick={()=>setShowPassword((prevState)=>!prevState)} />
             }
          </div>

          <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
             <p className='mb-6'>Don't have an account?
              <Link className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1' to="/sign-up">Register</Link>
             </p>
             <p>
              <Link className='text-blue-600 hover:text-blue-900 transition duration-200 ease-in-out' to="/forgot-password"> Forgot Password?</Link>
             </p>

          </div>
          <button type="submit" className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-900'>Sign In</button>

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

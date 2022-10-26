import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import Oauth from '../components/Oauth';

export default function ForgotPassword() {

  /*create the hook to store the form data */

  

  const [email, setEmail] = useState("");
  

  /** create the function that responds to the onchange event */
  function onChange(e){

    setEmail(e.target.value);
     
    };
  return (
    <section>
    <h1 className='text-3xl text-center mt-6 font-bold'>
      Forgot Password
    </h1>

    <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ml-20'>

      <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
        <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Key"
        className='w-full rounded-2xl' />
      </div>

      <div className='w-full md:[67%] lg:w-[40%] lg:ml-20'>
        <form >
          <input type="email" id="email" value={ email } onChange={ onChange } placeholder="Email address" className='mb-6 w-full px-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />

          
          <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
             <p className='mb-6'>Don't have an account?
              <Link className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1' to="/sign-up">Register</Link>
             </p>
             <p>
              <Link className='text-blue-600 hover:text-blue-900 transition duration-200 ease-in-out' to="/sign-in">Sign in instead</Link>
             </p>

          </div>
          <button type="submit" className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-900'>Send Reset Password </button>

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

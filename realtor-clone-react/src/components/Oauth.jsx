import React from 'react'
import { FcGoogle } from 'react-icons/fc'

export default function Oauth() {
  return (
    <div>
      <button className='flex items-center justify-center w-full bg-red-700 text-white rounded px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900  hover:shadow-lg transition duration-150 ease-in-out'>
        <FcGoogle className='text-2xl mr-2 rounded-full bg-white'/>
        Continue with Google</button>
    </div>
  )
}
 
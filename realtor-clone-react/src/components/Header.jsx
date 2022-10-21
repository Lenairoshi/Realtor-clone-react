import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Header() {

   const location = useLocation();
   const navigate = useNavigate();

   function pathMathRoute(route){

    if(route === location.pathname){
        return true
    }
   }

  return (
    <div className='bg-white border-b shadow-sm'>
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="Realtor" 
                className="h-5 cursor-pointer" onClick={()=> navigate("/")} />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer 
                    ${pathMathRoute("/") && "text-black border-b-red-500"}`}  onClick={()=> navigate("/")}>Home</li>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer  
                    ${pathMathRoute("/offers") && "text-black border-b-red-500"}`}  onClick={()=> navigate("/offers")}>Offers</li>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer 
                    ${pathMathRoute("/sign-in") && "text-black border-b-red-500"}`}  onClick={()=> navigate("/sign-in")}>Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}

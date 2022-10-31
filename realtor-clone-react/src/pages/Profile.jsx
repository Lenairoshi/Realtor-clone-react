import React from 'react'
import { useState } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { updateDoc, doc} from 'firebase/firestore'
import { db } from '../firebase'


export default function Profile() {


  const auth = getAuth()
  const [changeDetail, setChangeDetail] = useState(false)

  const navigate = useNavigate()
  const [formData, setFormData] = useState({

    name: auth.currentUser.displayName,

    email:auth.currentUser.email
,  })

  const { name, email} = formData

  function onLogOut(){

    auth.signOut();

    navigate("/")
  }

  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id] : e.target.value,
    }))
  }

  async function onSubmit(){
    try {
      if(auth.currentUser.displayName !== name){
        // update display name in firebase authentication

        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update the name in the firestore

        const docRef = doc(db, "users", auth.currentUser.uid)
        
        await updateDoc(docRef, {
          name: name
        });
      }
      toast.success("Profile details updated!");
      
    } catch (error) {
      toast.error("Could not update!")
      
    }

  }
  return (
    <>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>

        <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>

        <div className='w-full md:w-[50%] mt-6 px-3'>
          <form>

            {/**Name Input */}

            <input type="text" id='name' value={ name } 
            disabled={!changeDetail} onChange={onChange} 
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out ${ changeDetail && "bg-red-200 focus:bg-red-200" }`}    />

            {/**Email Input */}

            <input type="email" id='email' value={ email } disabled className=' mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
              <p className='flex items-center'>
                Do you want to change your name?

                <span onClick={()=>{

                  changeDetail && onSubmit() ;

                  setChangeDetail((prevState)=>!prevState);
                
                }}
                 className='text-red-500 hover:text-red-700 transition ease-in-out duration-200 cursor-pointer'>
                  { changeDetail ? "Apply change": "Edit"}
                 </span>
              </p>

                

              <p onClick={onLogOut} className='text-blue-600 hover:text-blue-800 transition ease-in-out cursor-pointer'>Sign Out</p>

            </div>



          </form>
        </div>

      </section>
    </>
  )
}

import { useState } from "react"



export default function CreateListing() {
    const [formData, setFormData]  = useState({
        type: "rent",
        name: '',
        bedrooms: 1,
        bathrooms: 1,
        parkingSpot: false,
        furnished: false,
        address:'',
        description:'',
        offer: true,
        regularPrice: 1,
        discountPrice: 1,
                
    });

    const { type, name, bedrooms, bathrooms, parkingSpot, furnished, address, description, offer, regularPrice, discountPrice  } = formData

    function onChange(){

    }
  return (
    <main className="max-w-md w-full -2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create Listing</h1>

      <form>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex">
            <button type="button" id="type" value='sale' className={`mr-3 px-7 py-3 font-md text-xs uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${ type === "rent" ? 'bg-white text-black': 'bg-slate-600 text-white' } `} onClick={onChange}  >
                Sell
            </button>
            <button type="button" id="type" value='rent' className={`ml-3 px-7 py-3 font-md text-xs uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${ type === "sale" ? 'bg-white text-black': 'bg-slate-600 text-white' } `} onClick={onChange}  >
                Rent
            </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Name</p>

        <input type="text" id="name" value={ name } onChange={onChange} placeholder="Property Name" maxLength="32" minLength="10" required className="w-full px-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-900 focus:bg-white focus:border-slate-600 mb-6"/>
        <div className="flex space-x-6 mb-6">
            <div>
                <p className="text-lg font-semibold ">Beds</p>
                <input type="number"  id="bedrooms" value={bedrooms } onChange={onChange} min="1" max="20" required className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-700  rounded transition duration-150 ease-in-out focus:text-gray-700  focus:border-slate-600 text-center"/>
            </div>
            <div>
                <p className="text-lg font-semibold ">Baths</p>
                <input type="number"  id="bathrooms" value={bathrooms } onChange={onChange} min="1" max="20" required className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-700  rounded transition duration-150 ease-in-out focus:text-gray-700  focus:border-slate-600 text-center"/>
            </div>
        </div>


        <div>
          <p className="text-lg mt-6 font-semibold">Parking spot</p>
          <div className="flex space-x-6 mb-6">
            
            <button type="button" id="yes" value='yes' className={`w-full px-4 py-2 text-xs uppercase rounded shadow-md focus:shadow-lg hover:shadow-lg active: shadow-lg transition duration-200 ease-in-out ${ parkingSpot ? 'bg-slate-600 text-white': 'bg-white text-gray-700'}`} onChange={onchange}>yes</button>
            <button type="button" id="yes" value='yes' className={`w-full px-4 py-2 text-xs uppercase rounded shadow-md focus:shadow-lg hover:shadow-lg active: shadow-lg transition duration-200 ease-in-out ${ parkingSpot ?  'bg-white text-gray-800': 'bg-slate-600 text-white'}`} onChange={onchange} >no</button>
          </div>
          <p className="text-lg mt-6 font-semibold">Furnished</p>
          <div className="flex space-x-6 mb-6">
            
            <button type="button" id="yes" value={false} className={`w-full px-4 py-2 text-sm uppercase rounded shadow-md focus:shadow-lg hover:shadow-lg active: shadow-lg transition duration-200 ease-in-out ${ parkingSpot ? 'bg-slate-600 text-white': 'bg-white text-gray-700'}`} onChange={onchange}>yes</button>
            <button type="button" id="yes" value={true} className={`w-full px-4 py-2 text-xs uppercase rounded shadow-md focus:shadow-lg hover:shadow-lg active: shadow-lg transition duration-200 ease-in-out ${ furnished ?  'bg-white text-gray-800': 'bg-slate-600 text-white'}`} onChange={onchange} >no</button>
          </div>

          <p className="text-lg font-semibold">Address</p>

          <textarea type="text" id="address" value={address} onChange={onChange} placeholder="Address" required className="w-full px-2 text-smcd text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-900 focus:bg-white focus:border-slate-600 mb-6"/>
          <p className="text-lg font-semibold">Description</p>

          <textarea type="text" id="description" value={description} onChange={onChange} placeholder="Description" required className="w-full px-2 text-smcd text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-900 focus:bg-white focus:border-slate-600 mb-6"/>
        </div>
        <p className="text-lg font-semibold">Offers</p>
          <div className="flex space-x-6 mb-10">
            
            <button type="button" id="yes" value={offer} className={`w-full px-4 py-2 text-xs uppercase rounded shadow-md focus:shadow-lg hover:shadow-lg active: shadow-lg transition duration-200 ease-in-out ${ !offer ? 'bg-slate-600 text-white': 'bg-white text-gray-700'}`} onChange={onchange}>yes</button>
            <button type="button" id="yes" value={offer} className={`w-full px-4 py-2 text-xs uppercase rounded shadow-md focus:shadow-lg hover:shadow-lg active: shadow-lg transition duration-200 ease-in-out ${ offer ? 'bg-slate-600 text-white': 'bg-white text-gray-700'}`} onChange={onchange} >no</button>
          </div>

        
            <div className="flex items-center mb-6">
               <div className="">
                 <p className="text-lg font-semibold">Regular price</p>
                 <div className="flex w-full justify-center items-center">
                   <input type="number" id="regularPrice" value={regularPrice} onChange={onChange} min="50" max="400000000" required className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out  focus:bg-white focus:text-gray-700 focus:border-slate-600 text-center " />
 
                   {type === "rent" && (
                   
                   <div className="">
                     <p className="text-md w-4 whitespace-nowrap">$/Month</p>
                   </div>
         
                 )}
                  </div>
               
               </div>
 
             </div>
             {offer && ( 
             <div className="flex items-center mb-6">
               <div className="">
                 <p className="text-lg font-semibold">Discounted price</p>
                 <div className="flex w-full justify-center items-center">
                   <input type="number" id="discountPrice" value={discountPrice} onChange={onChange} min="50" max="400000000" required={offer} className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out  focus:bg-white focus:text-gray-700 focus:border-slate-600 text-center " />
 
                   {type === "sale" && (
                   
                   <div className="">
                     <p className="text-md w-4 whitespace-nowrap">$/Month</p>
                   </div>
         
                 )}
                 </div>
               
               </div>
 
             </div>
         )}

           <div className="mb-6">

            <p className="text-xl font-semibold">Images</p>
            <p>The first image is the cover (max 6)</p>

            <input type="file" id="images" onChange={onChange} accept=".jpg, .jpeg, .png" className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out"/>
          </div> 

          <button type="submit" className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md transition duration-150 ease-in-out hover:shadow-lg hover:bg-blue-800 focus:bg-blue-600 focus:shadow-lg active:bg-blue-800 active:shadow-lg">Create Listing</button>    

      </form>
    </main>
  )
}

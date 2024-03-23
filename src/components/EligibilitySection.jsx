import React from 'react'
import { FaRegCircle } from "react-icons/fa";

const EligibilitySection = () => {
  return (
    <div className="container mx-auto">
    <div className=' grid grid-cols-2 '>
    <div className="p-10 w-[120%]">
        <h1 className='text-4xl font-semibold mt-5'>Eligibility For Treatment<span className='text-red-500 text-3xl'>.</span></h1>
        <div className='mt-4 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias beatae illo mollitia placeat, natus assumenda accusantium libero ullam consequuntur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ab at et quam accusantium ex, ratione magnam maxime rerum quaerat!
        </div>
       
        <div className="mt-4 ">
           In genreal, gastric bypass could be a good option if :
        </div>
        <div className="mt-4 ">
        <div className="flex items-center gap-3"><FaRegCircle  className='text-blue-500 '/><span>The BMI (body mass index) is 40 or more.</span></div>
        <div className="flex items-center gap-3 mt-2 mb-2"><FaRegCircle  className='text-blue-500 '/><span >Your BMI is 30 or more with server weight-realted health conditions. </span></div>
        <div className="flex items-center gap-3"><FaRegCircle  className='text-blue-500 '/><span>You are willing to make permanent chnages in the lifestyle.</span></div>
        </div>
        <div className='border border-blue-500 border-dotted  w-full font-bold mt-10'></div>
    </div>
    <div className="">
        <form className='flex flex-col justify-center shadow-xl p-10 rounded-md gap-7 max-w-[360px] ml-52 mt-5' >
          <h1 className='text-4xl text-blue-500 font-serif'>Need Help ?</h1>
          <div>Just let us know. We will be happy to assist you.</div>
          <input type="text" placeholder='Full Name' className='outline-none border border-gray-200 p-2'/>
          <input type="email" placeholder='Email' className='outline-none border border-gray-200 p-2'/>
          <input type="tel" placeholder='Phone Number' className='outline-none border border-gray-200 p-2'/>
          <button className='bg-blue-500 text-white  rounded p-2 px-10'>Send Enquiry</button>
        </form>
    </div>
    </div>
   
   
    
    </div>
  )
}

export default EligibilitySection
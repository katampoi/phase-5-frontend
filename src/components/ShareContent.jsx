import React from 'react'
import * as Io from "react-icons/io"
import * as Fa from "react-icons/fa";

function ShareContent({}) {
  return (
    <div className='w-full h-[200px] bg-[#e3ebfa] rounded-xl'>
        <form >
            <textArea rows="3" placeholder='Share your content. . . . .' className='w-full h-full bg-transparent text-xl text-gray-500 p-5 outline-none' />
        </form>
        <div className='mx-5 flex flex-row justify-between'>
            <div className='flex flex-row space-x-3'>
                <div className='border border-gray-500 rounded-full p-2'>
                    <Fa.FaPlus className=' text-xl  text-gray-600 cursor-pointer'/>
                </div>
                <div className='border border-gray-500 rounded-full p-2'>
                    <Fa.FaPlus className=' text-xl text-gray-600 cursor-pointer'/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ShareContent

import React from 'react'
import * as Io from "react-icons/io"
import * as Fa from "react-icons/fa";

function Tweet({data}) {
  return (
    <div className=' p-3 w-full bg-white rounded-xl flex space-x-5'>
      <div>
      <Fa.FaHeart/>
      </div>
      <img src="https://media.istockphoto.com/photos/portrait-of-smiling-mixed-race-woman-looking-at-camera-picture-id1319763830?k=20&m=1319763830&s=612x612&w=0&h=ooguDiiKrPmsnN4MKQ7S1pIfddwAqXnqF7XW4MF6gM8=" alt="" className='w-[70px] h-[70px] object-cover rounded-full' />

      <div>
        <div className="userInfo flex flex-row space-x-3 pt-2 mb-3 ">
            <h2 className='text-xl font-bold'>Job Sidney</h2>
            <p className='font-light text-gray-600'>@jobsidney</p>
        </div>
        <p className='pr-8'>
        a single distinct meaningful element of speech or writing, used with others (or sometimes alone) to form a sentence and typically shown with a space on either side when written or printed. "I don't like the word ‘unofficial’" sentence and typically shown with a space on either side when written or printed.

        </p>

        <div className='flex flex-row mt-2 text-xl space-x-6'>
            <div className='flex flex-row items-center space-x-1'>
                <Fa.FaHeart/>
                <span className='text-sm'>2.1k</span>
            </div>
            <div className='flex flex-row items-center space-x-1'>
                <Fa.FaComment/>
                <span className='text-sm'>24</span>
            </div>
            <div className='flex flex-row items-center space-x-1'>
                <Fa.FaThumbsDown/>
                <span className='text-sm'>21</span>
            </div>
            <div className='flex flex-row items-center space-x-1'>
                <Fa.FaShare/>
            </div>
            <div className='flex flex-row items-center space-x-1'>
                <Fa.FaShare/>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Tweet

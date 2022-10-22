import React from 'react'

function Tweet() {
  return (
    <div className=' p-3 w-full bg-white rounded-xl flex space-x-5'>
      <img src="https://media.istockphoto.com/photos/portrait-of-smiling-mixed-race-woman-looking-at-camera-picture-id1319763830?k=20&m=1319763830&s=612x612&w=0&h=ooguDiiKrPmsnN4MKQ7S1pIfddwAqXnqF7XW4MF6gM8=" alt="" className='w-[70px] h-[70px] rounded-full' />

      <div>
        <div className="userInfo flex flex-row space-x-3 pt-2 mb-3 ">
            <h2 className='text-xl font-bold'>Job Sidney</h2>
            <p className='font-light text-gray-600'>@jobsidney</p>
        </div>
        <p className='pr-8'>
        a single distinct meaningful element of speech or writing, used with others (or sometimes alone) to form a sentence and typically shown with a space on either side when written or printed. "I don't like the word ‘unofficial’" sentence and typically shown with a space on either side when written or printed.

        </p>

        <div className='flex flex-row'>

        </div>
        
      </div>
    </div>
  )
}

export default Tweet

import React from 'react'

function TrendingCard() {
  return (
    <div className='flex flex-row space-x-2 p-2 border bg-white rounded-lg m-2 h-fit'>
      <img className='w-14 rounded-full h-14 object-cover' src="https://media.istockphoto.com/photos/portrait-concept-picture-id1016761216?k=20&m=1016761216&s=612x612&w=0&h=jEC8voGLjSyhdOO7EMQyrLtZ9m--TEUmd4X56sqyZk0=" alt="" />
      <div>
        <div className="userInfo flex flex-row space-x-3 pt-2 mb-3 ">
            <h2 className='text-md font-bold'>Job Sidney</h2>
            <p className='font-light text-gray-600'>@jobsidney</p>
        </div>
        <p>
        a single distinct meaningful element of speech or writing,  
        </p>
      </div>
    </div>
  )
}

export default TrendingCard

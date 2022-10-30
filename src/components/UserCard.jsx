import React from 'react'

function UserCard({user}) {
  return (
    <div className=' h-44 rounded-xl bg-[#e3ebfa] p-4 flex flex-col justify-between'>
        <div className='flex flex-row space-x-3'>
            <img className='w-14 rounded-full h-14 object-cover' src="https://media.istockphoto.com/photos/portrait-concept-picture-id1016761216?k=20&m=1016761216&s=612x612&w=0&h=jEC8voGLjSyhdOO7EMQyrLtZ9m--TEUmd4X56sqyZk0=" alt="" />
        <div>
            <div className="userInfo flex flex-col pt-2 mb-3 ">
                <h2 className='text-md font-bold'>{`${user.first_name} ${user.last_name}`}</h2>
                <p className='font-light text-gray-600'>{`@${user.username}`}</p>
            </div>
        </div>

        </div>

        <div className='flex flex-row justify-between'>
            <div>
                <h2 className='font-semibold'>2.1k</h2>
                <p>Following</p>
            </div>
            <div>
                <h2 className='font-semibold'>2.1k</h2>
                <p>Posts</p>
            </div>
        </div>

    </div>
  )
}

export default UserCard

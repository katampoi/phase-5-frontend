import * as React from 'react'

function login() {
  return (
    <div className=' mt-40 p-5 px-0.5 '>

      <div>
      <h1 className='text-5xl font-semibold '>Welcome Back </h1>
      <p className=' text-lg text-gray-500 font-semibold mt-4'>please enter your details</p>
      </div>

      <div className='mt-8 '>
      <div>
        {/* <label className='text-lg font-semibold ' htmlFor="">Email :   </label> */}

        <form action="" className='flex flex-col items-center space-y-3'>
          <input 
          className='w-1/4 border-2 border-grey-100 rounded-xl p-5'
          type="text"
          placeholder='Email'
          />
          <input 
        className='w-1/4 border-2 border-grey-100 rounded-xl p-5'
        type="password"
        placeholder=' Password'
         />
        <div className='content'>
        <button className='bg-blue-400 rounded-xl px-10 mt-8 p-5 '>Login</button>
        <button className='text-[#3080ED]  '>forgot password?</button>
        </div>
        <div className='mt-5 text-lg font-semibold'>
        <p> <h1>Do not have an Account? <span className='text-[#3080ED] '>Create new </span></h1> </p>
      </div>

        </form>

      </div>

      <div className=' contents text-lg font-semibold'>


        
      
        
        
      </div>




      </div>



      
    </div>
  )
}

export default login

import * as React from 'react'

function login() {
  return (
    <div className='flex flex-col  m-auto w-screen h-screen items-center justify-center'>
      <form action="" className='flex flex-col space-y-10 md:w-[450px] '>
        <input type="email" placeholder='Email' className=' border border-black p-4 rounded-md bg-[#F5F7FB] text-black' />
        <input type="password" placeholder='Password' className='border border-black p-4 rounded-md bg-[#F5F7FB] text-blac' />
        <div className='flex flex-row items-center justify-between'>
          <button type='submit' className='bg-[#3080ED] px-12 py-2 rounded-[30px] text-white font-bold'>Login</button>
          <div className='text-[#3080ED] font-bold'>Forgot password?</div>
        </div>
        <p className='font-bold text-lg text-start'>Do not have an Account? <span className='text-sm text-[#3080ED]'>Create New</span></p>
      </form>

    </div>
  )
}

export default login

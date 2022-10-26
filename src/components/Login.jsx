import * as React from 'react'

function login() {
  return (
    <div className='flex flex-col  m-auto w-screen h-screen items-center justify-center'>
      <form action="" className='flex flex-col space-y-3 '>
        <input type="email" placeholder='Email' className=' border p-4 rounded-md' />
        <input type="password" placeholder='Password' className='border p-4 rounded-md' />
        <div className='flex flex-row items-center justify-between'>
          <button type='submit' className='bg-[#3080ED] px-8 py-2 rounded-[30px] text-white font-bold'>Login</button>
          <div>Forgot password?</div>
        </div>
      </form>

    </div>
  )
}

export default login

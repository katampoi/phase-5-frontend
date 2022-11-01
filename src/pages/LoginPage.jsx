import React from 'react'
import Login from '../components/Login'

function LoginPage({onLogin}) {
  return (
    <div className='h-[80vh] bg-white-400 text-center login m-0 p-0 '>
      <div className=''>
      <Login onLogin={onLogin} />

      </div>
    </div>
  )
}

export default LoginPage
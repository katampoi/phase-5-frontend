import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

function Login({onLogin}) {
  const [formData,setData] = useState({});
  const[data,setUser]=useState('');

    function handleChange(event) {
    const name=event.target.name;
    const value=event.target.value;
    setData({
    ...formData,
    [name]: value,
    })
    }

    function handleSubmit(event) {
        //   fetch("http://localhost:3000/login", {
        //   method: "POST",
        //   headers: {
        //     "content-Type": "application/json",
        // },
        //   body: JSON.stringify(formData),
        // }).then((res)=>res.json()).then(data=>{
          
          
        //   if(data.status==='ok') {
        //     onLogin({
        //       "username": "sid",
        //       "email": "jovan@gmail.com",
        //       "first_name": "jovan",
        //       "last_name": "sid",
        //       "user_type": "student",
        //       "password_confirmation": "qwerty",
        //       "password": "qwerty"
              
        //   })
        //   }
        //   else{
        //     event.preventDefault()
        //     alert(data.message)
        //   }
        // })
        onLogin({
          "username": "sid",
          "email": "jovan@gmail.com",
          "first_name": "jovan",
          "last_name": "sid",
          "user_type": "student",
          "password_confirmation": "qwerty",
          "password": "qwerty"
          
      })
    }
  return (
    <div className='flex flex-col  m-auto w-screen h-screen items-center justify-center'>

      <form onSubmit={handleSubmit} action="" className='flex flex-col space-y-10 md:w-[450px] '>
        <input name='username' type="text" placeholder='Username' onChange={handleChange} className=' border border-black p-4 rounded-md bg-[#F5F7FB] text-black' />
        <input name='password' type="password" placeholder='Password' onChange={handleChange} className='border border-black p-4 rounded-md bg-[#F5F7FB] text-blac' />

      <form onSubmit={onLogin({
    "username": "sid",
    "email": "jovan@gmail.com",
    "first_name": "jovan",
    "last_name": "sid",
    "user_type": "student",
    "password_confirmation": "qwerty",
    "password": "qwerty"
    
})} action="" className='flex flex-col space-y-10 md:w-[450px] '>

        <div className='flex flex-row items-center justify-between'>
          <button type='submit' className='bg-[#3080ED] px-12 py-2 rounded-[30px] text-white font-bold'>Login</button>
          <div className='text-[#3080ED] font-bold'>Forgot password?</div>
        </div>
        <p className='font-bold text-lg text-start'>Do not have an Account? <span className='text-sm text-[#3080ED]'>Create New</span></p>
      </form>

    </div>
  )
}

export default Login

import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import LandingPage from '../pages/LandingPage';


function Login({onLogin,loggedUser}) {
  const [formData,setData] = useState({});
  const navigate = useNavigate()
 

    function handleChange(event) {
    const name=event.target.name;
    const value=event.target.value;
    setData({
    ...formData,
    [name]: value,
    })
    }

    function handleSubmit(event) {
        event.preventDefault()
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
      },
        body: JSON.stringify(formData),
      }).then((res)=>res.json()).then(data=>{
          loggedUser(data.id)
          onLogin(data)
          if (data.id) {
            navigate('/Landing')
            alert(data.id)
          }

        })
    }
  return (
    <div className='flex flex-col  m-auto w-screen h-screen items-center justify-center'>

      <form onSubmit={handleSubmit} action="" className='flex flex-col space-y-10 md:w-[450px] '>
        <input name='username' type="text" placeholder='Username' onChange={handleChange} className=' border border-black p-4 rounded-md bg-[#F5F7FB] text-black' />
        <input name='password' type="password" placeholder='Password' onChange={handleChange} className='border border-black p-4 rounded-md bg-[#F5F7FB] text-blac' />

        <div className='flex flex-row items-center justify-between'>
          <button type='submit' className='bg-[#3080ED] px-12 py-2 rounded-[30px] text-white font-bold'><Link to="/Landing" element={<LandingPage userr={1}/>} >Login</Link></button>
          {/* <button type='submit' classNameName='log' id='logIn'>{action?'Login' :'Delete'}</button> */}
          <div className='text-[#3080ED] font-bold'>Forgot password?</div>
        </div>
        <p className='font-bold text-lg text-start'>Do not have an Account? <span className='text-sm text-[#3080ED]'>Create New</span></p>
      </form>

    </div>
  )
}
export default Login




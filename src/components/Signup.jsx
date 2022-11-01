import * as React from 'react'
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp(){

  const [formData,setData] = useState({});
  const[data,setUser]=useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    fetch('http://127.0.0.1:3000/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
   },[])
    function handleChange(event) {
    const name=event.target.name;
    const value=event.target.value;
    setData({
    ...formData,
    [name]: value,
    })
    }

    function handleSubmit(event) {
        if (data.find(item=>item.email===formData.email)){
        alert('This user Alredy Exist!');
        event.preventDefault();
        } else {
          fetch("http://127.0.0.1:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
        },
          body: JSON.stringify(formData),
        })
          event.target.reset()
         navigate('/LoginPage')
          alert(`User Account Created succesfully`)
        }
    }

    return(
        <div>
            <div className='flex flex-col  m-auto w-screen h-screen items-center justify-center'>
               <form className='flex flex-col space-y-10 md:w-[450px] '>
                  {/* <div className='names' style={{display:`grid`, gridTemplateColumns:`repeat(2, 1fr)`, width:`60%`, gap:`30px`}}> 
                  </div> */}
                   <input onChange={handleChange} className='border border-black p-4 rounded-md bg-[#F5F7FB] text-black' name="firstname"  type="text" placeholder="First name"/>
                   <input onChange={handleChange} className='border border-black p-4 rounded-md bg-[#F5F7FB] text-black' name="lastname"  type="text" placeholder="Last name"/> 
                   <input onChange={handleChange} className='border border-black p-4 rounded-md bg-[#F5F7FB] text-black' name="username"  type="text" placeholder="Username"/>
                   <input onChange={handleChange} className='border border-black p-4 rounded-md bg-[#F5F7FB] text-black'name="password"  type="password" placeholder="Enter Password"/>
                   <input onChange={handleChange} className='border border-black p-4 rounded-md bg-[#F5F7FB] text-black'name="email"  type="text" placeholder="Email Address"/>
                   <button className='bg-[#3080ED] px-12 py-2 rounded-[30px] text-white font-bold'type="submit" onSubmit={handleSubmit} >Sign Up</button>
                   <p className='font-bold text-lg text-start'>Already have an account?<span className='text-sm text-[#3080ED]'>Log In</span></p>
              </form>
            </div>
        </div>
    )
}

export default SignUp
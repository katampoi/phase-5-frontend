import React,{useState} from 'react'
import Button from './Button'
import LogoImage from './LogoImage'
import * as Fa from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

function NavBar({user,onLogin,loggedUser}) {
  const [toggle,setToggle]=useState(false)
  function Logout({classoff}){
    return(
      <div className={classoff}>
      <div className='w-[400px] h-[400px] bg-[#F5F7FB] border-[#000000] border   rounded-xl flex flex-col justify-between p-3 align-center'>
        <p className='text-red-500 text-center'>Alert! <br /> A you sure you want to leave soon??</p>
        <button onClick={handleLogOut} className='bg-[#3080ED] m-2 mx-8 p-2 rounded-full text-white'>Sign Out</button>
      </div>
      </div>
    )
  }
  function handleLogOut(){
    toggleLogOut()
  }


  function toggleLogOut(){
    setToggle(!toggle)
  }
  return (
    <div className='grid grid-cols-[440px,840px,440px] gap-4 justify-center items-center mx-1'>
      <LogoImage/>
      <div className='flex flex-row justify-end'>
        <div className='border w-full rounded-lg search '>
          <form>
            <input className='outline-none bg-[#F1F5FF] w-full text-lg  text-gray-500 placeholder-gray-500' type="text" placeholder='Search . . .' />
          </form>
        </div>
      </div>
      {
        user ? 
        <div id="user" className='flex flex-row items-center justify-end space-x-4 text-[#696767] text-xl'>
        <Fa.FaBell/>
        <Fa.FaBell/>
        <div className='flex flex-row items-center'>
          <img className='w-14 rounded-full h-14 object-cover' src="https://media.istockphoto.com/photos/portrait-concept-picture-id1016761216?k=20&m=1016761216&s=612x612&w=0&h=jEC8voGLjSyhdOO7EMQyrLtZ9m--TEUmd4X56sqyZk0=" alt="" />
          <Fa.FaAngleDown className='cursor-pointer' onClick={toggleLogOut}/>
          {toggle ? <Logout classoff={'classOn'}/> :<Logout classoff={'classoff'}/>}
        </div>
      </div>
      :
      <div className='flex flex-row'>
      <Button onClick={''} word={'Login'} classN={'Button1'} path={'/LoginPage'} element={<LoginPage onLogin={onLogin} loggedUser={loggedUser}/>}/>
      <Button onClick={''} word={'Register'} classN={'Button2'} path={'/SignupPage'} element={<SignupPage/>}/>
    </div>
      }
     

     
    </div>
  )
}

export default NavBar

import React from 'react'
import Button from './Button'
import LogoImage from './LogoImage'

function NavBar() {
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
      <div className='flex flex-row'>
        <Button word={'Login'} classN={'Button1'}/>
        <Button word={'Register'} classN={'Button2'}/>
      </div>
    </div>
  )
}

export default NavBar

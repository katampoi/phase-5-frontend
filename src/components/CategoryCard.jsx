import React from 'react'
import {useNavigate} from 'react-router-dom'

function CategoryCard() {

  const navigate =useNavigate();

  function handleClick(){
 navigate('/Category')
  }
  return (
        <div className='flex flex-row items-center space-x-2 md:space-x-5'>
            <img onClick={handleClick} className='h-16 rounded-xl object-cover' src="https://manofmany.com/wp-content/uploads/2019/04/David-Gandy-1200x800.jpg" alt="" />
            <h2 className='font-bold text-xl text-gray-500'>Dev Ops</h2>
        </div>
  )
}

export default CategoryCard

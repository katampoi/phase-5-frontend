import React from 'react'
import {useNavigate} from 'react-router-dom'
import NavBar from '../components/NavBar'

function CategoryPage(){

    const navigate = useNavigate()

    function handleClick(){
navigate('/')
    }

    return(
        <div>
            <NavBar/>
            <centre>
               <h1>Hello</h1>
               <button onClick={handleClick} className='bg-[#3080ED] px-12 py-2 rounded-[30px] text-white font-bold' >Subscribe</button>
        </centre>
        </div>
    )
}

export default CategoryPage
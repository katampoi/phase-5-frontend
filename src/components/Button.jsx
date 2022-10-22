import React from 'react'

function Button({word,funct,classN}) {
  return (
    <div onClick={()=>funct} className='border-2 border-blue-500 mx-2 py-1 px-9 rounded-lg text-blue-500 text-lg font-semibold'>
      {word}
    </div>
  )
}

export default Button

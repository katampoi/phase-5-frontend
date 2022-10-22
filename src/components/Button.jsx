import React from 'react'

function Button({word,funct,classN}) {
  return (
    <div onClick={()=>funct} className={classN}>
      {word}
    </div>
  )
}

export default Button

import React from 'react'
import {Link} from 'react-router-dom'

function Button({word,path,classN,element}) {
  return (
    <div  className={classN}>
      <Link to={path} element={element}>{word}</Link>
    </div>
  )
}

export default Button

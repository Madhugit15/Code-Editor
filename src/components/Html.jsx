import React, { useContext } from 'react'
import { userContext } from '../App'
// import { Link } from 'react-router-dom'

function Html() {
    const {htmlContent}= useContext(userContext)
  return (
 
 <div >
   <textarea
        value={htmlContent}
        style={{ width: "100%", height: "200px" }}
      />
   
   </div>
  
  )
}

export default Html
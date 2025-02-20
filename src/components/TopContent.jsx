import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function TopContent() {
  return (
   <div className="container">
     <h3>ONLINE TEXT EDITOR</h3>
     <div className="menus">
        <Link to={"/"}>WORD</Link>
        <Link to={"/html"}>HTML</Link>
        <Link to={"/preview"}>PREVIEW</Link>
     </div>
   </div>
  )
}

export default TopContent
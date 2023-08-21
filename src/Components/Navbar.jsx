import React from 'react'
import "./Navbar.css"
import Dropdown from "./Dropdown"
const Navbar = ({setSelect}) => {
  
  return (
    <div>
      <nav>
      <div className='dropdown'>
        <Dropdown setSelect={setSelect} />
      </div>
      </nav>
    </div>
  )
}

export default Navbar
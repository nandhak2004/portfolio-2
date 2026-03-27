import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from "react-icons/fa"

function Nav() {
  const [open,setOpen]=useState(false)
  return (
    <header>
        <h1>Protfolio</h1>
        <div className="menu-icon" onClick={()=>setOpen(!open)}>
          <FaBars />
        </div>
        <nav className={open ?"nav":"nav-links"}>
           <Link to='/' className='link'>Home</Link>
           <Link to='/about' className='link'>About</Link>
           <Link to='/project'   className='link'>Project</Link>
           <Link to='/skills'  className='link'>Skills</Link>
           <Link to='/contact' className='link'>Contact</Link>
        </nav>

    
    </header>
  )
}

export default Nav

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (

    // we never use ancher tag here because it will reload the page
    // we can use Link/NavLink tag which do not reload the page

    //NavLink have class {isActive} through which we can style active tab
    <div id="nav-contanier">
        <ul id="nav-item" type="none">
            <li>
                <NavLink to="/" className={({isActive})=>isActive? "isActive":"nav"}>Home</NavLink>
            </li>
            
            <li>
                <NavLink to="/About" className={({isActive})=>isActive? "isActive":"nav"}>About</NavLink>
            </li>
            
            <li>
                <NavLink to="/Dashboard" className={({isActive})=> isActive ? "isActive":"nav"}>Dashboard</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavBar
import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import img1 from "../images/car logo.jpg"

function Nav() {
  return (
    <div className='navigation p-2 d-flex justify-content-between'>
      <div>
        <img src={img1} alt="" className='d-block mx-auto ms-5 rounded-circle' style={{ height: 75 }} />
      </div>
      <ul className="nav justify-content-end align-self-center fs-5">
        <li className="nav-item align-self-center">
          <NavLink to=" " className="nav-link cde"><b>Home</b></NavLink>
        </li>
        <li className="nav-item align-self-center">
          <NavLink to="register" className="nav-link cde"><b>Register</b></NavLink>
        </li>
        <li className="nav-item align-self-center">
          <NavLink to="login" className="nav-link cde"><b>Login</b></NavLink>
        </li>
        <li className="nav-item align-self-center">
          <NavLink to="find" className="nav-link cde"><b>About Us</b></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
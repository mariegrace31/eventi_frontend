import React from 'react';
import { PiSignIn } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <p className='logo'>EVENTI</p>
      <div className='links'>
        <a href="#events">Events</a>
        <a href="#tickets">My tickets</a>
      </div>
      <div className='user'>
        <div className="sign">
        <a href="#signin">Sign in</a>
        <PiSignIn className='sign-icon' />
        </div>
        <div className="prof">
        <a href="profile">My Profile</a>
        <FaRegUser className='prof-icon'/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

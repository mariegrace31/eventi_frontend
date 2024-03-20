import React from 'react';
import { PiSignIn } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='flex justify-between'>
      <p>EVENTI</p>
      <div>
        <a href="#events">Events</a>
        <a href="#tickets">My tickets</a>
      </div>
      <div>
        <div>
        <a href="#signin">Sign in</a>
        <PiSignIn />
        </div>
        <div>
        <a href="profile">My Profile</a>
        <FaRegUser />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

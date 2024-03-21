import { PiSignIn } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='flex justify-between p-3 bg-yellow-800 items-center rounded-b-xl text-white'>
      <p className='text-3xl font-bold'>EVENTI</p>
      <div className='flex gap-10 text-xl'>
        <a className='hover:underline' href="#events">Events</a>
        <a className='hover:underline' href="#tickets">My tickets</a>
      </div>
      <div className='flex gap-4 text-xl'>
        <div className='flex items-center gap-1 bg-gray-800 p-2 rounded-lg hover:bg-white hover:text-yellow-800'>
        <a href="#signin">Sign in</a>
        <PiSignIn />
        </div>
        <div className='flex items-center gap-1 bg-gray-800 p-2 rounded-lg hover:bg-white hover:text-yellow-800'>
        <a href="profile">My Profile</a>
        <FaRegUser />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

import React from 'react'
import logo from '../assets/logo.jpg'
import {RxHamburgerMenu} from 'react-icons/rx'

function Nav() {
  return (
   <nav className='flex justify-between items-center p-2 sm:px-10 sm:py-3'>
    <img src={logo} alt='logo' className=' rounded-full w-16 h-16 '/>
    <button className=' text-green-300 font-extrabold'>
    <RxHamburgerMenu size={40} />
    </button>
  
    
   </nav>

  )
}

export default Nav
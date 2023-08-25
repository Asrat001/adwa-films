import React from 'react'
import image from '../data'
import Nav from './Nav'
import {BsFacebook,BsTelegram} from 'react-icons/bs'
import {PiInstagramLogoFill} from 'react-icons/pi'
import {AiFillYoutube} from 'react-icons/ai'
function Hero() {
 
  return (
    <div className='  bg-hero-pattern   bg-no-repeat  bg-cover  h-auto sm:h-screen '>
      <div className=' bg-blue-700/60 h-screen'>
     <Nav/>
     <section className='flex flex-col justify-center items-center mt-[80px]  '>
      <div className=' sm:w-[80%]'>
      <h1 className='text-[60px] sm:text-[100px] font-bold text-green-300 text-center  font-glutin '>Adwa films</h1>
     <p className=' hidden sm:block text-[28px] text-white font-semibold  text-justify  tracking-tighter sm:text-center  font-glutin'>Adwa films is an Ethiopian-based production company. Adwa films is a medium for sharing content which aims to present the best in Ethiopian movie to viewers throughout the world.. We broadcast feature films, documentaries, television shows, music videos, and short films through our YouTube account. additionally presents exclusive events like workshops and seminars 
     throughout the year in in addition to premier viewings specific films</p>
     <p className='block sm:hidden md:hidden lg:hidden xl:hidden text-center text-[23px] font-semibold text-white  font-glutin px-2'>Adwa films is an Ethiopian-based production company. Adwa films is a medium for sharing content which aims to present the best in Ethiopian movie to viewers throughout the world.. </p>
      </div>
      <div className='flex justify-center items-center mt-6 gap-x-4'>
        <a href='#' className='w-12 h-12 rounded-full border-[4px] border-green-300 text-white flex justify-center items-center'>
<        BsFacebook size={30}/>
        </a>
        <a href='#' className='w-12 h-12 rounded-full border-[4px] border-green-300 text-white flex justify-center items-center'>
    <PiInstagramLogoFill size={30}/>
        </a>
        <a href='#' className='w-12 h-12 rounded-full border-[4px] border-green-300 text-white flex justify-center items-center'>
<AiFillYoutube size={30}/>
        </a>
        <a href='#' className='w-12 h-12  rounded-full border-[4px] border-green-300 text-white flex justify-center items-center'>
<BsTelegram size={30}/>
        </a>
      </div>
   
     </section>
   
      </div>
      
    
      </div>

  )
}

export default Hero
import React from 'react'
import image from '../data'
import Nav from './Nav'
import {BsFacebook,BsTelegram} from 'react-icons/bs'
import {PiInstagramLogoFill} from 'react-icons/pi'
import {AiFillYoutube} from 'react-icons/ai'
import '../index.css'

function Hero() {
 
  return (
    <div className='  bg-hero-pattern   bg-no-repeat  bg-cover  h-auto  '>
      <div className=' bg-gradient-to-r from-cyan-500/50 to-blue-500/50 h-screen'>
     <Nav/>
     <section className='flex flex-col justify-center items-center p-4  '>
      <div className=' sm:w-[80%]'>
      <h1 className='text-[60px] sm:text-[100px] font-bold text-green-300 text-center  font-glutin '>Adwa films</h1>
     <p className=' hidden sm:block text-[28px] text-white font-semibold  text-justify  tracking-tighter sm:text-center  font-glutin'>Adwa films is an Ethiopian-based production company. Adwa films is a medium for sharing content which aims to present the best in Ethiopian movie to viewers throughout the world.. We broadcast feature films, documentaries, television shows, music videos, and short films through our YouTube account. additionally presents exclusive events like workshops and seminars 
     throughout the year in in addition to premier viewings specific films</p>
     <p className='block sm:hidden md:hidden lg:hidden xl:hidden text-center text-[23px] font-semibold text-white  font-glutin px-2'>Adwa films is an Ethiopian-based production company. Adwa films is a medium for sharing content which aims to present the best in Ethiopian movie to viewers throughout the world.. </p>
      </div>
      <div className='flex justify-center items-center mt-4 gap-x-4'>
        <a href='https://www.facebook.com/Adwafilms21' target='_blank' className='w-16 h-16  rounded-full border-[4px] border-green-300 text-white flex justify-center items-center'>
<        BsFacebook size={36}/>
        </a>
        <a href='https://www.instagram.com/adwafilms/' target='_blank' className='w-16 h-16 rounded-full border-[4px] border-green-300 text-white flex justify-center items-center'>
    <PiInstagramLogoFill size={36}/>
        </a>
        <a href='https://www.youtube.com/@Adwafilms' target='_blank' className='w-16 h-16 rounded-full border-[4px] border-green-300 text-white flex justify-center items-center'>
<AiFillYoutube size={36}/>
        </a>
        <a href='https://t.me/adwafilms21' target='_blank' className='w-16 h-16 rounded-full border-[4px] border-green-300 text-white flex justify-center items-center'>
<BsTelegram size={36}/>
        </a>
      </div>
   
     </section>
 
      </div>
      
    <div className='opacity-layer'></div>
      </div>

  )
}

export default Hero
import React from 'react'
import {BsTelegram ,BsFillTelephoneOutboundFill} from 'react-icons/bs'
import {PiInstagramLogoFill} from 'react-icons/pi'

function Contact() {
  return (
   <section className='p-6 mt-[100px]'>
<h1 className='text-green-300 text-[30px] sm:text-[40px] font-glutin font-bold'> Contact us</h1>
<p className='text-[20px] text-white font-glutin '>  for any business  inquiries contact us through our scocial media</p>
<div className='flex flex-col gap-y-4'>
    <div className='flex  items-center  text-white gap-x-4 font-glutin font-semibold text-[20px]'>
        <a href='tel:251927131207' className='w-8 h-8 border-[2px] flex justify-center items-center border-gray-300 rounded-full'>
<BsFillTelephoneOutboundFill/>
        </a>
        +251927131207
    </div>
    <div className='flex  items-center  text-white gap-x-4 font-glutin font-semibold text-[20px]'>
        <a href='https://www.instagram.com/adwafilms/' target='_blank' className='w-8 h-8 border-[2px] flex justify-center items-center border-gray-300 rounded-full'>
<PiInstagramLogoFill/>
        </a>
        Instagrame
    </div>
    <div className='flex  items-center  text-white gap-x-4 font-glutin font-semibold text-[20px]'>
        <a  href='https://t.me/adwafilms21' target='_blank'className='w-8 h-8 border-[2px] flex justify-center items-center border-gray-300 rounded-full'>
<BsTelegram/>
        </a>
        Telegrame
    </div>
  

</div>
   </section>
  )
}

export default Contact
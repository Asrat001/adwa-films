import React from 'react'
import {AiTwotoneHeart} from 'react-icons/ai'


function Footer() {
  return (
    <div className=' mt-[60px]'>
<hr className='w-full h-1 bg-green-300'/>
<div className='flex items-center justify-center gap-x-4 p-6'>
<p className=' font-glutin text-white text-[20px]'>Made with </p>
<AiTwotoneHeart className=' text-green-300 w-12 h-12'/>
<a href='https://asrat001.github.io/threeJsPortifolio/' target='_blank' className='font-glutin text-white text-[20px font-extrabold' > by Asrat Adane</a>
</div>

    </div>
  )
}

export default Footer
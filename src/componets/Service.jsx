import React from 'react'
import {AiOutlineFileProtect, AiFillVideoCamera} from 'react-icons/ai'
import {MdOutlineCelebration} from 'react-icons/md'


function Service() {
  return (
    <section className='mt-[60px]'>
        <h1 className=' text-green-300 font-glutin text-[30px] sm:text-[40px] text-center font-bold'>Service we Provide</h1>
        <main className=' grid grid-cols-1 sm:grid-cols-3 p-6  place-items-center mt-10 gap-4'>
            <div className=' flex flex-col items-center justify-center px-4'>
                <AiOutlineFileProtect className=" w-16 h-16 text-white"/>
                <p className=' text-green-300 text-[30px] font-glutin font-bold]'> Scripts</p>
                <p className=' text-white text-[20px font-glutin font-semibold] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque! adipisicing elit. doloremque! adipisicing elit. Fuga, doloremque</p>

            </div>
            <div className=' flex flex-col items-center justify-center px-4'>
                <AiFillVideoCamera className=" w-16 h-16 text-white"/>
                <p className=' text-green-300 text-[30px] font-glutin font-bold]'>Cast's</p>
                <p className=' text-white text-[20px font-glutin font-semibold] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque! adipisicing elit. doloremque! adipisicing elit. Fuga, doloremque</p>
            </div>
            <div className='flex flex-col items-center justify-center px-4'>
                <MdOutlineCelebration className=" w-16 h-16 text-white"/>
                <p className=' text-green-300 text-[30px] font-glutin font-bold]'>Event</p>
                <p className=' text-white text-[20px font-glutin font-semibold] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque! adipisicing elit. doloremque! adipisicing elit. Fuga, doloremque</p>
            </div>

        </main>
    </section>
  )
}

export default Service

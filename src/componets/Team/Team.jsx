import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Carousel.css';
import { FreeMode, Pagination,Autoplay } from 'swiper/modules';
import person1 from '../../assets/1.png'
import Teams from '../../data';
import {BsFacebook,BsTelegram} from 'react-icons/bs'
import {PiInstagramLogoFill} from 'react-icons/pi'
import {AiFillYoutube} from 'react-icons/ai'

function Team() {
   console.log(Teams.map(name=>{return name.img}))
  return (
  <section className='  sm:p-6 '>
    <h1 className=' text-green-300 font-glutin text-[30px] font-semibold mt-[60px] text-center'>Meet the Team</h1>
    {
      Teams.length >0 ?
      <Swiper
      slidesPerView={1}
      spaceBetween={16}
      freeMode={true}
      autoplay={{
        delay:2000
      }}
      loop={true}
      pagination={{
        el:'.swiper-pagination',
        clickable: true,
      }}
     
      breakpoints={
        {
          640:{
            slidesPerView:3,
            spaceBetween:20

          }
        }
      }
      modules={[FreeMode, Pagination,Autoplay]}
      className="swiper-container"
    >
     {
      Teams.map((data,key)=>{
      return( 
     <SwiperSlide className='swiper-slides-container' >
      <img src={data.img} alt='img' className='w-48 h-48 rounded-full relative top-[-60px] left-0  border-green-300 border-[4px]'/>
     <div className=' mt-8 flex flex-col items-center justify-center'>
     <p className='text-green-300 font-glutin font-semibold text-[18px]'>{data.name}</p>
      <p className='text-white font-glutin font-semibold text-[12px]'>{data.role} </p>
     </div>
     <div className='flex items-center justify-between gap-x-3 mt-4'>
      <a href='#' target='_blank' className=' w-9 h-9 p-1 border-green-300 border-[5px] rounded-full flex items-center justify-center'>
        <BsFacebook/>
      </a>
      <a href='#' target='_blank' className=' w-9 h-9 p-1 border-green-300 border-[5px] rounded-full flex items-center justify-center'>
        <BsTelegram/>
      </a>
      <a  href='#' target='_blank' className=' w-9 h-9 p-1 border-green-300 border-[5px] rounded-full flex items-center justify-center'>
        <PiInstagramLogoFill/>
      </a>
     </div>
    </SwiperSlide>)
      })
     }
     
    </Swiper> :"loading"
    }
   
  </section>
  )
}

export default Team
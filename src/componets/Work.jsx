import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide_image_1 from '../assets/sddefault.jpg';
import slide_image_2 from '../assets/sddefault1.jpg';
import slide_image_3 from '../assets/sddefault2.jpg';
import slide_image_4 from '../assets/sddefault3.jpg';
function Work() {
  return (
    <>
       <div className="block sm:hidden  bg-[#04152d]">
      <p className=' text-[32px]  text-green-300 font-glutin font-semibold'>Our recent Uploads</p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1.2,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
       
        
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
           <AiOutlineArrowLeft/>
          </div>
          <div className="swiper-button-next slider-arrow">
            <AiOutlineArrowRight/>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    <div className=' bg-[#04152d] h-screen'>
     <h1 className='text-[40px] hidden sm:block text-green-300 '>Recent Uploads</h1>
    </div>
    </>
   
    
  )
}

export default Work
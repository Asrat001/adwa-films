import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlinePlayCircle } from 'react-icons/ai';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './work.css';

// import required modules
import { EffectCards,Pagination } from 'swiper/modules';
import slide_image_1 from '../assets/sddefault.jpg';
import slide_image_2 from '../assets/sddefault1.jpg';
import slide_image_3 from '../assets/sddefault2.jpg';
import slide_image_4 from '../assets/sddefault3.jpg';
function Work() {
  return (
    <section className=' p-16 bg-[#04152d] flex flex-col  sm:flex-row  justify-between items-center'>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-[28px] sm:text-[40px] text-green-300 my-2 font-glutin font-bold'>our recent Uploads</h1>
      <Swiper
        effect={'cards'}
        pagination={true}
        grabCursor={true}
        modules={[EffectCards , Pagination]}
        className="mySwiper"
        
      >
        <SwiperSlide>
          <img src={slide_image_1} className='w-full h-1/2'/>
          <a href='https://www.youtube.com/watch?v=XKDeHCBlGp0' target='_blank' className=' mt-6 animate-pulse '><AiOutlinePlayCircle className='w-[60px] h-[60px] text-green-400 '/></a>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide_image_2} className='w-full h-1/2'/>
          <a href='https://www.youtube.com/watch?v=6_At1wea2i0&t=6s' target='_blank' className=' mt-6 animate-pulse   '><AiOutlinePlayCircle className='w-[60px] h-[60px]  text-green-400 '/></a>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide_image_3} className='w-full h-1/2'/>
          <a href='https://www.youtube.com/watch?v=FbJVmYdFPpo' target='_blank' className=' mt-6 animate-pulse   '><AiOutlinePlayCircle className='w-[60px] h-[60px]  text-green-400 '/></a>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide_image_4} className='w-full h-1/2'/>
          <a href='https://www.youtube.com/watch?v=UMKx2NLf17E&t=92s' target='_blank' className=' mt-6 animate-pulse   '><AiOutlinePlayCircle className='w-[60px] h-[60px] text-green-400 '/></a>
        </SwiperSlide>
      
      </Swiper>
      <div className=' relative left-0 bottom-0  mt-4   flex  space-x-[100px]'>
         <button className='p-[1px] rounded-full border-green-300 border-[2px]'>
         <AiOutlineArrowLeft className='w-8 h-8 text-white' />
         </button>
         <button className='p-[1px] rounded-full border-green-300 border-[2px]'>
         <AiOutlineArrowRight className='w-8 h-8 text-white'/>
          </button>
      </div>
      </div>
    
    <div className="mt-4 sm:mt-0 sm:w-1/2 ">
<h1 className='text-[24px] sm:text-[40px] text-green-300 font-glutin font-semibold text-center '>We also promote Events </h1>
<div className='sm:px-6 py-4'>
<p className='sm:text-[20px] text-white font-glutin text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas reiciendis reprehenderit omnis magnam alias accusamus! Quos aliquid quae quam ut assumenda deserunt sed beatae blanditiis, sit sint quis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas reiciendis reprehenderit omnis magnam alias accusamus! Quos ali</p>
</div>
<div className='flex  justify-center items-center'>
<a  href='mailto:adwafilms21@gmail.com' target='_blank' className=' border-[3px] border-green-300 text-white rounded-full p-3 flex gap-x-2 items-center'>let's talk  business <AiOutlineArrowRight/></a>


</div>
    </div>
    </section>
   
    
  )
}

export default Work
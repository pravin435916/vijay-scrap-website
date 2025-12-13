import React from 'react'
// import Swiper from 'swiper'
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
function Cover() {
    return (
        <Swiper
            slidesPerView={1}
            autoplay={{
                delay: 3000, // Delay between transitions in ms
                disableOnInteraction: false, // Enable autoplay even after user interaction
            }}
            modules={[Autoplay]}
            className='flex md:flex-row flex-col my-8 '
        >
            <SwiperSlide className='flex md:flex-row flex-col justify-center items-center md:gap-14 w-full cursor-grab '>
                <div className='md:w-[20%] mx-8  flex flex-col md:gap-8 text-center justify-center items-center'>
                    <span className='text-4xl font-bold'>Welcome to Safe Tech India!</span>
                    <span className='sm:text-2xl'>We're Here to Empower Children's Online Safety</span>
                    <span className='sm:text-xs'>At Safe Tech India, we believe that every child deserves to be safe online. Our mission is to provide comprehensive internet safety and social media education to children, helping them stay safe and responsible online. Our interactive workshops and seminars, personal counseling, and social media education are designed to empower children and parents with the skills and knowledge they need to navigate the digital world with confidence.</span>
                    <span className='sm:text-2xl'><FaAngleRight /></span>
                </div>
                <img src="/assets/stu.webp" className='rounded-3xl object-cover md:w-[48vw] md:h-[72vh]' alt="" />
            </SwiperSlide>
            <SwiperSlide className='flex md:flex-row flex-col justify-center items-center md:gap-14 w-full cursor-grab '>
                <div className='md:w-[20%] mx-8  flex flex-col md:gap-8 text-center justify-center items-center'>
                    <span className='text-4xl font-bold'>Welcome to Safe Tech India!</span>
                    <span className='sm:text-2xl'>We're Here to Empower Children's Online Safety</span>
                    <span className='sm:text-xs'>At Safe Tech India, we believe that every child deserves to be safe online. Our mission is to provide comprehensive internet safety and social media education to children, helping them stay safe and responsible online. Our interactive workshops and seminars, personal counseling, and social media education are designed to empower children and parents with the skills and knowledge they need to navigate the digital world with confidence.</span>
                    <span className='sm:text-2xl'><FaAngleRight /></span>
                </div>
                <img src="/assets/child2.jpg" className='rounded-3xl object-cover md:w-[48vw] md:h-[72vh]' alt="" />
            </SwiperSlide>
            <SwiperSlide className='flex md:flex-row flex-col justify-center items-center md:gap-14 w-full cursor-grab '>
                <div className='md:w-[20%] mx-8  flex flex-col md:gap-8 text-center justify-center items-center'>
                    <span className='text-4xl font-bold'>Welcome to Safe Tech India!</span>
                    <span className='sm:text-2xl'>We're Here to Empower Children's Online Safety</span>
                    <span className='sm:text-xs'>At Safe Tech India, we believe that every child deserves to be safe online. Our mission is to provide comprehensive internet safety and social media education to children, helping them stay safe and responsible online. Our interactive workshops and seminars, personal counseling, and social media education are designed to empower children and parents with the skills and knowledge they need to navigate the digital world with confidence.</span>
                    <span className='sm:text-2xl'><FaAngleRight /></span>
                </div>
                <img src="/assets/child3.jpg" className='rounded-3xl object-cover md:w-[48vw] md:h-[72vh]' alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Cover
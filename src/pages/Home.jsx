import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Offers from '../components/Offers';
import Cover from '../components/Cover';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import BookSession from './BookSession';
import Blog from './Blog';
import Mission from '../components/Mission';
import { fadeInUp, fadeIn, fadeInDelay, buttonHover } from '../animations/animation';

export const Home = () => {
  return (
    <>
      <div className='flex md:flex-row flex-col-reverse justify-center items-center w-full h-[60vh] md:h-[85vh] gap-10 mb-4'>
        <motion.div 
          className='flex flex-col gap-4 justify-center items-center md:w-[40%]'
          initial="initial"
          animate="animate"
          transition="transition"
          variants={fadeInUp}
        >
          <motion.img 
            className='w-40 md:w-96 hidden md:flex' 
            src="/assets/logo1.png" 
            alt="" 
            variants={fadeIn}
          />
          <motion.span 
            className='md:text-4xl text-4xl font-bold text-center'
            variants={fadeInDelay}
          >
            Empowering Safe Social Media Usage for Children
          </motion.span>
          <motion.div variants={buttonHover}>
            <Link 
              className="px-6 btn-custom py-3 mt-8 bg-black font-bold text-white rounded-2xl transform transition-transform hover:scale-105" 
              to="/book"
            >
              Register today
            </Link>
          </motion.div>
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          transition="transition"
          variants={fadeInUp}
        >
          <img className='object-cover px-4 md:w-[48vw] rounded-3xl' src="https://img.freepik.com/premium-photo/ai-generated-cute-young-girl-student-studying_988987-616.jpg" alt="" />
        </motion.div>
      </div>
      <Mission />
      <Offers />
      <Cover />
      <Partners />
      <BookSession />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;

'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import BackgroundCircles from './BackgroundCircles';
import LeftHero from './LeftHero';

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden px-4'
    >
      {/* Background blobs */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob'></div>
        <div className='absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob animation-delay-2000'></div>
        <div className='absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob animation-delay-4000'></div>
      </div>

      {/* Main Layout */}
      <div className='w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10'>
        {/* LEFT SIDE */}
        <div className='w-full md:w-1/2'>
          <LeftHero />
        </div>

        {/* RIGHT SIDE */}
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          <div className='relative'>
            <BackgroundCircles />

            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src='/profile.png'
              alt='Profile'
              className='rounded-full object-cover relative z-10  w-40 h-40  md:w-64 md:h-64 '
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        className='absolute bottom-10 left-1/2 -translate-x-1/2'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <a href='#about'>
          <ArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}

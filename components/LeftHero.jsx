'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const LeftHero = () => {
  return (
    <div className='text-center md:text-left'>
      <motion.h2
        className='text-lg md:text-2xl font-medium mb-3'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        The Name is
      </motion.h2>

      <motion.h1
        className='text-3xl sm:text-4xl md:text-6xl font-bold mb-4 gradient-text'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Amit Kumar Jha
      </motion.h1>

      <motion.h3
        className='text-lg sm:text-xl md:text-3xl font-medium mb-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Typewriter
          words={[
            'Full Stack Developer',
            'MERN Stack Enthusiast',
            'UI/UX Lover',
            'Tech Explorer',
          ]}
          loop
          cursor
          cursorStyle='|'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h3>

      <motion.p
        className='text-base md:text-lg max-w-lg mb-8 mx-auto md:mx-0'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        I build beautiful, responsive, and user-friendly web applications with
        modern technologies.
      </motion.p>

      <motion.a
        href='#projects'
        className='inline-block px-6 py-3 rounded-full border-2 border-pink-500 text-sm md:text-lg hover:shadow-lg transition-all'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.a>
    </div>
  );
};

export default LeftHero;

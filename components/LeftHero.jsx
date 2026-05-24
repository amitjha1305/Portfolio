'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const LeftHero = () => {
  return (
    <div className='text-center md:text-left'>
      <motion.h2
        className='text-sm md:text-lg font-semibold uppercase tracking-[0.2em] text-teal-700 mb-3'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        The Name is
      </motion.h2>

      <motion.h1
        className='font-[var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-7xl font-bold mb-4 gradient-text'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Amit Kumar Jha
      </motion.h1>

      <motion.h3
        className='text-lg sm:text-xl md:text-3xl font-medium mb-6 text-slate-700'
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
        className='text-base md:text-lg max-w-xl mb-8 mx-auto md:mx-0 text-slate-600 leading-relaxed'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        I build scalable SaaS products, dashboards, and cloud systems that
        improve business operations across HR, Sales, and Support teams.
      </motion.p>

      <motion.a
        href='#projects'
        className='inline-block px-7 py-3 rounded-full bg-gradient-to-r from-teal-700 to-cyan-600 text-white text-sm md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.a>
    </div>
  );
};

export default LeftHero;

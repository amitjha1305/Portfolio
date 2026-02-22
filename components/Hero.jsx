'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { Ripple } from './magicui/ripple';
import BackgroundCircles from './BackgroundCircles';

export default function Hero() {
  return (
    <section
      id='hero'
      className='min-h-screen flex items-center justify-center relative overflow-hidden'
    >
      {/* <div className="container mx-auto px-4 z-10 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <motion.h2
            className="text-xl md:text-2xl font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The Name is
          </motion.h2>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{  duration: 0.8 }}
          >
            Amit Kumar Jha
          </motion.h1>

          <motion.h3
            className="text-2xl md:text-3xl font-medium mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Typewriter
              words={[
                "Full Stack Developer",
                "MERN Stack Enthusiast",
                "UI/UX Lover",
                "Tech Explorer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h3>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            I build beautiful, responsive, and user-friendly web applications with modern technologies.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}>
            <motion.a
              href="#projects"
              className="glass px-8 py-3 rounded-full border-2 border-[#ec4899] text-lg font-medium inline-block hover:shadow-lg transition-all"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-16 left transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <a href="#about" className="text-foreground">
          <ArrowDown size={32} />
        </a>
      </motion.div> */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob'></div>
        <div className='absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000'></div>
        <div className='absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000'></div>
      </div>

      <div className='relative flex md:h-screen h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background z-10'>
        <div className='relative h-full w-full flex items-center justify-center'>
          <BackgroundCircles />

          <div className='relative w-52 h-52 rounded-full overflow-hidden'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-xl'></div>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src='./profile.png'
              alt='Profile'
              className='rounded-full w-full h-full object-cover relative z-10'
            />
          </div>
        </div>

        <div className='absolute top-[70%] left-[51%] transform -translate-x-1/2 flex flex-col items-center'>
          <motion.h2
            className='text-lg md:text-xl mb-2 text-gray-600 tracking-[12px] z-50'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Software Developer
          </motion.h2>

          <motion.h3
            className='text-3xl md:text-4xl font-semibold text-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typewriter
              words={[
                'Hi, The Name is Amit Kumar Jha',
                'A-person-who-loves-Tea.jsx',
                'ButLovesToCodeMore',
              ]}
              loop={true}
              cursor
              cursorStyle='|'
              cursorColor='#F7AB0A'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h3>
        </div>
      </div>
    </section>
  );
}

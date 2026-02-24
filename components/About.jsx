'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id='about'
      className='section-padding'
    >
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold text-center mb-16 gradient-text'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Get to know me
        </motion.h2>

        <div className='flex flex-col md:flex-row items-center gap-12'>
          <motion.div
            className='md:w-1/2'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className='relative w-64 h-64 mx-auto md:mx-0 shadow-xl rounded-full'>
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-xl'></div>
              <motion.img
                src='./user.webp'
                alt='Profile'
                className='rounded-full w-full h-full object-cover relative z-10 border-4 border-[#6366f1]'
                whileHover={{ rotateX: 360 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          <motion.div
            className='md:w-1/2'
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className='glass p-8 shadow'>
              <h3 className='text-2xl font-bold mb-4'>Who am I?</h3>
              <p className='mb-4'>
                Full Stack Developer and Cloud Engineer with hands-on experience
                in building scalable web, desktop, and cloud-based applications
                using Next.js, Electron.js, REST APIs, and AWS. Currently
                working at
                <a
                  href='https://www.linkedin.com/company/elcom-digital'
                  className='text-blue-500'
                  target='_blank'
                >
                  {' '}
                  Elcom Digital
                </a>
              </p>
              <p className='mb-4'>
                I specialize in building high-performance platforms using
                Next.js, JavaScript, Electron.js, and AWS cloud infrastructure.
                I design and deploy high-performance platforms, business
                intelligence dashboards, and automation systems that improve
                operational efficiency. I specialize in cloud deployment, secure
                application architecture, and data-driven decision-making
                solutions.
              </p>
              <p>
                Beyond development, you can find me hiking, playing cricket, or
                experimenting with new recipes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

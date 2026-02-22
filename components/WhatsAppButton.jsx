'use client';

import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <div className='fixed bottom-6 right-6 z-50'>
      <motion.div
        className='absolute inset-0 rounded-full bg-[#F7AB0A] blur-md'
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.a
        href='https://wa.me/7827561813'
        className='relative rounded-full text-white shadow-lg block'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src='./social.png'
          alt='whatsapp'
          className='w-14 h-14'
        />
      </motion.a>
    </div>
  );
}

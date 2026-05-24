'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/amitjha1305/' },
    {
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/amit-kumar-jha-46339b216/',
    },
    { icon: <Twitter size={20} />, url: 'https://x.com/ExpartGame7756' },
    {
      icon: <Instagram size={20} />,
      url: 'https://www.instagram.com/amitjha7833?igsh=MTk3dG5oeTVmYzByZQ==',
    },
  ];

  return (
    <footer className='py-10 border-t border-slate-200/80 bg-white/50 backdrop-blur-md'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <motion.div
            className='mb-4 md:mb-0'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href='#hero'
              className='text-xl font-bold gradient-text tracking-wider'
            >
              Amit Kumar Jha
            </a>
          </motion.div>

          <motion.div
            className='flex space-x-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className='p-2 rounded-full bg-white/90 border border-slate-200 shadow-sm hover:shadow-md transition-shadow'
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                target='_blank'
                rel='noopener noreferrer'
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className='text-center mt-8 text-sm text-slate-600'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className='flex items-center justify-center gap-1'>
            Made with <Heart size={16} className='text-orange-500' /> by Amit Kumar Jha (c) {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

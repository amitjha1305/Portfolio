'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Heart,
  Facebook,
} from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Github size={20} />, url: 'http://github.com/iamAmitkumar' },
    {
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/iamAmitkumar',
    },
    { icon: <Twitter size={20} />, url: 'https://x.com/im_Amitkumar' },
    {
      icon: <Instagram size={20} />,
      url: 'https://instagram.com/iam_Amitkumar',
    },
    { icon: <Facebook size={20} />, url: 'http://facebook.com/iamAmit2005' },
  ];

  return (
    <footer className='py-8 border-t border-gray-200'>
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
                className='p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow'
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
          className='text-center mt-8 text-sm text-gray-600'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className='flex items-center justify-center gap-1'>
            Made with{' '}
            <Heart
              size={16}
              className='text-accent'
            />{' '}
            by Amit Kumar Jha © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

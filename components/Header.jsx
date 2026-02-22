'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#timeline' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'http://github.com/iamAmitkumar', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/iamAmitkumar',
    label: 'LinkedIn',
  },
  // { icon: FileText, href: "https://drive.google.com/file/d/1ykcRsv_0S8wxn2KYoHrtuTaoSIZRj_8S/view?usp=sharing", label: "Resume" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 py-4 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1a1a1a]/80 backdrop-blur-md border-b border-[#333]'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <motion.a
          href='#hero'
          className='text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#ec4899]'
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Amit Kumar Jha
        </motion.a>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-1'>
          <ul className='flex space-x-1'>
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
              >
                <a
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                    activeSection === link.href.substring(1)
                      ? 'text-[#F7AB0A]'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                  onClick={() => setActiveSection(link.href.substring(1))}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.span
                      className='absolute bottom-0 left-0 right-0 h-0.5 bg-[#F7AB0A]'
                      layoutId='underline'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className='ml-6 flex items-center space-x-3 border-l border-[#333] pl-6'>
            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -2 }}
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <motion.button
          className='md:hidden text-gray-300 hover:text-white'
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className='md:hidden bg-[#1a1a1a]/95 backdrop-blur-md border-b border-[#333] mt-2'
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className='container mx-auto px-4 py-4'>
            <ul className='flex flex-col space-y-3'>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 * i }}
                >
                  <a
                    href={link.href}
                    className={`block py-2 px-3 rounded-md transition-colors ${
                      activeSection === link.href.substring(1)
                        ? 'bg-[#333] text-[#F7AB0A]'
                        : 'text-gray-300 hover:bg-[#333] hover:text-white'
                    }`}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveSection(link.href.substring(1));
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className='flex items-center space-x-4 mt-6 pt-4 border-t border-[#333]'>
              {socialLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-[#F7AB0A] transition-colors p-2'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.3 + 0.05 * i }}
                    whileHover={{ y: -2 }}
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

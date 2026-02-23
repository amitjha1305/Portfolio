'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Personal Portfolio',
    description:
      'It is my personal portfolio website totally made up of React reusable components. here you can check my skills and projects on this website',
    image: './portfolio.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Magic UI'],
    demo: 'https://amit-tech.vercel.app',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id='projects'
      className='section-padding'
    >
      <div
        className='container mx-auto px-4'
        ref={ref}
      >
        <motion.h2
          className='text-3xl md:text-4xl font-bold text-center mb-16 gradient-text'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-10'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className='glass overflow-hidden rounded-xl shadow-md'
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className='relative overflow-hidden h-60'>
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                />
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                <p className='text-gray-700 mb-4'>{project.description}</p>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='px-3 py-1 bg-white/50 rounded-full text-sm'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className='flex gap-4'>
                  <motion.a
                    href={project.github}
                    className='flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white overflow-hidden rounded hover:bg-[#1a1a1a]/90 transition-colors'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    className='flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-[#6366f1] to-[#ec4899] rounded'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

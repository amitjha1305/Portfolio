'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineItems = [
  {
    year: ' July 2024 - Present',
    title: 'Associate Software Developer',
    company: 'Elcom Digital Solution Pvt. Ltd.',
    description:
      'Worked on building scalable web and desktop applications using Next.js, Electron.js, and AWS. Developed data-driven dashboards, cloud-hosted platforms, and automation tools that improved operational efficiency across Sales, HR, and Support teams. Integrated APIs, managed cloud deployments, and delivered secure, high-performance solutions for platforms like NoSky, Elcom Digital, and the Sales App.',
    icon: <Briefcase size={20} />,
  },
  {
    year: ' January 2023 to April 2023',
    title: 'UI/UX Design - Intern',
    company: 'STRUGEND Technologies',
    description:
      'Spearheaded designing and implementing a comprehensive restaurant management system, seamlessly integrating customer service improvements and back-end kitchen operations.',
    icon: <Briefcase size={20} />,
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id='timeline'
      className='section-padding bg-gradient-to-b from-indigo-50 to-transparent'
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
          My Experience
        </motion.h2>

        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent rounded-full'></div>

          {/* Timeline items */}
          <div className='space-y-12'>
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className='md:w-1/2'></div>

                {/* Timeline dot */}
                <div className='absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10'>
                  <div className='text-primary'>{item.icon}</div>
                </div>

                <div className='pl-12 md:pl-8 md:w-1/2 md:px-8'>
                  <div className='glass p-6 shadow'>
                    <span className='inline-block px-3 py-1 bg-white/70 rounded-full text-sm font-medium mb-2'>
                      {item.year}
                    </span>
                    <h3 className='text-xl font-bold'>{item.title}</h3>
                    <h4 className='text-lg text-gray-700 mb-2'>
                      {item.company}
                    </h4>
                    <p className='text-gray-600'>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

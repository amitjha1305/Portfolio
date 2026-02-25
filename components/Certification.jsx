'use client';
import { useInView } from 'framer-motion';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import React from 'react';

const Certification = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      badge: '/certification/aws_badge.png',
      description:
        'This certification validates my foundational understanding of AWS Cloud concepts, core AWS services, security, pricing models, and global infrastructure. It demonstrates my ability to identify appropriate AWS solutions and support secure, scalable cloud-based architectures.',
      image: '/certification/Aws_Certificate.jpg',
      tags: [
        'AWS',
        'Cloud Fundamentals',
        'Cloud Security',
        'Global Infrastructure',
      ],
    },
    {
      title: 'User Experience Design – Accenture',
      description:
        'This certification validates my knowledge of user-centered design principles, usability testing, wireframing, and intuitive interface design. It demonstrates my ability to create responsive and user-focused digital experiences.',
      link: 'https://www.futurelearn.com/certificates/ms1oqmf',
      image: '/certification/Accenture_UX.jpg',
      tags: ['UI/UX', 'User Research', 'Wireframing', 'Design Thinking'],
    },
    {
      title: 'Java Certification – HackerRank',
      description:
        'This certification demonstrates my proficiency in Java programming, object-oriented concepts, and problem-solving skills. It validates my ability to write efficient, structured, and scalable Java applications.',
      link: 'https://www.hackerrank.com/certificates/iframe/783d03cca996',
      image: '/certification/HackerRank_Java.jpg',
      tags: ['Java', 'OOP', 'Problem Solving', 'Programming'],
    },
    {
      title: 'SQL Certification – HackerRank',
      description:
        'This certification validates my expertise in writing optimized SQL queries, database management, joins, aggregations, and data manipulation techniques. It demonstrates strong understanding of relational database systems.',
      link: 'https://www.hackerrank.com/certificates/iframe/fea9853d2bcb',
      image: '/certification/HackerRank_SQL.jpg',
      tags: ['SQL', 'Database', 'Queries', 'Data Management'],
    },
    {
      title: 'Compiler Design (NPTEL) – Ministry of Education, Govt. of India',
      description:
        'This certification validates my understanding of compiler architecture, lexical analysis, parsing techniques, syntax-directed translation, and code optimization. It reflects strong foundations in core computer science principles.',
      link: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs18/Course/NPTEL24CS18S105550190930395273.pdf',
      image: '/certification/NPTEL_Compiler_Design.jpg',
      tags: ['Compiler Design', 'Algorithms', 'Parsing', 'Core CS'],
    },
  ];
  const badge = (cert) =>
    cert.badge ? (
      <img
        src={cert.badge}
        alt={`${cert.title} Badge`}
        className='w-10 h-10'
      />
    ) : null;

  return (
    <section
      id='s'
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
          My Certification
        </motion.h2>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-10'
          //   variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className='glass overflow-hidden rounded-xl shadow-md'
              //   variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <a
                href={cert.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='relative overflow-hidden h-30'>
                  <img
                    src={cert.image || '/placeholder.svg'}
                    alt={cert.title}
                    className='object-contain transition-transform duration-500 hover:scale-110 h-100'
                  />
                </div>

                <div className='p-2'>
                  <h3 className='text-xl font-bold flex gap-2 items-center'>
                    {badge(cert)}
                    {cert.title}
                  </h3>
                  {/* <p className='text-gray-700 mb-4'>{cert.description}</p> */}

                  <div className='flex flex-wrap'>
                    {cert.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className='px-3 py-1 bg-white/50 rounded-full text-sm'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* <div className='flex gap-4'>
                  <motion.a
                    href={cert?.image}
                    className='flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-[#6366f1] to-[#ec4899] rounded'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                </div> */}
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;

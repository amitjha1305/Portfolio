'use client';

import React from 'react';

import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const skillsLeft = [
  { name: 'Frontend Development (Next.js, React)', percentage: 70 },
  { name: 'Cloud Deployment & AWS (EC2, S3)', percentage: 85 },
  { name: 'REST API Integration', percentage: 60 },
];

const skillsRight = [
  { name: 'Backend Development (Node.js, SQL)', percentage: 60 },
  { name: 'Dashboard & BI Systems (Metabase, Zoho)', percentage: 55 },
  { name: 'Automation & Workflow Systems', percentage: 80 },
];

const tools = [
  'Next.js',
  'React',
  'Node.js',
  'AWS',
  'Electron.js',
  'Metabase',
  'Zoho Analytics',
  'MySQL',
];

export default function ProfessionalSkills() {
  return (
    <section id='skills' className='w-full section-padding'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Header Section */}
        <div className='mb-16 flex flex-col lg:flex-row justify-between lg:items-center gap-8'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 flex flex-col gap-2 section-title text-left lg:mb-0'>
            <span className={`${playfair.className} text-5xl`}>
              My Professional{' '}
            </span>
            <span className='gradient-text'>Technical Expertise</span>
          </h2>
          <p className='text-slate-600 max-w-xl leading-relaxed'>
            Delivering high-performance full stack solutions with strong
            expertise in cloud infrastructure, system architecture, and data
            engineering. I design secure, scalable applications and intelligent
            dashboards that transform raw operational data into actionable
            insights.
          </p>
        </div>

        {/* Top Skill Categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-20'>
          {[
            { name: 'Full Stack Development', icon: '/code.png' },
            { name: 'Cloud Architecture', icon: '/devops.png' },
            { name: 'Business Intelligence', icon: '/data_analyst.png' },
            { name: 'Automation Systems', icon: '/automation.png' },
          ].map((item, index) => (
            <div className='m-auto flex flex-col items-center text-center gap-4' key={index}>
              <div
                key={index}
                className='flex items-center justify-center h-40 w-40 mx-auto rounded-full border border-teal-700/20 bg-white/80 backdrop-blur-md text-center p-4 text-sm font-medium hover:scale-105 transition shadow-sm'
              >
                <img
                  src={item?.icon}
                  alt={item?.name + ' Icon'}
                  className='mx-auto w-[80%]'
                />
              </div>
              <p className='text-slate-700'>{item?.name}</p>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className='grid md:grid-cols-2 gap-16'>
          {/* Left Column */}
          <div>
            {skillsLeft.map((skill, index) => (
              <div
                key={index}
                className='mb-10'
              >
                <div className='flex justify-between mb-2 text-sm'>
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className='w-full bg-slate-200 rounded-full h-2'>
                  <div
                    className='bg-gradient-to-r from-teal-600 to-cyan-500 h-2 rounded-full transition-all duration-700'
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {skillsRight.map((skill, index) => (
              <div
                key={index}
                className='mb-10'
              >
                <div className='flex justify-between mb-2 text-sm'>
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className='w-full bg-slate-200 rounded-full h-2'>
                  <div
                    className='bg-gradient-to-r from-teal-600 to-cyan-500 h-2 rounded-full transition-all duration-700'
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className='mt-20 glass p-8 rounded-2xl backdrop-blur-md'>
          <h3 className='text-2xl font-semibold mb-6 text-teal-700'>
            Technologies & Platforms I Work With
          </h3>

          <div className='flex flex-wrap gap-4'>
            {tools.map((tool, index) => (
              <span
                key={index}
                className='px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full text-sm text-slate-700 hover:bg-cyan-100 transition'
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

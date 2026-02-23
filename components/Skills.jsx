'use client';

import React from 'react';

import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const skillsLeft = [
  { name: 'Frontend Development (Next.js, React)', percentage: 90 },
  { name: 'Cloud Deployment & AWS (EC2, S3)', percentage: 85 },
  { name: 'REST API Integration', percentage: 88 },
];

const skillsRight = [
  { name: 'Backend Development (Node.js, SQL)', percentage: 80 },
  { name: 'Dashboard & BI Systems (Metabase, Zoho)', percentage: 85 },
  { name: 'Automation & Workflow Systems', percentage: 82 },
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
    <section className='w-full py-20 bg-gradient-to-br from-[#0a0f2c] to-[#111a4d] text-white'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Header Section */}
        <div className='mb-16 flex justify-between items-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 flex flex-col gap-2'>
            <span className={`${playfair.className} text-5xl`}>
              My Professional{' '}
            </span>
            <span className='text-blue-400'>Technical Expertise</span>
          </h2>
          <p className='text-gray-300 max-w-xl'>
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
            'Full Stack Development',
            'Cloud Architecture',
            'Business Intelligence',
            'Automation Systems',
          ].map((item, index) => (
            <div
              key={index}
              className='flex items-center justify-center h-40 w-40 mx-auto rounded-full border border-blue-400/40 bg-white/5 backdrop-blur-md text-center p-4 text-sm font-medium hover:scale-105 transition'
            >
              {item}
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
                <div className='w-full bg-white/10 rounded-full h-2'>
                  <div
                    className='bg-blue-400 h-2 rounded-full transition-all duration-700'
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
                <div className='w-full bg-white/10 rounded-full h-2'>
                  <div
                    className='bg-blue-400 h-2 rounded-full transition-all duration-700'
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className='mt-20 bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10'>
          <h3 className='text-2xl font-semibold mb-6 text-blue-400'>
            Technologies & Platforms I Work With
          </h3>

          <div className='flex flex-wrap gap-4'>
            {tools.map((tool, index) => (
              <span
                key={index}
                className='px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm hover:bg-blue-500/30 transition'
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

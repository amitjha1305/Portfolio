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
  {
    title: 'NoSky Website',
    description:
      'Built and maintained the corporate website with modern UI components and optimized content delivery.',
    image: './code.png',
    tags: ['Next.js', 'UI Engineering', 'Web Performance'],
    demo: 'https://nosky.io/',
  },
  {
    title: 'Elcom Digital Website',
    description:
      'Developed a business-facing website focused on services showcase, responsiveness, and SEO-ready structure.',
    image: './news.jpg',
    tags: ['React', 'Responsive Design', 'SEO'],
    demo: 'https://elcom.digital/',
  },
  {
    title: 'Elcom Library',
    description:
      'Cloud-based digital document management system with secure storage and structured access workflows.',
    image: './note.jpg',
    tags: ['Cloud SaaS', 'Document Management', 'Access Control'],
    demo: 'http://skillcloud.nosky.io/',
  },
  {
    title: 'NoSky Workspace',
    description:
      'Project management and workflow tracking platform for internal teams with task visibility and progress monitoring.',
    image: './linkgen.png',
    tags: ['Workflow Platform', 'Task Tracking', 'SaaS'],
    demo: 'https://planner.nosky.io/dashboard/projects/34',
  },
  {
    title: 'Sales App System',
    description:
      'Built performance tracking for field visits, calls, and executive-level activity analytics.',
    image: './social.png',
    tags: ['Sales Analytics', 'KPI Tracking', 'Reporting'],
  },
  {
    title: 'NoSky Backup Pro',
    description:
      'Secure Electron.js desktop backup application with reliability-focused backup and restore workflows.',
    image: './devops.png',
    tags: ['Electron.js', 'Desktop App', 'Data Backup'],
    demo: 'https://backup-portal.nosky.io/',
  },
  {
    title: 'Sales Performance Dashboard',
    description:
      'Dashboard for visit tracking, target vs achievement analysis, and executive KPI monitoring.',
    image: './data_analyst.png',
    tags: ['Dashboard', 'Data Visualization', 'Business Intelligence'],
  },
  {
    title: 'HR Analytics Dashboard',
    description:
      'HRMS analytics covering recruitment funnel, attendance trends, late entries, leave, and LOP tracking.',
    image: './weather.jpg',
    tags: ['HRMS', 'Analytics', 'Operations'],
    demo: 'https://expense.nosky.io/dashboard/outcity-expenses/6',
  },
  {
    title: 'Ticketing & Support Dashboard',
    description:
      'Support performance system for ticket status, average resolution time, and team efficiency insights.',
    image: './gpt.png',
    tags: ['Support Ops', 'Ticket Analytics', 'SLA Monitoring'],
  },
  {
    title: 'AWS VM Cost & Profit-Loss Dashboard',
    description:
      'Cloud usage and cost optimization dashboard with profit-loss visibility for infrastructure decisions.',
    image: './ddb.jpg',
    tags: ['AWS', 'Cloud Cost Optimization', 'FinOps'],
    demo: 'https://partners-mesh.nosky.io/analytics',
  },
  {
    title: 'Recruitment Email Workflow Automation',
    description:
      'Automated candidate communication pipeline to reduce manual effort and improve turnaround time.',
    image: './automation.png',
    tags: ['Automation', 'Recruitment', 'Email Workflows'],
  },
  {
    title: 'Automated Attendance Reporting System',
    description:
      'Automated daily attendance processing and reporting for better HR operations visibility.',
    image: './automation.png',
    tags: ['HR Automation', 'Attendance', 'Reporting'],
  },
  {
    title: 'Sales Visit/Call Notification System',
    description:
      'Automated alerts and notifications for sales activities, helping managers track team execution in near real time.',
    image: './automation.png',
    tags: ['Notifications', 'Sales Ops', 'Automation'],
  },
  {
    title: 'Daily Performance Reporting Automation',
    description:
      'Automated recurring performance summaries across teams to improve reporting consistency.',
    image: './automation.png',
    tags: ['Automation', 'Reporting', 'Productivity'],
  },
  {
    title: 'Sprint Planner Tool',
    description:
      'Internal productivity tool for sprint planning, task allocation, and workload balancing.',
    image: './code.png',
    tags: ['Productivity Tool', 'Sprint Planning', 'Task Allocation'],
  },
  {
    title: 'CRM Data Cleaning & Standardization System',
    description:
      'Improved CRM data quality through duplicate removal, structured validation, and reporting accuracy improvements.',
    image: './data_analyst.png',
    tags: ['Data Quality', 'CRM', 'Standardization'],
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
          className='section-title gradient-text font-[var(--font-space-grotesk)]'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className='glass overflow-hidden rounded-2xl shadow-md'
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
                <h3 className='text-xl font-[var(--font-space-grotesk)] font-bold mb-2'>{project.title}</h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>{project.description}</p>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full text-sm text-slate-700'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className='flex gap-4'>
                  {project.github ? (
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
                  ) : null}

                  {project.demo ? (
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
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

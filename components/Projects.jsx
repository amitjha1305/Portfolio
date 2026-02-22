'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'LinkGen - Smart AI writing for LinkedIn.',
    description:
      'LinkGen is an AI-powered LinkedIn post generator built with Streamlit and Groq’s LLaMA 3.3 70B model via LangChain. It helps users create high-quality, on-brand LinkedIn posts in seconds based on selected parameters like topic, length, language, and tone. Powered by real LinkedIn post data and few-shot learning, it offers features like auto-emojis, hashtag injection, A/B variant generation, batch exports, and instant copy. Designed for speed, consistency, and creativity, LinkGen turns LinkedIn content creation into a seamless, scalable process.',
    image: './linkgen.png',
    tags: ['Python', 'Langchain_Groq', 'GroqCloud', 'Streamlit'],
    github: 'https://github.com/iamAmitkumar',
    demo: 'https://linkgen-r6fh.onrender.com/',
  },
  {
    title: 'NovaMind – An Intelligent and Versatile AI Chatbot',
    description:
      "NovaMind is a cutting-edge AI GPT/chatbot built using Google Generative AI, Vite.js, and Firebase. It offers intelligent conversational capabilities with features like chat history, allowing users to save and revisit past conversations from anywhere in the world. With secure authentication, users' data remains private and accessible only to them. NovaMind assists with a variety of tasks, including coding, programming, mathematics, and general queries, all wrapped in a uniquely designed and intuitive UI/UX.",
    image: './gpt.png',
    tags: [
      'Vite.js',
      'Firebase',
      'Tailwind CSS',
      'Google Generative AI',
      'Context API',
    ],
    github: 'https://github.com/iamAmitkumar',
    demo: 'https://novamindai.netlify.app/',
  },
  {
    title: 'Weather App with daily and hourly forecasts.',
    description:
      'It is an API-based weather app that shows the real-time weather across the world. it also shows the daily and hourly forecasts. it contains all the features that a weather app must have such as humidity, wind speed, heat index, etc.',
    image: './weather.jpg',
    tags: ['React', 'Tailwind CSS', 'OpenWeather API'],
    github: 'https://github.com/iamAmitkumar/weather_forecast_app',
    demo: 'https://iamAmitkumar.github.io/weather_forecast_app/',
  },
  {
    title: 'iNoteBook - Notes on Cloud',
    description:
      'It is a cloud-based note-saving or MERN project. where users can easily add, edit, delete, and access their notes quickly and easily from anywhere in the world as it uses cloud database storage.',
    image: './note.jpg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/iamAmitkumar/iNoteBook_Notes_on_Cloud',
    demo: 'https://github.com/iamAmitkumar/iNoteBook_Notes_on_Cloud',
  },
  {
    title: 'News App - Realtime News',
    description:
      'It is an API-based web app that uses the external API for fetching the news and shows to the user. it also contains categories that enable the user to choose their desired category.',
    image: './news.jpg',
    tags: ['React', 'News API', 'Dark Mode'],
    github: 'https://github.com/iamAmitkumar/news_app',
    demo: 'https://github.com/iamAmitkumar/news_app',
  },
  {
    title: 'Data Visualisation Dashboard',
    description:
      'It is a graphical representation project that fetches data from their API (backend) and shows it to the user in the form of a pie chart. it also includes filter functionality tht enables user to filter data.',
    image: './ddb.jpg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/iamAmitkumar/data_visualisation_dashboard',
    demo: 'https://github.com/iamAmitkumar/data_visualisation_dashboard',
  },
  {
    title: 'Texter - Text Manipulator',
    description:
      'It is a text editor tool that contains all the functionality that a text editor tool must have. with the help of its features, users can easily manipulate their text.',
    image: 'https://cdn-icons-png.flaticon.com/512/5047/5047146.png',
    tags: ['React'],
    github: 'https://github.com/iamAmitkumar/texter_react_app',
    demo: 'https://texterr.netlify.app',
  },
  {
    title: 'Personal Portfolio',
    description:
      'It is my personal portfolio website totally made up of React reusable components. here you can check my skills and projects on this website',
    image: './portfolio.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Magic UI'],
    demo: 'https://iamAmit.netlify.app',
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

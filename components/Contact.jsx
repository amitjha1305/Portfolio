'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';
import { CONTACT_FORM_ACCESS_KEY } from '@/utils/config';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({
    access_key: CONTACT_FORM_ACCESS_KEY,
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.access_key) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'amitjha119003@gmail.com',
      link: 'mailto:contact@amitjha119003@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 7827561813',
      link: 'tel:7827561813',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Badarpur, New Delhi, Delhi India',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <section
      id='contact'
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
          Get In Touch
        </motion.h2>

        <div className='flex flex-col lg:flex-row gap-12'>
          <motion.div
            className='lg:w-1/3 overflow-hidden'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className='relative rounded-2xl overflow-hidden'>
              <BorderBeam
                duration={6}
                delay={2}
                size={400}
                className='from-transparent via-[#6366f1] to-transparent'
              />
              <div className='glass-beam p-8 shadow'>
                <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>

                <div className='space-y-6'>
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      className='flex items-center gap-4 hover:translate-x-2 transition-transform'
                      whileHover={{ scale: 1.02 }}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <div className='p-3 rounded-full bg-white shadow-md'>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className='text-sm text-gray-600'>{info.title}</h4>
                        <p className='font-medium'>{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className='lg:w-2/3'
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className='relative rounded-2xl overflow-hidden'>
              <BorderBeam
                duration={6}
                size={400}
                className='rounded-lg from-transparent via-[#ec4899] to-transparent'
              />
              <div className='glass-beam p-8 shadow'>
                <h3 className='text-2xl font-bold mb-6'>Send Me a Message</h3>

                <form onSubmit={handleSubmit}>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium mb-2'
                      >
                        Your Name
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Drop your name'
                        className='w-full px-4 py-3 rounded bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50'
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium mb-2'
                      >
                        Your Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Drop your email'
                        className='w-full px-4 py-3 rounded bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50'
                        required
                      />
                    </div>
                  </div>

                  <div className='mb-6'>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium mb-2'
                    >
                      Your Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows='5'
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='Write something!'
                      className='w-full px-4 py-3 rounded bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50'
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type='submit'
                    className='px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white rounded flex items-center gap-2'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={18} />
                  </motion.button>

                  {submitStatus === 'success' && (
                    <p className='mt-4 text-green-600'>
                      Message sent successfully!
                    </p>
                  )}

                  {submitStatus === 'error' && (
                    <p className='mt-4 text-red-600'>
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

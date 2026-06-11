import React from 'react'
import { motion } from 'framer-motion'
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='contact'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>

        <h2 className='text-3xl font-bold text-center mb-4'>
          Get In <span className='text-purple'>Touch</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

          {/* Contact Form */}
          <div>
            <form className='space-y-6'>

              <div>
                <label
                  htmlFor='name'
                  className='block text-gray-300 mb-2'
                >
                  Your Name
                </label>

                <input
                  type='text'
                  id='name'
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-gray-300 mb-2'
                >
                  Email Address
                </label>

                <input
                  type='email'
                  id='email'
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-gray-300 mb-2'
                >
                  Your Message
                </label>

                <textarea
                  id='message'
                  rows='6'
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none resize-none'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300'
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'>
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className='text-lg font-semibold mb-2'>
                  Location
                </h3>

                <p className='text-gray-400'>
                  Greater Noida, India
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'>
                <FaEnvelope />
              </div>

              <div>
                <h3 className='text-lg font-semibold mb-2'>
                  Email
                </h3>

                <p className='text-gray-400'>
                  shreyabvm.7738@gmail.com
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'>
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className='text-lg font-semibold mb-2'>
                  Phone
                </h3>

                <p className='text-gray-400'>
                  +91 XXXXXXXXXX
                </p>
              </div>
            </div>
           <div>
  <h3 className='text-lg font-semibold mb-4'>
    Follow Me
  </h3>

  <div className='flex gap-4'>

    <a
      href='https://github.com/shreya-goyal26'
      target='_blank'
      rel='noopener noreferrer'
      className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-xl hover:bg-purple-500 transition duration-300'
    >
      <FaGithub />
    </a>

    <a
      href='https://www.linkedin.com/in/shreyagoyal0426/'
      target='_blank'
      rel='noopener noreferrer'
      className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-xl hover:bg-purple-500 transition duration-300'
    >
      <FaLinkedin />
    </a>

  </div>
</div>
          </div>
           
        </div>

      </div>
    </motion.div>
  )
}

export default Contact
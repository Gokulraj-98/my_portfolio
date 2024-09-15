import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // API call to backend server
    axios.post('http://localhost:5000/send', formData)
      .then(response => {
        if (response.data.success) {
          setIsSent(true);
          setErrorMessage('');
        }
      })
      .catch(error => {
        console.error('There was an error sending the email:', error);
        setErrorMessage('Failed to send message. Please try again later.');
      });

    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <a href="mailto:gokulraj8248@gmail.com" className='hover:underline'>
                gokulraj8248@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <span>+8248133122</span>
            </div>
            <div className='mb-4'>
              <span>Vadapalani, Chennai</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                  placeholder='Enter Your Name' required
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                  placeholder='Enter Your Email' required
                />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                  rows="5"
                  placeholder='Enter Your Message' required
                />
              </div>
              <button
                type="submit"
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'
              >
                Send
              </button>

              {isSent && <p className="mt-4 text-green-400">Thank you! Your message has been sent.</p>}
              {errorMessage && <p className="mt-4 text-red-400">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

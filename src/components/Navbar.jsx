import React, { useState } from 'react';
const Navbar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Gokul</div>
        <div className='space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <div>
          {/* Button */}
          <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
            onClick={openModal}
          >
            Connect Me
          </button>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg p-8 w-11/12 md:w-1/3 shadow-lg transform transition-transform duration-300 scale-95">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Connect with Me</h2>
                <p className="mb-6 text-center text-white">You can find me on:</p>
                <div className="flex justify-around space-x-4 mb-6">
                  <a href="https://www.linkedin.com/in/gokul-raj-652965170/" target="_blank" rel="noopener noreferrer"
                    className="text-indigo-500 bg-white rounded-full px-4 py-2 font-bold transition-all hover:bg-indigo-600 hover:text-white">
                    LinkedIn
                  </a>
                  <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer"
                    className="text-teal-500 bg-white rounded-full px-4 py-2 font-bold transition-all hover:bg-teal-600 hover:text-white">
                    Naukri
                  </a>
                </div>
                <div className="text-center">
                  <button
                    className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
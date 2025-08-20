import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-gray-400 mb-12">
          If you have a project or a job opportunity, feel free to contact me. I'm always open to new connections.
        </p>

        <form
          action="https://formspree.io/f/your-form-id-here"
          method="POST"
          className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12"
        >
          {/* ... (Your form fields - Name, Email, Message) ... */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 text-white focus:outline-none focus:border-blue-400"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 text-white focus:outline-none focus:border-blue-400"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 text-white focus:outline-none focus:border-blue-400 resize-none"
            ></textarea>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* New Social Links Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Or Find Me On
          </h3>
          <div className="flex justify-center space-x-8">
            {/* GitHub Link */}
            <Link 
              href="https://github.com/your-username" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <i className="fab fa-github-square text-5xl"></i>
            </Link>

            {/* LinkedIn Link */}
            <Link 
              href="https://www.linkedin.com/in/your-profile-url" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <i className="fab fa-linkedin text-5xl"></i>
            </Link>

            {/* Email Link */}
            <Link 
              href="mailto:your-email@example.com" // Replace with your Email address
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <i className="fas fa-envelope-square text-5xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
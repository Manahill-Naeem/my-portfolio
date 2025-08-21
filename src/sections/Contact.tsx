'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  return (
  <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-[#3b4cca] via-[#6ee7b7] to-[#e0e7ff] dark:from-[#232946] dark:via-[#232946] dark:to-[#2563eb]">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-white mb-4 drop-shadow-lg">
          Get in Touch
        </h2>
        <p className="text-center text-blue-900 dark:text-gray-200 mb-12">
          If you have a project or a job opportunity, feel free to contact me. I&apos;m always open to new connections.
        </p>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            setStatus('');
            setLoading(true);
            try {
              const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
              });
              if (res.ok) {
                setStatus('Your message has been sent!');
                form.reset();
              } else {
                setStatus('Failed to send message. Please try again.');
              }
            } catch {
              setStatus('Failed to send message. Please try again.');
            }
            setLoading(false);
          }}
          className="bg-gradient-to-br from-[#232946] to-[#181f2a] p-8 rounded-lg shadow-lg mb-12"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-200 mb-2">
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
            <label htmlFor="email" className="block text-gray-200 mb-2">
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
            <label htmlFor="message" className="block text-gray-200 mb-2">
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
          
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-300 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <span className="text-center text-green-400 font-semibold">{status}</span>
            )}
          </div>
        </form>

        {/* New Social Links Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-blue-900 dark:text-white mb-6 drop-shadow-lg">
            Or Find Me On
          </h3>
          <div className="flex justify-center space-x-8">
            {/* GitHub Link */}
            <Link 
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#232946] dark:text-white hover:text-blue-700 dark:hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
            >
              <i className="fab fa-github-square text-5xl"></i>
            </Link>

            {/* LinkedIn Link */}
            <Link 
              href="https://www.linkedin.com/in/manahill-naeem-782098302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#232946] dark:text-white hover:text-blue-700 dark:hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
            >
              <i className="fab fa-linkedin text-5xl"></i>
            </Link>

            {/* Email Link */}
            <Link 
              href="mailto:manahillnaeem453@gmail.com" 
              className="text-[#232946] dark:text-white hover:text-blue-700 dark:hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
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
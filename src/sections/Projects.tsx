import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Sonocare AI Chatbot',
    description: 'An intelligent medical assistant chatbot built with Agentic AI. The chatbot is designed to provide preliminary healthcare information, answer medical queries, and guide users on basic health concerns, making medical information more accessible.',
    techStack: ['Agentic AI', 'Python', 'Dialogflow', 'Natural Language Processing'],
    imageSrc: '/images/projects/chatbot_project.jpg',
    liveLink: '#', // Add your live project URL here
    githubLink: 'https://github.com/your-username/sonocare-chatbot', // Add your GitHub repository URL here
  },
  {
    id: 2,
    title: 'Service Website',
    description: 'A fully responsive service website designed to showcase a professional portfolio and service offerings. Built with Next.js and Tailwind CSS, it features dynamic content, smooth animations, and a modern user interface to provide a seamless user experience.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    imageSrc: './images/projects/service_website.png',
    liveLink: 'https://optivance-inspect.vercel.app/',
    githubLink: 'https://github.com/Manahill-Naeem/smartoria-mobile-web.git'
  },
];

const Projects = () => {
  return (
  <section id="projects" className="py-20 md:py-24 bg-gradient-to-br from-[#ede9fe] via-[#e0e7ff] to-[#f0fdfa] dark:from-[#232946] dark:via-[#181f2a] dark:to-[#232946]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`bg-gradient-to-br from-[#f0fdfa] to-[#e0e7ff] dark:from-[#232946] dark:to-[#181f2a] border-l-4 ${idx % 2 === 0 ? 'border-[#10b981] dark:border-[#2563eb]' : 'border-[#2563eb] dark:border-[#10b981]'} rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-shadow transform duration-300 hover:scale-105 flex flex-col h-full`}
            >
              <div className="relative h-64 w-full rounded-md overflow-hidden mb-6">
                <Image
                  src={project.imageSrc && project.imageSrc.startsWith('/') ? project.imageSrc : '/images/projects/service_website.png'}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#2563eb] dark:text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#2563eb] dark:bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#10b981] hover:bg-[#2563eb] !text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Live Demo
                </Link>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2563eb] hover:bg-[#10b981] !text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                >
                  GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
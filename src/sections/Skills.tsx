import React from 'react';

const skillsCategories = [
  {
    category: 'IT & Programming',
    icon: 'fas fa-laptop-code',
    skills: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'TypeScript', icon: 'fas fa-code' },
      { name: 'Next.js', icon: 'fas fa-rocket' },
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'Artificial Intelligence', icon: 'fas fa-robot' },
    ],
  },
  {
    category: 'Medical & Healthcare',
    icon: 'fas fa-heartbeat',
    skills: [
      { name: 'Medical Sonography', icon: 'fas fa-x-ray' },
      { name: 'Radiology & Ultrasound', icon: 'fas fa-notes-medical' },
      { name: 'ECG', icon: 'fas fa-monitor-heart-rate' },
      { name: 'Patient Care', icon: 'fas fa-user-injured' },
    ],
  },
  {
    category: 'Digital & Marketing',
    icon: 'fas fa-bullhorn',
    skills: [
      { name: 'Web Development', icon: 'fas fa-laptop-code' },
      { name: 'E-commerce', icon: 'fas fa-shopping-cart' },
      { name: 'Digital Marketing', icon: 'fas fa-chart-line' },
    ],
  },
  {
    category: 'Teaching & Communication',
    icon: 'fas fa-chalkboard-teacher',
    skills: [
      { name: 'IELTS/PTE', icon: 'fas fa-book-reader' },
      { name: 'English Grammar', icon: 'fas fa-language' },
      { name: 'Public Speaking', icon: 'fas fa-microphone' },
    ],
  },
];

const Skills = () => {
  return (
  <section id="skills" className="py-20 md:py-24 bg-gradient-to-br from-[#f0fdfa] via-[#f1f5f9] to-[#d1fae5] dark:from-[#232946] dark:via-[#181f2a] dark:to-[#232946]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">
          Skills
        </h2>
        
        {/* Skills Categories Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#f0fdfa] to-[#e0e7ff] dark:from-[#232946] dark:to-[#181f2a] border-l-4 ${index % 2 === 0 ? 'border-[#10b981] dark:border-[#2563eb]' : 'border-[#2563eb] dark:border-[#10b981]'} rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-shadow transform duration-300 hover:scale-105 flex flex-col h-full`}
            >
              <div className="flex items-center mb-4">
                <i className={`${category.icon} text-3xl text-[#2563eb] dark:text-blue-400 mr-4`}></i>
                <h3 className="text-xl font-semibold text-[#232946] dark:text-white">
                  {category.category}
                </h3>
              </div>
              {/* Individual Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-700 dark:text-gray-200">
                    <i className={`${skill.icon} text-[#2563eb] dark:text-blue-300 mr-3`}></i>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
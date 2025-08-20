export default function About(){
    return(
        <section id="about" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          About Me
        </h2>
        
        {/* Two-column container */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column*/}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Detailed Version
            </h3>
            <div className="text-lg text-gray-800 leading-relaxed space-y-4">
              <p>
                Hello! I’m Manahill Naeem, a dedicated healthcare professional and passionate IT learner. I started my career in the medical field with internships and jobs in Radiology and Ultrasound departments across renowned hospitals, including Modern Hospital, AO Hospital, and Saifee Hospital. Alongside my medical journey, I expanded my expertise into teaching IELTS, grammar, and PTE students, as well as completing an ECG course at Etimad Diagnostic Center.
              </p>
              <p>
                Currently, I am pursuing my growing passion in Information Technology, where I have completed courses in HTML, CSS, Java, TypeScript, Next.js, and Python through NED University and the Governor IT Initiative. I also hold experience in web development, e-commerce, digital marketing, and now exploring Artificial Intelligence, with a focus on building intelligent chatbots using Magnetic AI.
              </p>
              <p>
                This unique combination of healthcare expertise and IT skills allows me to bridge the gap between two dynamic industries—medical technology and modern software solutions.
              </p>
            </div>
          </div>
          
          {/* Right Column*/}
          <div className="md:w-1/3 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              🔑 Key Highlights
            </h3>
            <ul className="text-gray-300 space-y-3 list-none">
              <li>
                <span className="font-medium text-white">🎓 Medical Background:</span> Ultrasound Diploma + Internships in Radiology & Ultrasound
              </li>
              <li>
                <span className="font-medium text-white">💼 Professional Roles:</span> Worked as Sonologist, taught IELTS, Grammar & PTE
              </li>
              <li>
                <span className="font-medium text-white">🏥 Certifications:</span> ECG Course (Etimad Diagnostic Center)
              </li>
              <li>
                <span className="font-medium text-white">💻 IT Skills:</span> HTML, CSS, Java, TypeScript, Next.js, Python
              </li>
              <li>
                <span className="font-medium text-white">📊 Digital Skills:</span> Web Development, Digital Marketing, E-Commerce
              </li>
              <li>
                <span className="font-medium text-white">🤖 AI Learning:</span> Exploring Magnetic AI & building Chatbots
              </li>
              <li>
                <span className="font-medium text-white">🌐 Governor IT Initiative:</span> Advancing in full-stack & AI tools
              </li>
              <li>
                <span className="font-medium text-white">🔗 Passion:</span> Bridging healthcare + IT for smart medical solutions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section> 
    )
}


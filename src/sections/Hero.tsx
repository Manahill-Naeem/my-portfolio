import Link from "next/link";
import Image from "next/image";

export default function Hero(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-24 md:py-32">
      <div className="relative w-50 h-50 rounded-full overflow-hidden mb-6 shadow-lg">
        <Image
          src="/profile.jpeg"
          alt="Profile image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-2">I'm Manahill Naeem</h1>
        <p className="text-lg text-gray-600 py-3">A passionate Web Developer skilled in HTML, CSS, Java, TypeScript, Next.js, and Python, currently exploring Agentic AI and Chatbot Development. Alongside development, I have hands-on knowledge of E-Commerce and Digital Marketing, enabling me to build not just websites, but complete modern and scalable digital solutions. With a background in healthcare (Ultrasound & ECG), I bring precision and analytical skills into every project.</p>
      </div>
      <div className="flex gap-4">
        <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">Download CV</Link>
        <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">Contact Me</Link>
      </div>
     </div>
    )
    
}
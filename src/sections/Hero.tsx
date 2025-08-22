
'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 py-24 md:py-32 overflow-hidden">
      {/* Animated double-tone gradient background */}
      <div
        className="absolute inset-0 -z-10 animate-gradient-move"
        style={{
          background:
            "linear-gradient(120deg, var(--primary) 0%, var(--accent) 100%)",
            opacity: 0.18,
        }}
      />
      {/* Optional: Add a blurred circle for extra effect */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[var(--accent)] opacity-30 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[var(--primary)] opacity-30 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg">
        <Image
          src="/profile.jpeg"
          alt="Profile image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-2">I&apos;m Manahill Naeem</h1>
        <p className="text-lg text-gray-400 py-3">
          A passionate Web Developer skilled in HTML, CSS, Java, TypeScript, Next.js, and Python, currently exploring Agentic AI and Chatbot Development. Alongside development, I have hands-on knowledge of E-Commerce and Digital Marketing, enabling me to build not just websites, but complete modern and scalable digital solutions. With a background in healthcare (Ultrasound & ECG), I bring precision and analytical skills into every project.
        </p>
      </div>
      <div className="flex gap-4">
{/*         <button
          className="btn-primary"
          onClick={() => setShowModal(true)}
        >
          Download CV
        </button> */}
        <Link
          href="#contact"
          className="btn-primary"
        >
          Hire Me
        </Link>
      </div>
      {/* Modal for CV preview and download */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">My Professional CV</h2>
            <div className="w-full h-96 mb-4 border rounded overflow-hidden flex items-center justify-center bg-gray-100">
              <iframe
                src="/Manahill_Naeem_CV.pdf"
                title="CV PDF"
                className="w-full h-full"
                frameBorder="0"
                aria-label="CV PDF"
              />
            </div>
            <a
              href="/Manahill_Naeem_CV.pdf"
              download
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-green-600 transition-colors font-semibold shadow"
            >
              Download as PDF
            </a>
          </div>
        </div>
      )}
  {/* Add keyframes for animation */}
      <style jsx>{`
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 8s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

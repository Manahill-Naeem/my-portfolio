import Navbar from "@/components/Navbar";
import About from "@/sections/AboutMe";
import Education from "@/sections/Education";
import Experience from "./experience/page";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function RootLayout(){
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

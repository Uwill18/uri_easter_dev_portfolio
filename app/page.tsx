import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectsSection"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import EmailSection from "./components/EmailSection"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4">
      <Navbar/>
     <div className="container mt-24 mx-auto px-12 py-4">
     <HeroSection/>
     <ProjectSection/>
     <Skills/>
     <Experience/>
     <EmailSection/>
     </div>
    </main>
  );
}

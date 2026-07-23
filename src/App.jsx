import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 selection:bg-purple-500/30 selection:text-purple-300 overflow-x-hidden font-sans">
      <Preloader onComplete={() => setLoadingComplete(true)} />
      
      {loadingComplete && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Publications />
            <Education />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

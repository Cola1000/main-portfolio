import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Papers, Portfolio, Skills, Compact } from "./components";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main-portfolio/compact" element={<Compact />} />
        <Route path="/main-portfolio/*" element={
          <div className='relative z-0 bg-primary'>
            <Navbar />
            <div className='wrapper' ref={wrapperRef}>
              <div id="hero" className='z-10'>
                <Hero scrollContainer={wrapperRef} />
              </div>
              <div id="portfolio" className='relative z-30 bg-primary mt-[-2px]'>
                <Portfolio />
              </div>
              <div id="experience" className='relative z-30 bg-primary'>
                <Experience />
              </div>
              <div id="skills" className='relative z-30 bg-primary'>
                <Skills />
              </div>
              <div id="papers" className='relative z-30 bg-primary'>
                <Papers />
              </div>
              <div id="contact" className='relative z-30 bg-primary'>
                <Contact />
              </div>
              <footer className='relative z-30 bg-primary py-8 text-center text-gray-500 text-sm'>
                © 2026 Rhio Bimo P S. All rights reserved.
              </footer>
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;

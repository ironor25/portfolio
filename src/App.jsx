import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProofOfWork from './components/ProofOfWork';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { Routes,Route } from 'react-router-dom';




const App = () => {

  
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`dark:bg-black flex flex-col h-screen w-full ${isDark == 'dark' ? ' dark' : ''}`}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className=''>
        <Hero isDark={isDark} />
        <ProofOfWork isDark={isDark} />
        <Skills isDark={isDark} />
        <Education isDark={isDark} />
        <Contact isDark={isDark} />
        <Routes>
          <Route path="/proof-of-work" element={<ProofOfWork isDark={isDark} />} />
          <Route path="/skills" element={<Skills isDark={isDark} />} />
          <Route path="/education" element={<Education isDark={isDark} />} />
          <Route path="/contact" element={<Contact isDark={isDark} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
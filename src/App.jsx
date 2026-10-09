import Header from './components/Header';
import Hero from './components/Hero';
import TechStackTicker from './components/TechStackTicker';
import ProofOfWork from './components/ProofOfWork';
import Opensource from './components/Opensource';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import CtaBandYellow from './components/CtaBandYellow';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#ffffff] font-sans antialiased selection:bg-[#faff69] selection:text-[#0a0a0a]">
      {/* Pinned Top Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="w-full flex flex-col">
        {/* Hero Section with 7-5 split and interactive ClickHouse SQL query terminal */}
        <Hero />

        {/* Tech Stack Ticker Strip */}
        <TechStackTicker />

        {/* Proof of Work (Projects) */}
        <ProofOfWork />

        {/* Open Source Contributions */}
        <Opensource />

        {/* Career Experience */}
        <Experience />

        {/* Architecture & Skills Matrix */}
        <Skills />

        {/* Academic Foundation */}
        <Education />

        {/* Pre-Footer Electric Yellow CTA Band */}
        <CtaBandYellow />

        {/* Transmission & Contact Terminal */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
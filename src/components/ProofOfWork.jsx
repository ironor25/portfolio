import { Github, Link } from 'lucide-react';
import { useState } from 'react';
import SpotlightCard from './SpotLightCard';

const projects = [
  {
    name: "Cereberus",
    desc: "Cereberus is a user-friendly trading platform that shows live buy/sell orders instantly, offering a smooth and real-time experience.",
    tech: ["Typescript","React", "Websockets","Tailwind", "Express"],
    link: "https://cereberus.vercel.app/",
    code: "https://github.com/ironor25/Cereberus.git",
    icon: "/cereberus.png"
  },
  {
    name: "FlashWallet",
    desc: "Flash Wallet is a fast, secure Web3 wallet enabling users to manage crypto their assets and interact with dApps effortlessly in real time.",
    tech: ["Javascript", "React","Express", "Ether.js","Hardhat"],
    link: "https://flash-tan.vercel.app/",
    code: "https://github.com/ironor25/Flash_Wallet.git",
    icon: "/flash.png"
  },
];

const ProofOfWork = (props) => {
  const {isDark} = props
  return (
    <section className={`py-12 px-2 sm:px-0 dark:bg-black ${isDark == 'dark' ? ' dark' : ''}`} id="proof-of-work">
      <h2 className="text-2xl font-bold text-center mb-8">Proof of Work</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {projects.map((p, i) => (
            <Card  key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ name, desc, tech, link, code, icon }) => {
  // Gradient border animation using CSS
  return (
    <div
      className="relative p-0.5 rounded-xl group transition-shadow hover:shadow-2xl overflow-hidden w-full min-w-[220px] max-w-xs mx-auto"
      style={{ zIndex: 1 }}
    >
      {/* Revolving gradient border */}
      <span
        className="absolute h-90 w-1/5 inset-0 rounded-xl pointer-events-none"
        style={{
          background:
            'conic-gradient(from 0deg, #00e6ff 20%, #00ff85 50%, #ffe600 75%, #ff00ea 100%)',
          animation: 'spin 5s linear infinite',
          zIndex: 5,
          display: 'block',
        }}
      ></span>
      <SpotlightCard className='z-6 cursor-pointer bg-white dark:bg-black'>
        {/* Project Icon */}
        
        <div className="text-4xl">
          <img src={icon} className='h-10 '></img>
        </div>
        {/* Project Name */}
        <h3 className="text-xl font-semibold p-1 text-black dark:text-white">{name}</h3>
        {/* Project Description */}
        <p className=" p-1  text-black dark:text-white">{desc}</p>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 p-1">
          {tech.map((t, i) => (
            <span
              key={i}
              className="rounded-sm border border-black text-black bg-white px-3 py-1 text-xs font-medium dark:bg-black dark:text-white dark:border-white"
            >
              {t}
            </span>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex gap-4 mt-2 p-1">
          <a
            href={link}
            className="pl-1 pr-1 flex font-medium text-[15px] rounded-sm bg-lime-400 text-black  hover:bg-lime-500 transition-colors border border-lime-600 shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link className='h-4 mt-1'/>
           <span className='f'>Website</span>
           
          </a>
          <a
            href={code}
            className="pl-1 flex pr-1 rounded-sm bg-black font-medium text-[15px] text-white  hover:bg-zinc-800 transition-colors border border-black shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className='h-4 mt-1'/>
            Source Code
          </a>
        </div>
      </SpotlightCard>
      {/* Gradient border animation keyframes */}
      <style>{`
        @keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }

  0% {
    transform: rotateZ(360deg);
  }
}

      `}</style>
    </div>
  );
};

export default ProofOfWork;
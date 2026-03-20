import { Github, Link } from 'lucide-react';
import { useState } from 'react';
import SpotlightCard from './SpotLightCard';

const projects = [
  {
    name: "Cereberus",
    desc: "Cereberus is a user-friendly trading platform that shows live buy/sell orders instantly, offering a smooth and seamless real-time experience.",
    tech: ["Typescript","React", "Websockets","Tailwind", "Express"],
    link: "https://cereberus.vercel.app/",
    code: "https://github.com/ironor25/Cereberus.git",
    icon: "/cereberus.png"
  },
   {
    name: "Notible",
    desc: "Notible is an AI-powered drawing board that converts user ideas into intelligent sketches and visuals, enabling fast, intuitive, and collaborative creative design.",
    tech: ["Typescript", "React","Express", "Turborepo","Docker","Canvas API","Redux"],
    link: "https://ai-drawing-board.vercel.app/",
    code: "https://github.com/ironor25/Notible.git",
    icon: "/notible.png"
  },
  {
    name: "FlashWallet",
    desc: "Flash Wallet is a fast, secure Web3 wallet enabling users to manage crypto their assets and interact with dApps effortlessly in real time.",
    tech: ["Javascript", "React","Express", "Ether.js","Hardhat"],
    link: "https://flash-tan.vercel.app/",
    code: "https://github.com/ironor25/Flash_Wallet.git",
    icon: "/flash.png"
  },
  {
    name: "2D-Animation Generator",
    desc: "AI-powered 2D animation generator that transforms user prompts into smooth, dynamic animations, enabling effortless creation of visually engaging content without manual design.",
    tech: ["Python", "FastAPI","React", "Langchain","Ollama"],
    link: "https://drive.google.com/file/d/1Am1_m9QsFZdU-jp2KCimgXAc44anNNpC/view?usp=sharing",
    code: "https://github.com/ironor25/Prompt-To-Animation.git",
    icon: "/animation.png"
  }
];

const ProofOfWork = (props) => {
  const {isDark} = props
  return (
    <section className={`py-40 px-2 sm:px-0 dark:bg-black dark:text-white ${isDark == 'dark' ? ' dark' : ''}`} id="proof-of-work">
      <h2 className="text-4xl font-bricolage font-bold text-center mb-8">Proof of Work</h2>
      <div className="flex justify-center">
        <div className="grid  sm:grid-cols-2 gap-6 w-full max-w-3xl">
          {projects.map((p, i) => (
            <Card  key={i} {...p} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ name, desc, tech, link, code, icon ,isDark}) => {
  // Gradient border animation using CSS
  return (

     
      <SpotlightCard className=' relative rounded-xl p-7 border border-b-2 border-r-2 transition-shadow
       hover:shadow-2xl overflow-hidden w-full min-w-[220px]  mx-auto h-[10cm] z-6 cursor-pointer bg-white dark:bg-black' spotlightColor={isDark? "rgba(123, 232, 217, 0.25)":"rgba(252, 142, 8, 0.25)"}>

        
        <div className="text-4xl">
          <img src={icon} className='h-12 '></img>
        </div>
        {/* Project Name */}
        <h3 className="text-xl font-semibold p-1 text-black dark:text-white">{name}</h3>
        {/* Project Description */}
        <p className=" p-1  text-black dark:text-gray-400 mb-3">{desc}</p>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 ">
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
            className="pl-1 flex  rounded-sm bg-black font-medium text-[15px] text-white  hover:bg-zinc-800 transition-colors border border-black shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <span className='flex'>
              <Github className='h-4 mt-1'/>
              Source Code
            </span>
          </a>
        </div>
      </SpotlightCard >

  );
};

export default ProofOfWork;
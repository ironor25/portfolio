import { useState } from 'react'
import './App.css'
import { ExportOutlined } from '@ant-design/icons';

const BlockchainPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   // "homepage": "https://ironor25.github.io/dy.dev-portfolio/",
  const skills = [
    {
      category: "Blockchain",
      items: [
        "Solidity",
        "Smart Contracts",
        "Ether.js",
        "Hardhat",
        "Genache",
        "ERC Standards",
        "Ethereum"
      ]
    },
    {
      category: "Frontend",
      items: [
        "React",
        "TailwindCSS",
        "JavaScript",
        "HTML/CSS",
        "Python"
      ]
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Python",
        "Flask"
      ]
    }
    ,
    {
        category: "Data Handling Skills",
        items: [
          "MySQL",
          "Pandas",
          "Matplotlib",
          "Numpy"
        ]
      },
    {
      category: "Soft SKills",
      items: [
        "Leadership",
        "Get The Work done",
        "Resilient",
        "Problem solver"
      ]
    }
    ,
    {
      category: "Non technical Skills",
      items: [
        "Stock Trading",
        "Stock Research",
        "Crypto Trading",
        "Research on MemeCoin",
        "Finance Research",
        "Technical and Fundamental Analysis",
        "Price Action"
      ]
    }
  ];

  const projects = [
    {
      title: "Unified Voting Interface(U.V.I)",
      description: "A decentralized voting interface for tamper-proof voting",
      tags: ["Javascript", "Ether.js", "Solidity","HTML/CSS"],
      link: "https://ironor25.github.io/",
      image: "./uvi_img.png"
    },
    {
      title: "Flash Wallet",
      description: "A decentralized Web3 wallet for managing your digital assets",
      tags: ["Javascript", "Ether.js", "React.js","Express.js","TailwindCSS","Moralis SDK","Ant Design UI"],
      link: "https://flash-tan.vercel.app/",
      image: "./wallet_img.png"
    }
    
  ];

  const experiences = [
    {
      role: "Community Assistant",
      company: "Dapps.co",
      period: "Oct 2023-Nov 2023",
      description: "Assist in community engagement and organizing webinars in colleges"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto p-5 py-4">
          <div className="flex justify-between items-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mr-10">
              DY.dev
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block hover:text-blue-400 transition-colors">Home</a>
              <a href="#skills" className="block hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="block hover:text-blue-400 transition-colors">Projects</a>
              <a href="#experience" className="block hover:text-blue-400 transition-colors">Experience</a>
              <a href="#contact" className="block hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className='justify-between flex'>
        <div className="max-w-4xl text-left mr-60">
          <div className="text-blue-400 mb-4">Welcome to my portfolio</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            I'm Deepak Yadav
            
          </h1>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-4xl md:text-6xl font-bold mb-6">
              {" "}A Blockchain Developer
        </span>
          <p className="text-3xl text-gray-300 mb-8 mt-6">
            & A Crypto Researcher
          </p>
          <div className="flex space-x-9 mt-28">
            <a href="#projects" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors">
              View Projects
            </a>
            <a href="https://drive.google.com/file/d/1dMGcWC3bJvqr9VM158Ad3KlPi8WsAMy3/view?usp=sharing" target='_blank' className="border border-blue-500 hover:bg-blue-500/10 px-6 py-3 rounded-lg transition-colors">
              My CV
            </a>
          </div>
        </div>
        <div>
            <img src='./myimg3.png'></img>
            <div className="w-80 h-1 bg-orange-300"></div>
        </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900/50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {skills.map((skillCategory, index) => (
        <div
          key={index}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6
           hover:bg-gray-800/70 transition-all hover:shadow-xl hover:shadow-blue-500/50"
        >
          <h3 className="text-xl font-bold mb-6 text-center text-blue-400">
            {skillCategory.category}
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skillCategory.items.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="bg-blue-500/10 hover:bg-blue-500/20 hover:shadow-lg
                 hover:shadow-blue-500/50 text-blue-300 px-4 py-2 rounded-lg text-sm transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

     

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
        
              {/* Project Details */}
              <div className="p-6">
                {/* Project Name */}
                <a href={project.link} target='_blank'>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  {project.title} <ExportOutlined />
                </h2>
                </a>
                <h4 className=" font-bold text-gray-800 mb-4">
                  {project.description}
                </h4>
        
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-blue-500 pl-4 ml-4">
                <div className="text-xl font-bold">{exp.role}</div>
                <div className="text-blue-400">{exp.company}</div>
                <div className="text-gray-400 text-sm mb-2">{exp.period}</div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="flex justify-center space-x-36">
            <a href="https://www.linkedin.com/in/deepak-yadav-781088260/" className="hover:text-blue-400 transition-colors" target="_blank">
            <img src="./linkedin.svg" className='h-40 w-40'></img>
            </a>
            <a href="https://github.com/ironor25" className="hover:text-blue-400 transition-colors" target="_blank">
              <img src="./github.svg" className='h-40 w-40'></img>
            </a>
            <a href="https://x.com/ironor25" className="hover:text-blue-400 transition-colors" target="_blank">
            <img src="./twitter.svg" className='h-40 w-40'></img>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 text-center text-gray-400">
        <div className="max-w-6xl mx-auto">
          <p>© 2024 Blockchain.dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlockchainPortfolio;
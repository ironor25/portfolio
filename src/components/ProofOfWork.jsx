import { useState } from 'react';
import {
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  ArrowUpRight,
  Zap,
  Activity,
  Code,
  Box,
  Monitor,
  Cpu,
  Layout
} from 'lucide-react';

const categories = ['All Systems', 'Realtime Systems', 'AI & GenAI', 'Web3 & Fintech'];

const projectsData = [
  {
    id: 'teamx',
    name: 'TeamX',
    category: 'Realtime Systems',
    tagline: 'Enterprise Workforce Telemetry & Real-Time Tracking Engine',
    desc: "Full workforce time tracker and activity telemetry engine. Time, activity levels, projects, tasks, apps, and reports stand on their own. Employers control tracking rules, required screenshots, or authoritative time tracking without screenshot monitoring. Ships native desktop apps for macOS, Linux, and Windows.",
    tech: ['Electron', 'React', 'Node.js', 'Python', 'FastAPI', 'WebSockets', 'macOS / Linux / Windows'],
    link: 'https://teamx.simpel.ai/',
    code: 'https://github.com/ironor25',
    icon: '/teamx.ico',
    metrics: 'Native Multi-OS Desktop Apps (macOS, Linux, Win)',
    featured: true,
    highlights: [
      'Multi-platform desktop client across macOS, Linux, and Windows',
      'Authoritative real-time time tracking & granular activity telemetry',
      'Configurable enterprise privacy rules and screenshot monitoring'
    ]
  },
  {
    id: 'minigpt',
    name: 'MiniGPT',
    category: 'AI & GenAI',
    tagline: '~10M Parameter GPT-Style Transformer Model from Scratch',
    desc: 'Implemented a GPT-style Transformer language model (~10M parameters) from scratch using PyTorch, covering core multi-head self-attention architecture, tokenization, embeddings, and language-model inference.',
    tech: ['Python', 'PyTorch', 'NumPy', 'Pandas', 'NLP', 'Transformers', 'Tokenization', 'Embeddings', 'OpenAI'],
    link: 'https://github.com/ironor25/Mini-gpt.git',
    code: 'https://github.com/ironor25/Mini-gpt.git',
    icon: '/animation.png',
    metrics: '~10M Parameter Transformer (PyTorch)',
    featured: true,
    highlights: [
      'Built Transformer architecture & language-model inference from scratch',
      'End-to-end NLP pipeline: BPE tokenization, preprocessing, embeddings & attention masking',
      'Trained via custom PyTorch training loops on Shakespearean poetry for rhyme modeling'
    ]
  },
  {
    id: 'cereberus',
    name: 'Cereberus',
    category: 'Realtime Systems',
    tagline: 'High-Frequency Real-Time Crypto Trading Terminal',
    desc: 'Engineered a low-latency trading interface capable of processing and rendering real-time orderbook updates, market trade feeds, and instant buy/sell matching via WebSocket streams.',
    tech: ['TypeScript', 'React', 'WebSockets', 'TailwindCSS', 'Express', 'Node.js'],
    link: 'https://cereberus.vercel.app/',
    code: 'https://github.com/ironor25/Cereberus.git',
    icon: '/cereberus.png',
    metrics: '< 10ms Order Stream Latency',
    featured: true,
    highlights: [
      'Sub-10ms full-duplex WebSocket orderbook streaming',
      'Optimized client-side rendering for volatile trade feeds',
      'Real-time order execution matching simulation'
    ]
  },
  {
    id: 'sales-dashboard',
    name: 'Sales Analytics Dashboard',
    category: 'Realtime Systems',
    tagline: 'Pixel-Perfect Revenue & Analytics Interface from Figma',
    desc: 'High-performance interactive sales dashboard converting complex Figma designs into pixel-perfect responsive web components with live revenue metrics, filtering, and chart visualization.',
    tech: ['React', 'JavaScript', 'TailwindCSS', 'Chart.js', 'REST APIs', 'Figma-to-Code'],
    link: 'https://sales-dashboard-new.onrender.com/',
    code: 'https://github.com/ironor25',
    icon: '/images.png',
    metrics: '1:1 Pixel-Perfect Figma Conversion',
    featured: false,
    highlights: [
      'Exact pixel-perfect adherence to Figma design systems & tokens',
      'Interactive date-range sales metrics and performance charts',
      'Zero-lag responsive UI across mobile, tablet, and widescreen'
    ]
  },
  {
    id: 'notible',
    name: 'Notible',
    category: 'AI & GenAI',
    tagline: 'AI-Powered Collaborative Vector Canvas',
    desc: 'Intelligent whiteboard application converting freeform sketch coordinates and concepts into structured visual architectural diagrams using generative vision algorithms and multi-room canvas syncing.',
    tech: ['TypeScript', 'React', 'Canvas API', 'Docker', 'Turborepo', 'Express', 'Redux'],
    link: 'https://ai-drawing-board.vercel.app/',
    code: 'https://github.com/ironor25/Notible.git',
    icon: '/notible.png',
    metrics: 'Monorepo Architecture (Turborepo + Docker)',
    featured: false,
    highlights: [
      'High-performance 60fps HTML5 Canvas API renderer',
      'Monorepo architecture with Docker containerization',
      'AI sketch recognition & prompt-to-diagram converter'
    ]
  },
  {
    id: 'flashwallet',
    name: 'FlashWallet',
    category: 'Web3 & Fintech',
    tagline: 'Non-Custodial Web3 Multi-Asset Crypto Wallet',
    desc: 'Self-custody Web3 wallet supporting seamless private key encryption, multi-chain asset management, gas estimation, and direct dApp interaction via standard JSON-RPC providers.',
    tech: ['JavaScript', 'React', 'Ethers.js', 'Hardhat', 'Express', 'Solidity'],
    link: 'https://flash-tan.vercel.app/',
    code: 'https://github.com/ironor25/Flash_Wallet.git',
    icon: '/flash.png',
    metrics: 'EIP-1193 & Smart Contract Verification',
    featured: false,
    highlights: [
      'AES-256 client-side encrypted key store',
      'Direct smart contract interaction & gas optimization',
      'Instant balance streaming & testnet deployment'
    ]
  },
  {
    id: 'animation-generator',
    name: '2D-Animation Generator',
    category: 'AI & GenAI',
    tagline: 'Prompt-Driven Generative 2D Animation Engine',
    desc: 'End-to-end generative AI engine translating descriptive natural language prompts into parametric keyframe animations, mathematical SVG paths, and downloadable video renders.',
    tech: ['Python', 'FastAPI', 'LangChain', 'Ollama', 'React', 'TailwindCSS'],
    link: 'https://drive.google.com/file/d/1Am1_m9QsFZdU-jp2KCimgXAc44anNNpC/view?usp=sharing',
    code: 'https://github.com/ironor25/Prompt-To-Animation.git',
    icon: '/animation.png',
    metrics: 'Local LLM Inference via Ollama',
    featured: false,
    highlights: [
      'LangChain orchestration with local Ollama models',
      'FastAPI async render pipeline for vector sequences',
      'Dynamic keyframe interpolation & SVG exporter'
    ]
  }
];

const ProofOfWork = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Systems');

  const filteredProjects =
    selectedCategory === 'All Systems'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="proof-of-work" className="py-24 border-b border-[#2a2a2a]/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#faff69]"></span>
              <span className="caption-uppercase text-[#faff69]">ENGINEERING PORTFOLIO</span>
            </div>
            <h2 className="display-lg">Proof of Work</h2>
            <p className="body-md text-[#cccccc] max-w-xl mt-3">
              Production-grade systems, workforce telemetry, Transformer models from scratch, high-speed trading engines, and pixel-perfect interfaces.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 flex-wrap bg-[#121212] p-1.5 rounded-lg border border-[#2a2a2a]">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1a1a1a] text-[#ffffff] border border-[#2a2a2a] shadow-xs'
                    : 'text-[#888888] hover:text-[#cccccc] hover:bg-[#161616]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="surface-card-base p-6 sm:p-8 hover:border-[#faff69]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#faff69]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#121212] border border-[#2a2a2a] p-2 flex items-center justify-center shrink-0">
                      <img
                        src={project.icon}
                        alt={`${project.name} icon`}
                        className="w-full h-full object-contain rounded-md"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="title-lg tracking-tight group-hover:text-[#faff69] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs font-mono text-[#888888]">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <span className="badge-pill text-[11px] font-mono text-[#22c55e] border-[#22c55e]/30 bg-[#22c55e]/5">
                    ● ACTIVE
                  </span>
                </div>

                {/* Description */}
                <p className="body-md text-[#cccccc] text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Key Technical Highlights */}
                <div className="bg-[#121212] rounded-lg p-3.5 border border-[#2a2a2a] mb-5 space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#888888] font-semibold mb-1 flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-[#faff69]" />
                    Architecture Highlights
                  </div>
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#e6e6e6]">
                      <span className="text-[#faff69] font-mono mt-0.5">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#121212] text-[#888888] hover:text-[#ffffff] border border-[#2a2a2a] text-xs font-mono transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-[#2a2a2a] flex items-center justify-between gap-4">
                <div className="text-xs font-mono text-[#faff69] font-medium flex items-center gap-1">
                  <span>{project.metrics}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs h-8 px-3"
                    aria-label={`View ${project.name} Source Code`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs h-8 px-3.5"
                    aria-label={`Launch ${project.name} Demo`}
                  >
                    <span>Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofOfWork;
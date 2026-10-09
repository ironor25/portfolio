import { useState } from 'react';
import {
  Code2,
  Cpu,
  Database,
  Cloud,
  Layers,
  Sparkles,
  Terminal,
  Shield,
  Workflow
} from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Languages & Systems',
    icon: Code2,
    description: 'Core programming languages for systems programming, backend logic, and smart contracts.',
    skills: [
      { name: 'Python 3', level: 'Advanced', highlight: 'FastAPI, PyTorch & Automation' },
      { name: 'TypeScript', level: 'Advanced', highlight: 'Strict Typing & Generics' },
      { name: 'JavaScript (ESNext)', level: 'Advanced', highlight: 'Event Loop & V8 Internals' },
      { name: 'Rust', level: 'Proficient', highlight: 'Memory Safety & Concurrency' },
      { name: 'Solidity', level: 'Proficient', highlight: 'EVM & Gas Optimization' },
      { name: 'SQL', level: 'Advanced', highlight: 'ClickHouse, PostgreSQL & Indexing' }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI, NLP & Transformer Models',
    icon: Sparkles,
    description: 'Custom Transformer architectures, PyTorch pipelines, LLM orchestration, and vision agents.',
    skills: [
      { name: 'PyTorch', level: 'Advanced', highlight: 'Custom Training Loops & Models' },
      { name: 'Transformers & NLP', level: 'Advanced', highlight: 'Self-Attention, BPE & Embeddings' },
      { name: 'LangChain & Ollama', level: 'Advanced', highlight: 'RAG, Local Inference & Agents' },
      { name: 'GenAI Chatbots', level: 'Advanced', highlight: 'Multi-Agent Support & Automation' },
      { name: 'NumPy & Pandas', level: 'Advanced', highlight: 'Data Preprocessing & Batching' },
      { name: 'OpenAI Embeddings', level: 'Advanced', highlight: 'Semantic Search & Vectorization' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend, Desktop & Real-Time UI',
    icon: Layers,
    description: 'Modern web frameworks, cross-platform native desktop clients, and low-latency streaming.',
    skills: [
      { name: 'React 19 / Next.js', level: 'Advanced', highlight: 'Server Components & State' },
      { name: 'Electron (Desktop Apps)', level: 'Proficient', highlight: 'macOS, Linux & Windows Clients' },
      { name: 'WebSockets', level: 'Advanced', highlight: 'Real-Time Bi-Directional Feeds' },
      { name: 'HTML5 Canvas API', level: 'Proficient', highlight: '60fps Custom Render Engines' },
      { name: 'TailwindCSS', level: 'Advanced', highlight: 'Pixel-Perfect Figma Conversion' },
      { name: 'Redux Toolkit', level: 'Advanced', highlight: 'Predictable State Management' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend, APIs & Cloud Infra',
    icon: Database,
    description: 'Scalable microservices, 180k+ record datasets, CI/CD automation, and cloud deployments.',
    skills: [
      { name: 'FastAPI (Python)', level: 'Advanced', highlight: 'High-Concurrency Microservices' },
      { name: 'Node.js / Express', level: 'Advanced', highlight: 'RESTful APIs & Middleware' },
      { name: 'PostgreSQL / MongoDB', level: 'Advanced', highlight: '180,000+ Record Scalability' },
      { name: 'Docker / Turborepo', level: 'Advanced', highlight: 'Containerization & Monorepos' },
      { name: 'GitLab / GitHub APIs', level: 'Advanced', highlight: 'Code Analytics & Automated CI/CD' },
      { name: 'Ethers.js / Web3', level: 'Advanced', highlight: 'Smart Contract Verification & RPC' }
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 border-b border-[#2a2a2a]/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#faff69]"></span>
            <span className="caption-uppercase text-[#faff69]">TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="display-lg">Skills & Architecture Matrix</h2>
          <p className="body-md text-[#cccccc] mt-3">
            A comprehensive matrix of programming languages, Transformer models, distributed backends, desktop engineering, and cloud infra.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all border cursor-pointer ${
                  activeCategory === idx
                    ? 'bg-[#1a1a1a] text-[#faff69] border-[#faff69]'
                    : 'bg-[#121212] text-[#888888] border-[#2a2a2a] hover:text-[#cccccc] hover:bg-[#161616]'
                }`}
              >
                <Icon className={`w-4 h-4 ${activeCategory === idx ? 'text-[#faff69]' : 'text-[#888888]'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Grid */}
        <div className="surface-card-base p-6 sm:p-8">
          <div className="mb-6 pb-6 border-b border-[#2a2a2a]">
            <h3 className="title-md flex items-center gap-2 text-[#ffffff]">
              <span>{skillCategories[activeCategory].title}</span>
            </h3>
            <p className="body-sm text-[#888888] mt-1">
              {skillCategories[activeCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories[activeCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-lg bg-[#121212] border border-[#2a2a2a] hover:border-[#faff69]/50 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm text-[#ffffff] group-hover:text-[#faff69] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1a1a1a] text-[#888888] border border-[#2a2a2a]">
                    {skill.level}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#888888] flex items-center gap-1.5 mt-2 pt-2 border-t border-[#2a2a2a]/60">
                  <span className="text-[#faff69]">›</span>
                  <span>{skill.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
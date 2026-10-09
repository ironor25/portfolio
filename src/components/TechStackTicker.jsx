import {
  Code,
  Cpu,
  Layers,
  Server,
  Database,
  Cloud,
  Box,
  Terminal,
  ShieldCheck,
  Zap,
  Activity,
  Workflow
} from 'lucide-react';

const technologies = [
  { name: 'TypeScript', category: 'Language' },
  { name: 'React 19 / Next.js', category: 'Frontend' },
  { name: 'Node.js / Express', category: 'Runtime' },
  { name: 'Python / FastAPI', category: 'AI & Backend' },
  { name: 'Rust', category: 'Systems' },
  { name: 'Solidity', category: 'Smart Contracts' },
  { name: 'Docker / K8s', category: 'DevOps' },
  { name: 'PostgreSQL / ClickHouse', category: 'Data' },
  { name: 'Redis / WebSockets', category: 'Realtime' },
  { name: 'LangChain & Ollama', category: 'GenAI' },
  { name: 'AWS & GCP', category: 'Cloud' },
  { name: 'Ethers.js / Hardhat', category: 'Web3' }
];

const TechStackTicker = () => {
  return (
    <div className="w-full bg-[#0a0a0a] border-b border-[#2a2a2a] py-8 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#faff69]"></span>
            <span className="caption-uppercase text-[#888888]">
              CORE ENGINEERING STACK & ARCHITECTURAL TOOLING
            </span>
          </div>
          <span className="text-xs font-mono text-[#5a5a5a]">
            HIGH-THROUGHPUT · REAL-TIME · CLOUD NATIVE
          </span>
        </div>

        {/* Tech Stack Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-3 rounded-lg bg-[#121212] border border-[#2a2a2a] hover:border-[#faff69]/60 hover:bg-[#1a1a1a] transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-mono text-[#5a5a5a] group-hover:text-[#faff69] transition-colors">
                  {tech.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#2a2a2a] group-hover:bg-[#faff69] transition-colors"></span>
              </div>
              <span className="text-sm font-semibold text-[#e6e6e6] group-hover:text-[#ffffff] transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackTicker;

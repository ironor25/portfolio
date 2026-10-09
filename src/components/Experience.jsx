import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

const experienceData = [
  {
    icon: '/simpel.png',
    role: 'Software Development Engineer Intern',
    company: 'Simple Techlabs Pvt. Ltd.',
    location: 'Bangalore, India',
    timeperiod: 'Apr 2026 – Present',
    type: 'Current Role',
    achievements: [
      'Delivered two end-to-end client projects, taking ownership of diagnosing, debugging, and resolving backend and API issues across the development lifecycle.',
      'Developed core modules for Manager Agent, a Python (FastAPI) SaaS product analyzing employee productivity, risk, and workload; validated scalability with 180,000+ records.',
      'Integrated GitLab and GitHub APIs to analyze commit history and code quality, surfacing engineering performance insights for client managers.',
      'Deployed five Generative AI chatbots using Python to automate internal reporting and support workflows.',
      'Wrote Python automation scripts to identify recurring backend errors and streamline root-cause troubleshooting, reducing manual debugging effort.'
    ],
    tech: ['Python', 'FastAPI', 'Generative AI', 'GitLab & GitHub APIs', 'Automation Scripts', 'PostgreSQL', 'REST APIs']
  },
  {
    icon: '/paycasso.png',
    role: 'Fullstack Developer Intern',
    company: 'Paycasso',
    location: 'Remote',
    timeperiod: 'Aug 2025 – Oct 2025',
    type: 'Internship',
    achievements: [
      'Engineered responsive web modules and resilient fullstack application interfaces supporting cross-browser workflows.',
      'Implemented optimized RESTful backend services, data validation routines, and secure authentication pipelines.',
      'Collaborated in agile sprint cycles, delivering bug fixes and frontend performance upgrades ahead of schedule.'
    ],
    tech: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'TailwindCSS', 'REST APIs']
  },
  {
    icon: '/dapps.png',
    role: 'Software Developer Intern',
    company: 'Dapps.co',
    location: 'Remote',
    timeperiod: 'Jun 2025 – Aug 2025',
    type: 'Internship',
    achievements: [
      'Built and integrated decentralized application (dApp) frontend interfaces with Web3 provider wallet connections.',
      'Streamlined asynchronous state synchronization for blockchain smart contract reads and event listeners.',
      'Designed modular UI components with high fidelity, reducing page render times and improving user engagement.'
    ],
    tech: ['TypeScript', 'React.js', 'Web3.js', 'Ethers.js', 'Solidity', 'Git']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-b border-[#2a2a2a]/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#faff69]"></span>
            <span className="caption-uppercase text-[#faff69]">CAREER TRAJECTORY</span>
          </div>
          <h2 className="display-lg">Work Experience</h2>
          <p className="body-md text-[#cccccc] mt-3">
            Industry experience architecting SaaS backends, LLM workflows, cross-platform telemetry, and Web3 infrastructure.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {experienceData.map((item, idx) => (
            <div
              key={`${item.company}-${idx}`}
              className="surface-card-base p-6 sm:p-8 hover:border-[#faff69]/40 transition-all duration-300 relative group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                {/* Company & Role Header */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#121212] border border-[#2a2a2a] p-2 flex items-center justify-center shrink-0">
                    <img
                      src={item.icon}
                      alt={`${item.company} logo`}
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="title-lg tracking-tight group-hover:text-[#faff69] transition-colors">{item.role}</h3>
                      <span className={`badge-pill text-xs font-mono ${
                        item.type === 'Current Role'
                          ? 'text-[#22c55e] border-[#22c55e]/30 bg-[#22c55e]/10'
                          : 'text-[#faff69] border-[#faff69]/20 bg-[#faff69]/5'
                      }`}>
                        {item.type === 'Current Role' && <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse mr-1"></span>}
                        {item.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-mono text-[#888888] mt-1">
                      <span className="text-[#ffffff] font-medium">{item.company}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Time Badge */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#888888] bg-[#121212] px-3 py-1.5 rounded-lg border border-[#2a2a2a] self-start">
                  <Calendar className="w-3.5 h-3.5 text-[#faff69]" />
                  <span className="text-[#e6e6e6]">{item.timeperiod}</span>
                </div>
              </div>

              {/* Achievements list */}
              <div className="mt-6 pt-6 border-t border-[#2a2a2a] space-y-2.5">
                {item.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-sm text-[#cccccc]">
                    <span className="text-[#faff69] font-mono mt-0.5">›</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-[#121212] text-[#888888] border border-[#2a2a2a] text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

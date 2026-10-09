import {
  GitPullRequest,
  GitCommit,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Code2
} from 'lucide-react';

const ossContributions = [
  {
    org: 'OpenZeppelin',
    repo: 'openzeppelin-contracts',
    icon: '/openzippline.png',
    role: 'Core Contributor',
    time: '2026',
    status: 'MERGED',
    prTitle: 'fix: validate cosigner commitments against initial account state',
    prNumber: '#5291',
    description:
      'Identified and resolved state verification edge cases in account abstraction signature validation routines, ensuring multi-sig cosigner authorization is strictly checked against the pre-execution account state.',
    tech: ['Solidity', 'ERC-4337', 'Security Analysis', 'Foundry'],
    diff: '+48 -12 lines',
    link: 'https://github.com/OpenZeppelin'
  },
  {
    org: 'Starknet-foundry',
    repo: 'foundry-rs/starknet-foundry',
    icon: '/starknet.png',
    role: 'Contributor',
    time: '2026',
    status: 'MERGED',
    prTitle: 'Print full output on assert_output_contains failure',
    prNumber: '#1842',
    description:
      'Enhanced error diagnostics in Starknet test runner engine by formatting and streaming full stdout/stderr traces upon assertion failures, significantly improving debugging speed for Cairo contract developers.',
    tech: ['Rust', 'Cairo', 'CLI Tooling', 'Testing Harness'],
    diff: '+64 -18 lines',
    link: 'https://github.com/foundry-rs/starknet-foundry'
  },
  {
    org: 'ApeWorX',
    repo: 'ApeWorX/ape',
    icon: '/apeworx.jpg',
    role: 'Contributor',
    time: '2025',
    status: 'MERGED',
    prTitle: 'fix: duplicate internal_type issue in ABIType parser',
    prNumber: '#2105',
    description:
      'Patched recursive ABI parser collision handling duplicate struct definitions in complex multi-inheritance contracts, ensuring accurate type safety in Python-based smart contract deployments.',
    tech: ['Python', 'Ethereum ABI', 'AST Parsing', 'Pytest'],
    diff: '+32 -8 lines',
    link: 'https://github.com/ApeWorX/ape'
  }
];

const Opensource = () => {
  return (
    <section id="opensource" className="py-24 border-b border-[#2a2a2a]/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#faff69]"></span>
            <span className="caption-uppercase text-[#faff69]">COMMUNITY & PROTOCOL IMPACT</span>
          </div>
          <h2 className="display-lg">Open Source Contributions</h2>
          <p className="body-md text-[#cccccc] mt-3">
            Contributing fixes, diagnostic enhancements, and security validation routines to world-class developer tools and foundational web3 ecosystems.
          </p>
        </div>

        {/* OSS Contribution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ossContributions.map((item) => (
            <div
              key={item.org}
              className="surface-card-base p-6 hover:border-[#faff69]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Repo & Org */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#2a2a2a] p-1.5 flex items-center justify-center shrink-0">
                      <img
                        src={item.icon}
                        alt={`${item.org} logo`}
                        className="w-full h-full object-contain rounded"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="title-md tracking-tight group-hover:text-[#faff69] transition-colors">
                        {item.org}
                      </h3>
                      <p className="text-xs font-mono text-[#888888]">{item.time}</p>
                    </div>
                  </div>

                  <span className="badge-pill text-[11px] font-mono text-[#22c55e] border-[#22c55e]/30 bg-[#22c55e]/10">
                    <CheckCircle2 className="w-3 h-3 text-[#22c55e]" />
                    {item.status}
                  </span>
                </div>

                {/* PR Title & Badge */}
                <div className="bg-[#121212] rounded-lg p-3 border border-[#2a2a2a] mb-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#888888] mb-1.5">
                    <div className="flex items-center gap-1.5 text-[#faff69]">
                      <GitPullRequest className="w-3.5 h-3.5" />
                      <span>{item.prNumber}</span>
                    </div>
                    <span className="text-[#22c55e]">{item.diff}</span>
                  </div>
                  <p className="font-mono text-xs text-[#ffffff] font-medium leading-snug">
                    {item.prTitle}
                  </p>
                </div>

                {/* Description */}
                <p className="body-sm text-[#888888] mb-5 leading-relaxed">
                  {item.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#121212] text-[#888888] border border-[#2a2a2a] text-[11px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Link */}
              <div className="pt-4 border-t border-[#2a2a2a] flex items-center justify-between">
                <span className="text-xs font-mono text-[#5a5a5a]">
                  {item.repo}
                </span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs h-7 px-2.5 gap-1"
                >
                  <span>Repository</span>
                  <ExternalLink className="w-3 h-3 text-[#888888]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opensource;

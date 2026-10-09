import { useState } from 'react';
import {
  Play,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
  Code2
} from 'lucide-react';

const tabsData = [
  {
    id: 'sql',
    name: 'profile_query.sql',
    language: 'sql',
    code: `-- ClickHouse High-Throughput Analytics Query
SELECT 
    engineer_name,
    specialization,
    core_stack,
    execution_speed,
    availability
FROM deepak_yadav_profile
WHERE mindset = 'LEARN_FAST_FAIL_FAST'
LIMIT 1
FORMAT PrettyCompactMonoBlock;`,
    outputHeader: 'Query OK (0.002 sec) · 1,480,200 rows/s (100% CPU eff.)',
    outputLines: [
      '┌─ engineer ──────┬─ focus ──────────────┬─ status ────┐',
      '│ Deepak Yadav    │ Systems, AI & Web3   │ READY_TO_GO │',
      '└─────────────────┴──────────────────────┴─────────────┘'
    ]
  },
  
  {
    id: 'bench',
    name: 'benchmark.sql',
    language: 'sql',
    code: `-- Performance Benchmark Stats
SELECT 
    target_system,
    avg_latency_ms,
    throughput_rps,
    cache_hit_rate
FROM system_benchmarks
ORDER BY throughput_rps DESC;`,
    outputHeader: 'Query OK (0.003 sec) · 3 records in set',
    outputLines: [
      '┌─ target_system ──┬─ avg_latency ─┬─ throughput ───┐',
      '│ Cereberus WS     │ 0.84ms        │ 142,000 req/s  │',
      '│ TeamX Telemetry  │ 1.20ms        │ 89,500 req/s   │',
      '│ MiniGPT Model    │ 8.40ms        │ 12,400 tok/s   │',
      '└──────────────────┴───────────────┴────────────────┘'
    ]
  }
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(true);
  const [copied, setCopied] = useState(false);
  const [customTime, setCustomTime] = useState('0.002');

  const handleRunQuery = () => {
    setIsRunning(true);
    setTimeout(() => {
      setCustomTime((Math.random() * 0.003 + 0.001).toFixed(4));
      setIsRunning(false);
      setHasRun(true);
    }, 300);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(tabsData[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentTab = tabsData[activeTab];

  return (
    <section id="hero" className="pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[#2a2a2a]/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#faff69] animate-pulse"></span>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#e6e6e6]">
                FULLSTACK & SYSTEMS ENGINEER
              </span>
              <span className="text-xs text-[#888888]">·</span>
              <span className="text-xs text-[#22c55e] font-medium">OPEN TO WORK</span>
            </div>

            {/* Main Headline */}
            <h1 className="display-xl text-left mb-6">
              Architecting <span className="text-[#faff69]">High-Throughput</span> Systems, AI & Web3.
            </h1>

            {/* Profile Intro & Ethos */}
            <div className="flex items-start gap-4 mb-6">
              <img
                src="/my_img.jpg"
                alt="Deepak Yadav"
                className="w-14 h-14 rounded-xl object-cover border border-[#2a2a2a] shrink-0"
              />
              <div>
                <p className="text-lg font-semibold text-[#ffffff] tracking-tight">
                  Deepak Yadav
                </p>
                <p className="text-sm text-[#888888] font-mono">
                  Bangalore / Lucknow · CS & AI Engineer
                </p>
              </div>
            </div>

            <p className="body-md text-[#cccccc] max-w-2xl mb-8 leading-relaxed">
              Software Engineer specializing in high-concurrency distributed backends, LLM/Transformer models from scratch, real-time WebSocket engines, and cross-platform desktop telemetry.
              Driven by: <strong className="text-[#ffffff]">Learn Fast, Implement Fast, Fail Fast</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <a href="#proof-of-work" className="btn-primary">
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/ironor25"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Code2 className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1PdEDnMr1l8_MOVYtBoliBtkidJ3bgzAT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>Download CV</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#888888]" />
              </a>
            </div>

            {/* Stats Row */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#2a2a2a]">
              <div>
                <div className="stat-display">7+</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#888888] mt-1">
                  Production Systems
                </div>
              </div>
              <div>
                <div className="stat-display">3+</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#888888] mt-1">
                  Core OSS PRs
                </div>
              </div>
              <div>
                <div className="stat-display">3</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#888888] mt-1">
                  Internships
                </div>
              </div>
              <div>
                <div className="stat-display">&lt;10ms</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#888888] mt-1">
                  Stream Latency
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols) - Interactive Query Console */}
          <div className="lg:col-span-5">
            <div className="surface-card-base overflow-hidden shadow-2xl border border-[#2a2a2a]">
              {/* Terminal Window Header */}
              <div className="bg-[#121212] px-4 py-3 border-b border-[#2a2a2a] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]/80"></span>
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80"></span>
                  <span className="w-3 h-3 rounded-full bg-[#22c55e]/80"></span>
                  <span className="ml-2 text-xs font-mono font-medium text-[#888888]">
                    clickhouse-console v24.8
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-1.5 rounded text-[#888888] hover:text-[#ffffff] hover:bg-[#1a1a1a] transition-colors cursor-pointer"
                    title="Copy code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#22c55e]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={handleRunQuery}
                    disabled={isRunning}
                    className="btn-primary text-xs h-7 px-3 gap-1.5 cursor-pointer"
                  >
                    <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : 'fill-current'}`} />
                    <span>{isRunning ? 'Running...' : 'Run Query'}</span>
                  </button>
                </div>
              </div>

              {/* Editor Tabs with Clean Interactive Selection */}
              <div className="flex items-center bg-[#0e0e0e] border-b border-[#2a2a2a] px-2 overflow-x-auto scrollbar-none">
                {tabsData.map((tab, idx) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-3.5 py-2.5 text-xs font-mono font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                      activeTab === idx
                        ? 'border-[#faff69] text-[#faff69] bg-[#1a1a1a]'
                        : 'border-transparent text-[#888888] hover:text-[#ffffff] hover:bg-[#141414]'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Code Snippet Box */}
              <div className="p-4 bg-[#0a0a0a] overflow-x-auto text-xs font-mono leading-relaxed text-[#e6e6e6] min-h-[220px]">
                <pre className="font-mono">
                  <code>
                    {activeTab === 0 && (
                      <>
                        <span className="text-[#888888]">-- ClickHouse High-Throughput Analytics Query</span>{'\n'}
                        <span className="text-[#3b82f6]">SELECT</span>{'\n'}
                        {'    '}<span className="text-[#faff69]">engineer_name</span>,{'\n'}
                        {'    '}<span className="text-[#faff69]">specialization</span>,{'\n'}
                        {'    '}<span className="text-[#faff69]">core_stack</span>,{'\n'}
                        {'    '}<span className="text-[#faff69]">execution_speed</span>,{'\n'}
                        {'    '}<span className="text-[#faff69]">availability</span>{'\n'}
                        <span className="text-[#3b82f6]">FROM</span> <span className="text-[#22c55e]">deepak_yadav_profile</span>{'\n'}
                        <span className="text-[#3b82f6]">WHERE</span> mindset = <span className="text-[#e6eb52]">'LEARN_FAST_FAIL_FAST'</span>{'\n'}
                        <span className="text-[#3b82f6]">LIMIT</span> 1{'\n'}
                        <span className="text-[#3b82f6]">FORMAT</span> PrettyCompactMonoBlock;
                      </>
                    )}
                    {activeTab === 1 && (
                      <>
                        <span className="text-[#888888]">// Real-Time High Frequency Matching Engine</span>{'\n'}
                        <span className="text-[#3b82f6]">import</span> {'{ WebSocketServer }'} <span className="text-[#3b82f6]">from</span> <span className="text-[#e6eb52]">'ws'</span>;{'\n'}
                        <span className="text-[#3b82f6]">import</span> {'{ OrderBook }'} <span className="text-[#3b82f6]">from</span> <span className="text-[#e6eb52]">'./cereberus'</span>;{'\n\n'}
                        <span className="text-[#3b82f6]">export class</span> <span className="text-[#faff69]">OrderStream</span> {'{'}{'\n'}
                        {'  '}<span className="text-[#3b82f6]">private</span> engine = <span className="text-[#3b82f6]">new</span> <span className="text-[#22c55e]">OrderBook</span>();{'\n\n'}
                        {'  '}<span className="text-[#3b82f6]">async</span> <span className="text-[#22c55e]">processMatch</span>(order: <span className="text-[#faff69]">Order</span>): <span className="text-[#3b82f6]">Promise</span>&lt;<span className="text-[#faff69]">Execution</span>&gt; {'{'}{'\n'}
                        {'    '}<span className="text-[#3b82f6]">const</span> t0 = performance.now();{'\n'}
                        {'    '}<span className="text-[#3b82f6]">const</span> fill = <span className="text-[#3b82f6]">await</span> this.engine.execute(order);{'\n'}
                        {'    '}console.log(<span className="text-[#e6eb52]">{'`Latency: ${(performance.now() - t0).toFixed(2)}ms`'}</span>);{'\n'}
                        {'    '}<span className="text-[#3b82f6]">return</span> fill;{'\n'}
                        {'  }'}{'\n'}
                        {'}'}
                      </>
                    )}
                    {activeTab === 2 && (
                      <>
                        <span className="text-[#888888]">-- Performance Benchmark Stats</span>{'\n'}
                        <span className="text-[#3b82f6]">SELECT</span>{'\n'}
                        {'    '}<span className="text-[#faff69]">target_system</span>,{'\n'}
                        {'    '}<span className="text-[#faff69]">avg_latency_ms</span>,{'\n'}
                        {'    '}<span className="text-[#faff69]">throughput_rps</span>,{'\n'}
                        {'    '}<span className="text-[#faff69]">cache_hit_rate</span>{'\n'}
                        <span className="text-[#3b82f6]">FROM</span> <span className="text-[#22c55e]">system_benchmarks</span>{'\n'}
                        <span className="text-[#3b82f6]">ORDER BY</span> throughput_rps <span className="text-[#3b82f6]">DESC</span>;
                      </>
                    )}
                  </code>
                </pre>
              </div>

              {/* Dynamic Execution Output Panel for active tab */}
              {hasRun && (
                <div className="border-t border-[#2a2a2a] bg-[#121212] p-3 text-xs font-mono">
                  <div className="flex items-center justify-between text-[#888888] pb-2 border-b border-[#2a2a2a]/60">
                    <div className="flex items-center gap-1.5 text-[#22c55e]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
                      <span>{currentTab.outputHeader}</span>
                    </div>
                    <span className="text-[11px] text-[#faff69]">
                      {activeTab === 0 ? `${customTime}s` : 'REALTIME'}
                    </span>
                  </div>

                  <div className="pt-2 space-y-1">
                    {currentTab.outputLines.map((line, lIdx) => (
                      <div
                        key={lIdx}
                        className={
                          line.startsWith('┌') || line.startsWith('└') || line.startsWith('[')
                            ? 'text-[#888888]'
                            : 'text-[#e6e6e6]'
                        }
                      >
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

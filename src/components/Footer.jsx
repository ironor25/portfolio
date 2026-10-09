import { ArrowUp, Github, Twitter, Linkedin, Terminal, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] text-[#888888] pt-16 pb-12 border-t border-[#2a2a2a]/40">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Status */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                <span className="w-2 h-2 bg-[#faff69] rounded-xs shadow-[0_0_6px_#faff69]"></span>
              </div>
              <span className="font-bold text-sm tracking-tight text-[#ffffff]">
                DEEPAK YADAV
              </span>
            </div>
            <p className="body-sm text-[#888888] text-xs leading-relaxed">
              Fullstack & Systems Engineer specializing in real-time architectures, AI systems, and Web3 infrastructure.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#121212] border border-[#2a2a2a] text-[11px] font-mono text-[#22c55e]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></span>
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#ffffff] mb-4">
              NAVIGATION
            </div>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#hero" className="hover:text-[#faff69] transition-colors">
                  › Overview
                </a>
              </li>
              <li>
                <a href="#proof-of-work" className="hover:text-[#faff69] transition-colors">
                  › Proof of Work
                </a>
              </li>
              <li>
                <a href="#opensource" className="hover:text-[#faff69] transition-colors">
                  › Open Source
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#faff69] transition-colors">
                  › Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#ffffff] mb-4">
              RESOURCES
            </div>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href="https://drive.google.com/file/d/1PdEDnMr1l8_MOVYtBoliBtkidJ3bgzAT/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#faff69] transition-colors"
                >
                  › Resume / Curriculum Vitae
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ironor25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#faff69] transition-colors"
                >
                  › GitHub Repositories
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#faff69] transition-colors">
                  › Architecture Matrix
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#faff69] transition-colors">
                  › Academic Foundation
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Network */}
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#ffffff] mb-4">
              CONNECT
            </div>
            <div className="flex items-center gap-2 mb-4">
              <a
                href="https://github.com/ironor25"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-[#ffffff] hover:border-[#faff69] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/ironor25"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-[#ffffff] hover:border-[#faff69] transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-yadav-781088260/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-[#ffffff] hover:border-[#faff69] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] font-mono text-[#5a5a5a]">
              Built with ClickHouse Design Philosophy: High Voltage, Zero Fluff.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-[#5a5a5a]">
            © {new Date().getFullYear()} Deepak Yadav. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#888888] hover:text-[#faff69] transition-colors cursor-pointer"
          >
            <span>BACK_TO_TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

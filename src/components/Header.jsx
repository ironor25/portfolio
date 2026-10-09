import { useState, useEffect } from 'react';
import {
  House,
  SquareChevronRight,
  GitPullRequest,
  Briefcase,
  Layers,
  GraduationCap,
  Mail,
  Github,
  Twitter,
  Linkedin,
  FileText,
  Menu,
  X,
  Terminal
} from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#hero', icon: House },
    { label: 'Projects', href: '#proof-of-work', icon: SquareChevronRight },
    { label: 'Open Source', href: '#opensource', icon: GitPullRequest },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Skills', href: '#skills', icon: Layers },
    { label: 'Education', href: '#education', icon: GraduationCap },
    { label: 'Contact', href: '#contact', icon: Mail }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]'
          : 'bg-[#0a0a0a] border-b border-[#2a2a2a]/40'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group text-decoration-none"
          aria-label="Deepak Yadav Home"
        >
          <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] group-hover:border-[#faff69] flex items-center justify-center transition-colors">
            <span className="w-2.5 h-2.5 bg-[#faff69] rounded-xs shadow-[0_0_8px_#faff69]"></span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm tracking-tight text-[#ffffff]">
                DEEPAK YADAV
              </span>
              <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#1a1a1a] text-[#faff69] border border-[#2a2a2a]">
                DEV
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#888888] hover:text-[#ffffff] transition-colors py-1 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#faff69] transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right CTA cluster */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Social icons */}
          <div className="flex items-center gap-1 border-r border-[#2a2a2a] pr-3 mr-1">
            <a
              href="https://github.com/ironor25"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-md flex items-center justify-center text-[#888888] hover:text-[#ffffff] hover:bg-[#1a1a1a] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/ironor25"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-md flex items-center justify-center text-[#888888] hover:text-[#ffffff] hover:bg-[#1a1a1a] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/deepak-yadav-781088260/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-md flex items-center justify-center text-[#888888] hover:text-[#ffffff] hover:bg-[#1a1a1a] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Resume link */}
          <a
            href="https://drive.google.com/file/d/1PdEDnMr1l8_MOVYtBoliBtkidJ3bgzAT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs h-9 px-3.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Signature Yellow CTA button */}
          <a href="#contact" className="btn-primary text-xs h-9 px-4">
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md bg-[#1a1a1a] border border-[#2a2a2a] text-[#ffffff] hover:border-[#faff69] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-b border-[#2a2a2a] px-4 py-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#121212] text-[#e6e6e6] hover:bg-[#1a1a1a] hover:text-[#faff69] border border-transparent hover:border-[#2a2a2a] transition-colors text-sm font-medium"
                >
                  <Icon className="w-4 h-4 text-[#faff69]" />
                  <span>{item.label}</span>
                </a>
              );
            })}

            <div className="pt-4 border-t border-[#2a2a2a] flex flex-col gap-2">
              <a
                href="https://drive.google.com/file/d/1PdEDnMr1l8_MOVYtBoliBtkidJ3bgzAT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full justify-center"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 pt-3 text-[#888888]">
              <a
                href="https://github.com/ironor25"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-[#ffffff]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/ironor25"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-[#ffffff]"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-yadav-781088260/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-[#ffffff]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

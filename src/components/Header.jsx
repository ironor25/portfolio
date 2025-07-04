import {
  House,
  SquareChevronRight,
  CircleUser,
  Github,
  Twitter,
  Linkedin,
  Sun,
  Moon,
  File
} from 'lucide-react';

const iconLinkClass =
  'group relative px-2 sm:hover:px-6 sm:pr-3 sm:pl-3 py-2 sm:py-0 transition-all duration-300 cursor-pointer';
const borderRightClass = 'border-r-2';

const Tooltip = ({ label }) => (
  <span
    className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-xs text-white bg-black dark:bg-white dark:text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10"
  >
    {label}
  </span>
);

const Header = (props) => {
  const { isDark, setIsDark } = props;

  return (
    <div className="p-1 sm:p-3 flex justify-center z-20 text-black dark:text-white transition-colors duration-300">
      <nav className="max-w-2xl w-full rounded-3xl py-1 sm:py-3 px-1 sm:px-4 border-2 border-black dark:border-white fixed backdrop-blur-lg flex whitespace-nowrap space-x-1 sm:space-x-6 justify-center scrollbar-none">
        <div className="flex items-center space-x-1 sm:space-x-4 w-auto min-w-0">
          {/* Navigation Links */}
          <a href="#hero" className={iconLinkClass} aria-label="Home">
            <House />
            <Tooltip label="Home" />
          </a>
          <a href="#proof-of-work" className={iconLinkClass} aria-label="Proof of Work">
            <SquareChevronRight />
            <Tooltip label="Projects" />
          </a>
          <a href="#skills" className={`${iconLinkClass} ${borderRightClass}`} aria-label="Skills">
            <CircleUser />
            <Tooltip label="Skills" />
          </a>
          <a
            href="https://drive.google.com/file/d/1PdEDnMr1l8_MOVYtBoliBtkidJ3bgzAT/view?usp=sharing"
            target="_blank"
            className={iconLinkClass}
            aria-label="Resume"
          >
            <File />
            <Tooltip label="Resume" />
          </a>

          {/* Social Icons */}
          <a href="https://github.com/ironor25" target="_blank" className={iconLinkClass} aria-label="GitHub">
            <Github />
            <Tooltip label="GitHub" />
          </a>
          <a href="https://x.com/ironor25" target="_blank" className={iconLinkClass} aria-label="Twitter">
            <Twitter />
            <Tooltip label="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-yadav-781088260/"
            target="_blank"
            className={`${iconLinkClass} ${borderRightClass}`}
            aria-label="LinkedIn"
          >
            <Linkedin />
            <Tooltip label="LinkedIn" />
          </a>

          {/* Dark Mode Toggle */}
          <button className={`${iconLinkClass}`} aria-label="Toggle Theme">
            {isDark ? (
              <>
                <Sun onClick={() => setIsDark('')} />
                <Tooltip label="Light Mode" />
              </>
            ) : (
              <>
                <Moon onClick={() => setIsDark('dark')} />
                <Tooltip label="Dark Mode" />
              </>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;

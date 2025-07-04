const skills = [
  "Javascript",
  "Typescript",
  "Python",
  "Solidity",
  "Rust",
  "Next.js",
  "React.js",
  "Express",
  "Node.js",
  "MySQL",
  "Postgres",
  "MongoDB",
  "FastAPI",
  "LangChain",
  "Ethers.js",
  "Hardhat"
];

const Skills = (props) => {
   const { isDark } = props;
  return (
    <section className={`py-12 dark:text-white px-2 sm:px-0 dark:bg-black flex-col${isDark == 'dark' ? ' dark' : ''} `}  id="skills">
      <div className="max-w-3xl w-full mx-auto flex flex-col">
      <h2 className="text-2xl font-bold text-center mb-6 ">Skills</h2>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {skills.map((skill, i) => (
          <span key={i} className="px-3 py-2 sm:px-4 rounded-sm bg-black text-white dark:text-black dark:bg-white cursor-pointer font-medium text-xs sm:text-sm">
            {skill}
          </span>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Skills;
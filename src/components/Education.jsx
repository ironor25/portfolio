import SpotlightCard from "./SpotLightCard";

const Education = (props) => {
  const {isDark} = props
  return (
    <section className={`py-12 px-2 sm:px-0 dark:bg-black dark:text-white${isDark == 'dark' ? ' dark' : ''}`}  id="education">
      <h2 className="text-2xl font-bold text-center mb-6">Education</h2>
      <div className="flex justify-center cursor-pointer rounded-2xl p-2">
        <SpotlightCard className="w-full max-w-2xl flex flex-col sm:flex-row dark:bg-black bg-white rounded-4xl ">
          <div className="flex flex-col sm:flex-row justify-between w-full">
            <div className="flex justify-center sm:justify-start">
              <img src="/lu_logo.png" className="h-16 sm:h-20 mr-0 sm:mr-4 rounded-4xl" alt="University Logo" />
            </div>
            <div className="mt-4 sm:mt-4 sm:mr-10 flex-1">
              <p className="text-base sm:text-lg">Bachelor of Technology in CS (specialized in AI)</p>
              <p className="dark:text-zinc-400 text-sm sm:text-base">University of Lucknow, 2022 - 2026</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-10 text-center sm:text-right">
            <p className="text-sm sm:text-base">Expected July 2026</p>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default Education;
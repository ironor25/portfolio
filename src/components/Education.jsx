import SpotlightCard from "./SpotLightCard";

const Education = (props) => {
  const {isDark} = props
  return (
    <section className={`py-40 px-2 sm:px-0 dark:bg-black dark:text-white${isDark == 'dark' ? ' dark' : ''}`}  id="education">
      <h2 className="text-4xl font-bold text-center mb-6 font-bricolage">Education</h2>
      <div className="flex justify-center cursor-pointer p-2">
        <SpotlightCard className="w-full max-w-3xl flex flex-col sm:flex-row dark:bg-transparent border border-b-2 border-r-2 transition-shadow hover:shadow-2xl dark:border-white dark:border bg-white rounded-2xl "
        spotlightColor={isDark? "rgba(123, 232, 217, 0.25)":"rgba(252, 142, 8, 0.25)"}>
          <div className="flex flex-col sm:flex-row justify-between w-full">
            <div className="flex justify-center sm:justify-start">
              <img src="/lu_logo.png" className="h-16 sm:h-20 mr-0 sm:mr-4 rounded-4xl" alt="University Logo" />
            </div>
            <div className="mt-4 sm:mt-4 sm:mr-10 flex-1">
              <p className="text-base sm:text-lg">Bachelor of Technology in CS (specialized in AI)</p>
              <p className="dark:text-zinc-400 text-sm sm:text-base">University of Lucknow, 2022 - 2026</p>
            </div>
          </div>
          <div className="mt-5  sm:ml-10 text-center sm:text-right">
            <p className="text-sm sm:text-base">Expected July 2026</p>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default Education;
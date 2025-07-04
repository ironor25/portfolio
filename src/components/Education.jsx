import SpotlightCard from "./SpotLightCard";

const Education = (props) => {
  const {isDark} = props
  return (
    <section className={`py-12 dark:bg-black dark:text-white${isDark == 'dark' ? ' dark' : ''}`}  id="education">
      <h2 className="text-2xl font-bold text-center mb-6">Education</h2>
      <div className="flex justify-evenly cursor-pointer rounded-2xl p-2">
        <SpotlightCard className="w-4xl flex dark:bg-black bg-white rounded-4xl ">
      <div className="flex justify-between ">
        <div>
          <img src="/lu_logo.png" className="h-20 mr-4 rounded-4xl"></img>
        </div>
        <div className="mt-4 mr-10">
        <p className="text-lg ">Bachelor of Technology in CS (specialized in AI)</p>
        <p className="dark:text-zinc-400">University of Lucknow, 2022 - 2026</p>
        </div>
      </div>
      <div className="mt-4 ml-40">
        <p>Expected July 2026</p>
      </div>
      </SpotlightCard>
      </div>
      
    </section>
  );
};

export default Education;
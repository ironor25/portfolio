import SpotlightCard from "./SpotLightCard";

const Experience = (props) => {
  const { isDark } = props;

  const experienceData = [
    {
      icon: "/dapps.png",
      role: "Software Developer Intern",
      name: "Dapps.co",
      timeperiod: "Jun 2025 - Aug 2025",
    },
    {
      icon: "/paycasso.png",
      role: "Fullstack Developer Intern",
      name: "Paycasso",
      timeperiod: "Aug 2025 - Oct 2025",
    }
  ];

  const spotlightColor = isDark ? "rgba(123, 232, 217, 0.25)" : "rgba(252, 142, 8, 0.25)";

  return (
    <section className={`py-40 px-2 sm:px-0 dark:bg-black dark:text-white${isDark === "dark" ? " dark" : ""}`} id="experience">
      <h2 className="text-4xl font-bold text-center mb-6 font-bricolage">Experience</h2>

      <div className="space-y-4">
        {experienceData.map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex justify-center cursor-pointer p-2">
            <SpotlightCard
              className="w-full max-w-3xl flex flex-col sm:flex-row dark:bg-transparent transition-shadow hover:shadow-2xl bg-white rounded-2xl"
              spotlightColor={spotlightColor}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <div className="flex items-center">
                  <img
                    src={item.icon}
                    className="h-15 w-30 mr-4 rounded-xl"
                    alt={`${item.name} Logo`}
                  />
                  <div>
                    <p className="text-base sm:text-lg font-medium">{item.role}</p>
                    <p className="dark:text-zinc-400 text-sm sm:text-base">{item.name}</p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:mr-10 text-center sm:text-right">
                  <p className="text-sm sm:text-base">{item.timeperiod}</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

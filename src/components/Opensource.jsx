import SpotlightCard from "./SpotLightCard";

const Opensource = (props) => {
  const { isDark } = props;

  const openSourceData = [
    {
      icon: "/openzippline.png",
      role: "Contributor",
      name: "OpenZeppelin",
      timeperiod: "2026",
      description: "fix: validate cosigner commitments against initial account state ",
    },
    {
      icon: "/starknet.png",
      role: "Contributer",
      name: "Starknet-foundry",
      timeperiod: "2026",
      description: "Print full output on assert_output_contains failure",
    },
    {
      icon: "/apeworx.jpg",
      role: "Contributor",
      name: "ApeWorX",
      timeperiod: "2025",
      description: "fix: duplicate internal_type issue in ABIType ",
    },
  ];

  const spotlightColor = isDark ? "rgba(123, 232, 217, 0.25)" : "rgba(252, 142, 8, 0.25)";

  return (
    <section className={`py-40 px-2 sm:px-0 dark:bg-black dark:text-white${isDark === "dark" ? " dark" : ""}`} id="opensource">
      <h2 className="text-4xl font-bold text-center mb-6 font-bricolage">Open Source</h2>
      <div className="space-y-4">
        {openSourceData.map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex justify-center cursor-pointer p-2">
            <SpotlightCard
              className="w-full max-w-3xl flex flex-col sm:flex-row dark:bg-transparent transition-shadow hover:shadow-2xl bg-white rounded-2xl"
              spotlightColor={spotlightColor}
            >
              <div className="flex flex-col sm:flex-row justify-between w-full">
                <div className="flex items-center">
                  <img
                    src={item.icon}
                    className="h-12 w-12 sm:h-15 sm:w-15 mr-4 rounded-xl"
                    alt={`${item.name} logo`}
                  />
                  <div>
                    <p className="text-base sm:text-lg font-medium">{item.role}</p>
                    <p className="dark:text-zinc-400 text-sm sm:text-base">{item.name}</p>
                    <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400">{item.description}</p>
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

export default Opensource;

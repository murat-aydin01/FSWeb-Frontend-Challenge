const skills = [
  {
    name: "Java Script",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "React.Js",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Node.Js",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function Skills() {
  return (
    <section className="mt-[50px] md:mt-[165px] w-full flex flex-col items-center">
      <h2 className="text-4xl md:text-6xl font-semibold text-koyu dark:text-koyu-dark">Skills</h2>
      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-[45px] gap-x-8 gap-y-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col justify-between w-full md:w-1/3 px-4">
            <h3 className="text-2xl md:text-4xl text-acik-mor dark:text-acik-mor-dark font-medium">
              {skill.name}
            </h3>
            <p className="mt-4 md:mt-[37px] text-lg md:text-xl text-acik dark:text-acik-dark">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

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
    <section className="mt-[165px] w-full flex flex-col">
      <h2 className="text-6xl font-semibold text-koyu dark:text-koyu-dark">Skills</h2>
      <div className="w-full flex justify-between items-center mt-[45px] gap-x-[160px]">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col justify-between">
            <h3 className="text-4xl text-acik-mor dark:text-acik-mor-dark font-medium">
              {skill.name}
            </h3>
            <p className="mt-[37px] text-xl text-acik dark:text-acik-dark">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

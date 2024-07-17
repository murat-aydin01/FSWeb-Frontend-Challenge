import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: project1,
    title: "Profile",
    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    technologies: ["React", "Redux", "Axios"],
    links: [
      { text: "Github", href: "" },
      { text: "View Site", href: "" }
    ]
  },
  {
    image: project2,
    title: "Profile",
    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    technologies: ["React", "Redux", "Axios"],
    links: [
      { text: "Github", href: "" },
      { text: "View Site", href: "" }
    ]
  },
  {
    image: project3,
    title: "Profile",
    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    technologies: ["React", "Redux", "Axios"],
    links: [
      { text: "Github", href: "" },
      { text: "View Site", href: "" }
    ]
  }
];

function Projects() {
  return (
    <section className="w-full  mt-[56px] flex flex-col">
      <div className="h-[1px] bg-cizgi mb-8 "></div>
      <h2 className="text-6xl font-semibold text-koyu dark:text-koyu-dark">Projects</h2>
      <div className="w-full flex justify-between items-center mt-[45px] gap-x-[160px]">
      {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            links={project.links}
          />
        ))}
      </div>
      </section>
  )
}

export default Projects
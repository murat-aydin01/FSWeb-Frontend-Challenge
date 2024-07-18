import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "/grid.png",
    title: "Grid Game",
    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    technologies: ["React", "Redux", "Axios"],
    links: [
      { text: "Github", href: "" },
      { text: "View Site", href: "" }
    ]
  },
  {
    image: "/filmler.png",
    title: "Movies",
    description: "A movie application that fetches movies from a database, allows you to add favorites, delete watched movies, and includes an IMDB plugin. Created with Redux, React, axios, and many other libraries.",
    technologies: ["React", "Redux", "Axios"],
    links: [
      { text: "Github", href: "" },
      { text: "View Site", href: "" }
    ]
  },
  {
    image: "/pizza.png",
    title: "Pizza",
    description: "The only site everyone who is hungry should visit; eating has never been this quick and easy! Designed using React and styled-components.",
    technologies: ["React", "Redux", "Axios"],
    links: [
      { text: "Github", href: "" },
      { text: "View Site", href: "" }
    ]
  }
];

function Projects() {
  return (
    <section className="w-full mt-[56px] flex flex-col">
      <div className="h-[1px] bg-cizgi mb-8"></div>
      <h2 className="text-4xl md:text-6xl font-semibold text-koyu dark:text-koyu-dark">Projects</h2>
      <div className="w-full flex flex-wrap justify-center md:justify-between items-stretch mt-[45px] gap-8">
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
  );
}

export default Projects
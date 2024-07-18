import ProjectCard from "./ProjectCard";
import { useLanguage } from '../contexts/LanguageContext';

function Projects() {
  const { texts } = useLanguage();
  const { projects } = texts;

  return (
    <section className="w-full mt-[56px] flex flex-col">
      <div className="h-[1px] bg-cizgi mb-8"></div>
      <h2 className="text-4xl md:text-6xl font-semibold text-koyu dark:text-koyu-dark">{projects.title}</h2>
      <div className="w-full flex flex-wrap justify-center md:justify-between items-stretch mt-[45px] gap-8">
        {projects.items.map((project, index) => (
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

export default Projects;

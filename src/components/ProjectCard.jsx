const ProjectCard = ({ image, title, description, technologies, links }) => {
  return (
    <div className="flex flex-col justify-between w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
      <img src={image} alt={title} className="w-full h-auto" />
      <h3 className="text-2xl md:text-4xl text-acik-mor font-medium my-4 md:my-6">{title}</h3>
      <p className="text-lg md:text-xl text-acik">{description}</p>
      <nav className="w-full flex flex-wrap justify-start items-center my-4 md:my-6 gap-x-2 gap-y-2">
        {technologies.map((tech, index) => (
          <a
            key={index}
            href="#"
            className="h-full flex items-center px-4 md:px-6 py-2 border-2 border-koyu-mor dark:border-koyu-mor-dark text-koyu-mor dark:text-koyu-mor-dark font-medium text-base md:text-lg rounded-md"
          >
            {tech}
          </a>
        ))}
      </nav>
      <div className="flex justify-between items-center flex-wrap gap-y-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-lg md:text-xl font-medium text-koyu-mor dark:text-koyu-mor-dark underline underline-offset-4"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard
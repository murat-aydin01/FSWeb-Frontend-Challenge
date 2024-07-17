  const ProjectCard = (props) => {
    const { image, title, description, technologies, links } = props
    return (
      <div className="flex flex-col justify-between ">
        <img src={image} alt={title} />
        <h3 className="text-4xl text-acik-mor font-medium my-6 ">{title}</h3>
        <p className="text-xl text-acik ">{description}</p>
        <nav className="w-full h-[36px] flex justify-start items-center my-6 gap-x-2">
          {technologies.map((tech, index) => (
            <a
              key={index}
              href=""
              className="h-full flex items-center px-6 py-2 border-2 border-koyu-mor dark:border-koyu-mor-dark text-koyu-mor dark:text-koyu-mor-dark font-medium text-lg rounded-md"
            >
              {tech}
            </a>
          ))}
        </nav>
        <div className="flex justify-between items-center">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-xl font-medium text-koyu-mor dark:text-koyu-mor-dark underline underline-offset-4"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    );
  };

export default ProjectCard
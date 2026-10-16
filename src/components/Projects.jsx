import "./Projects.css";

function Projects() {
  const projects = [
    {
      name: "Evera - E-commerce Website",
      description: "",
      technologies: ["React", "JavaScript", "Bootstrap", "CSS"],
      image: "",
      liveLink: "https://effortless-malabi-91c4f3.netlify.app",
      codeLink: "",
    },
    {
      name: "Project eventa",
      description: "",
      technologies: [],
      image: "",
      liveLink: "https://eventia-task-maria.netlify.app/",
      codeLink: "",
    },
    {
      name: "Project eduleb",
      description: "",
      technologies: [],
      image: "",
      liveLink: "http://edulebbymaria.netlify.app",
      codeLink: "",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="mb-5">
          <p className="section-subtitle">MY WORK</p>

          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>

          <p className="section-description mt-3">
            A selection of my work and learning projects.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={project.name}>
              <div className="project-card h-100">
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.name} />
                  ) : (
                    <div className="project-placeholder">
                      <i className="bi bi-code-square"></i>
                      <span>Project 0{index + 1}</span>
                    </div>
                  )}
                </div>

                <div className="project-content">
                  <p className="project-number">
                    PROJECT 0{index + 1}
                  </p>

                  <h4>{project.name}</h4>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {project.technologies.length > 0 && (
                    <div className="project-technologies">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  )}

                  <div className="project-links">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                        <i className="bi bi-arrow-up-right ms-2"></i>
                      </a>
                    )}

                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source Code
                        <i className="bi bi-github ms-2"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
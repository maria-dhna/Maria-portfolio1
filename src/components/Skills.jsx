import "./Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Responsive Design",
    "Git",
    "GitHub",
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-subtitle">MY TOOLKIT</p>

          <h2 className="section-title">
            Technical <span className="highlight">Skills</span>
          </h2>

          <p className="section-description mt-3">
            Technologies and tools I use while developing websites.
          </p>
        </div>

        <div className="row g-3 justify-content-center">
          {skills.map((skill) => (
            <div className="col-6 col-md-4 col-lg-3" key={skill}>
              <div className="skill-card">
                <i className="bi bi-check2-circle"></i>
                <span>{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
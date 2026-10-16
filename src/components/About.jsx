import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-5">
            <p className="section-subtitle">ABOUT ME</p>

            <h2 className="section-title mb-4">
              A little bit <span className="highlight">about me</span>
            </h2>

            <p className="section-description">
              I'm studying Computer Engineering and continuing
              to develop my programming skills. I enjoy building
              websites and creating clear, user-friendly interfaces.
            </p>

            <p className="section-description">
              My goal is to gain practical experience, keep learning,
              and grow into a Full-Stack Developer.
            </p>

            <a href="#contact" className="primary-btn mt-2">
              Let's Connect
            </a>
          </div>

          <div className="col-12 col-lg-7">
            <div className="about-card">
              <div className="about-item">
                <i className="bi bi-laptop"></i>
                <div>
                  <h5>Web Development</h5>
                  <p>
                    Building responsive and user-friendly web interfaces.
                  </p>
                </div>
              </div>

              <div className="about-item">
                <i className="bi bi-book"></i>
                <div>
                  <h5>Continuous Learning</h5>
                  <p>
                    Learning new concepts and improving my technical skills.
                  </p>
                </div>
              </div>

              <div className="about-item">
                <i className="bi bi-people"></i>
                <div>
                  <h5>Teamwork</h5>
                  <p>
                    Learning to collaborate and contribute to shared projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-7">
            <p className="section-subtitle mb-3">
              WELCOME TO MY PORTFOLIO
            </p>

            <h1 className="home-title mb-3">
              Hi, I'm <span className="highlight">Maria</span>
            </h1>

            <h2 className="home-role mb-4">
              Front-End Developer
            </h2>

            <p className="section-description home-description mb-4">
              I'm passionate about web development and building
              responsive, user-friendly websites. I'm continuously
              learning and working toward becoming a Full-Stack Developer.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="primary-btn">
                View My Projects
                <i className="bi bi-arrow-up-right ms-2"></i>
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="home-socials d-flex gap-4 mt-5">
              <a href="https://github.com/maria_dhna" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/maria-dhna-b54111425?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="home-image-wrapper">
              <div className="home-image-frame">
                <img
                  src="/maria.jpg"
                  alt="Maria - Front-End Developer"
                  className="home-profile-image"
                />
              </div>

              <div className="home-image-label">
                <i className="bi bi-code-slash"></i>
                <span>Web Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
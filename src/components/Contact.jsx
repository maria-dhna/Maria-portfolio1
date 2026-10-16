import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-subtitle">GET IN TOUCH</p>

          <h2 className="section-title">
            Let's Work <span className="highlight">Together</span>
          </h2>

          <p className="section-description mt-3">
            Interested in working together or discussing a project?
            Feel free to get in touch.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="contact-card">
              <div className="contact-item">
                <i className="bi bi-envelope"></i>
                <div>
                  <h6>Email</h6>
                  <p>Your email address</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h6>Location</h6>
                  <p>Your location</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-code-slash"></i>
                <div>
                  <h6>Interested In</h6>
                  <p>Web Development and Full-Stack Development</p>
                </div>
              </div>

              <a
                href="mailto:"
                className="primary-btn w-100 text-center mt-3"
              >
                Send Me an Email
                <i className="bi bi-send ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
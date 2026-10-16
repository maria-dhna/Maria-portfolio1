import "./Footer.css";

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="row align-items-center gy-3">
          <div className="col-12 col-md-4 text-center text-md-start">
            <a href="#home" className="footer-brand">
              Maria<span>.</span>
            </a>
          </div>

          <div className="col-12 col-md-4">
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="col-12 col-md-4 text-center text-md-end">
            <p className="footer-copyright mb-0">
              © {new Date().getFullYear()} Maria. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
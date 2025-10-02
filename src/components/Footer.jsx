function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="footer position-relative light-background"
      style={{ paddingTop: "1rem", background: "#0f4c75", color: "#ccc" }}
    >
      <div className="container footer-container">
        {/* Location */}
        <div className="footer-col">
          <h4>Our Location</h4>
          <p>
            Ubuntu Center for AI Governance & Innovation <br />
            Kampala, Uganda <br />
            Plot 10, AI Innovation Hub
          </p>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>
            <strong>Phone:</strong>+256775827420 & +256750149448<br />
            <strong>Email:</strong>{" "}
            <a href="mailto:info@ubuntucentre.org">info@ubuntucentre.org</a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#trainings">Trainings</a></li>
          </ul>
        </div>
      </div>

      <div
        className="container text-center mt-4"
        style={{ fontSize: "14px", color: "#aaa" }}
      >
        <p>&copy; {year} Ubuntu Center for AI Governance & Innovation - All Rights Reserved.</p>
        <p>
          <a href="/terms" style={{ color: "#aaa", textDecoration: "underline" }}>
            Terms & Conditions Apply
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

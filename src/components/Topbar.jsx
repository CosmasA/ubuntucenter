import logo from "../assets/img/logo.png"; 

function Topbar() {
  return (
    <div
      id="topbar"
      className="container-fluid justify-content-between d-flex align-items-center position-relative"
    >
      {/* Brand */}
      <div className="brand">
        <a
          href="/ubuntucenter/"
          className="brand-link"
          aria-label="Ubuntu Centre for AI Africa homepage"
        >
          <img
            src={logo}
            className="brand-logo"
            alt="Ubuntu Centre for AI Africa logo"
            loading="lazy"
          />
          <span className="brand-name">Ubuntu Center for AI Governance & Innovation</span>
        </a>
      </div>

      {/* Contact Details */}
      <address className="top-contacts" aria-label="Contact details">
        <em className="contact-info">
          <span>📍 Kampala, Uganda</span>{"  "}
          <span>🕒 Mon–Fri 8:00–17:00</span>{" "}
          <a href="mailto:info@ubuntucenter4ai.org">📧 info@ubuntucenter4ai.org</a>{" "}
          <span>📞 +256775827420 | +256750149448</span>
        </em>
      </address>
    </div>
  );
}

export default Topbar;

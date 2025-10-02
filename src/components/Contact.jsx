import { useState } from "react";
import "../App.css"; // or create Contact.css for styles

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, success: "", error: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    // Simulate async submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setStatus({ loading: false, success: "Your message has been sent. Thank you!", error: "" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>We’re here to help — feel free to reach out with any questions or requests.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Left Column: Contact Info */}
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay="200">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>Masembe Road</p>
                  <p>Kampala, Uganda</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay="300">
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+256 775 827 420</p>
                  <p>+256 750 149 448</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay="400">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@ubuntuaiafrica.org</p>
                  <p>info@ubuntucenter4ai.com</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay="500">
                  <i className="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>Monday - Friday</p>
                  <p>8:00AM - 05:00PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="6"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12 text-center">
                  {status.loading && <div className="loading">Loading...</div>}
                  {status.error && <div className="error-message">{status.error}</div>}
                  {status.success && <div className="sent-message">{status.success}</div>}

                  <button type="submit" disabled={status.loading}>
                    {status.loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import pdfIcon from "../assets/img/pdf.png";
import aiLetter from "../assets/img/ai-letter.png";
import ethicalAI from "../assets/img/ethical.jpg";

const Resources = () => {
  return (
    <section id="resources" className="resources section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resources</h2>
        <p>
          Explore curated articles, tools, and tutorials to help you understand
          and apply artificial intelligence effectively.
        </p>
      </div>

      <div className="container">
        {/* Item 1 */}
        <div className="features-item">
          <div className="features-text">
            <h3>2025 AI Governance Report</h3>
            <p>
              An in-depth analysis of AI policies, regulations, and governance
              frameworks across African nations.
            </p>
            <a href="#" className="btn btn-get-started">
              Download PDF
            </a>
          </div>
          <div className="features-img">
            <img src={pdfIcon} alt="PDF Document" />
          </div>
        </div>

        {/* Item 2 */}
        <div className="features-item reverse">
          <div className="features-img">
            <img src={aiLetter} alt="AI Newsletter Illustration" />
          </div>
          <div className="features-text">
            <h3>AI Africa Weekly</h3>
            <p>
              Stay informed with the latest updates, insights, and events
              shaping AI across Africa. Subscribe to our weekly newsletter and
              never miss out.
            </p>
            <ul>
              <li>✔ Curated AI news and policy updates</li>
              <li>✔ Expert insights and analysis</li>
              <li>✔ Upcoming events and opportunities</li>
            </ul>
            <a href="#" className="btn btn-get-started">
              Subscribe Now
            </a>
          </div>
        </div>

        {/* Item 3 */}
        <div className="features-item">
          <div className="features-text">
            <h3>Blog: Ethical AI</h3>
            <p>
              Explore insightful articles on AI governance, fairness,
              transparency, and inclusive design — guiding the responsible use
              of artificial intelligence in Africa and beyond.
            </p>
            <a href="blog/ethical-ai.html" className="btn btn-get-started">
              Read Articles
            </a>
          </div>
          <div className="features-img">
            <img src={ethicalAI} alt="Ethical AI Blog" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;

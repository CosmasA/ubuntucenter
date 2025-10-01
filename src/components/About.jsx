import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBuilding, FaClipboardList, FaUsers, FaChartLine } from "react-icons/fa";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true,     // animate only once when scrolled into view
    });
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-text" data-aos="fade-up">
          <h2>Who We Are</h2>
          <p>
            <strong>Ubuntu Centre for AI Governance and Innovation</strong> is a
            pan-African think-and-do tank shaping Africa’s digital future by
            building accountable, human-centred AI ecosystems.
          </p>
          <p>
            We partner with governments, institutions, and communities to
            co-create policies, build talent, and design technologies that
            reflect African values and aspirations.
          </p>
        </div>

                {/* Right Side Feature Cards */}
        <div className="about-cards">
          <div className="about-card">
            <FaBuilding className="icon" />
            <h4>Policy & Governance</h4>
            <p>
              We collaborate with African governments and institutions to
              develop ethical, transparent AI policies and regulatory
              frameworks.
            </p>
          </div>

          <div className="about-card">
            <FaClipboardList className="icon" />
            <h4>Responsible Innovation</h4>
            <p>
              Our work ensures AI systems are inclusive, fair, and designed with
              accountability at their core.
            </p>
          </div>

          <div className="about-card">
            <FaUsers className="icon" />
            <h4>Capacity Building</h4>
            <p>
              We train and empower the next generation of African AI
              practitioners and leaders.
            </p>
          </div>

          <div className="about-card">
            <FaChartLine className="icon" />
            <h4>Impact & Growth</h4>
            <p>
              We measure and scale AI solutions that address African challenges
              while creating sustainable opportunities for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

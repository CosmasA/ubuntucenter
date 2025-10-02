import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBullseye, FaEye, FaFlag } from "react-icons/fa";
import aboutImg from "../assets/img/about_ai.png";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container">
        {/* Section Header */}
        <div 
          className="about-text" 
          data-aos="fade-up" 
          data-aos-delay="100" 
          data-aos-duration="1200"
        >
          <h2>Who We Are</h2>
          <p>
            <strong>Ubuntu Centre for AI Governance and Innovation (UC4AGI)</strong> 
            is dedicated to advancing responsible AI governance and innovation 
            across Africa. We shape ethical policies, build local capacity, 
            and deploy inclusive technologies that reflect African values.
          </p>
        </div>

        {/* Mission, Vision, Goal + Image Card */}
          <div className="about-cards">
            {/* Image Card */}
            <div className="about-card" data-aos="fade-up" data-aos-delay="100">
              <img 
                src={aboutImg} 
                alt="AI in Africa illustration" 
                className="about-card-img"
              />
            </div>
            <div className="about-card" data-aos="fade-up" data-aos-delay="200">
              <FaBullseye className="icon" />
              <h4>Mission</h4>
              <p>
                To advance responsible AI governance and innovation in Africa by 
                building local capacity, shaping ethical policies, and deploying 
                inclusive technologies that drive equity, resilience, and sustainable development.
              </p>
            </div>

            <div className="about-card" data-aos="fade-up" data-aos-delay="300">
              <FaEye className="icon" />
              <h4>Vision</h4>
              <p>
                A future where Africa drives innovative and trustworthy AI that upholds 
                human rights, empowers people, and delivers transformative solutions 
                to global challenges.
              </p>
            </div>

            <div className="about-card" data-aos="fade-up" data-aos-delay="400">
              <FaFlag className="icon" />
              <h4>Goal</h4>
              <p>
                To catalyze and nurture African local AI talent, foster indigenous 
                innovation ecosystems, and promote AI applications that address 
                societal needs while upholding ubuntu human values.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}

export default About;

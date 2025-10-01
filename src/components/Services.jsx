import React from "react";
import servicesImg from "../assets/img/ai1.png"; 

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
              <h2>Our Work</h2>
              <p>We are here to assist with any inquiries and provide reliable support.</p>
            </div>
        <div className="row align-items-center">
          
          {/* Left side - Image */}
          <div className="col-lg-6 services-img">
            <img src={servicesImg} alt="Our Services" />
          </div>

          {/* Right side - Service Cards */}
          <div className="col-lg-6 services-content">

            <div className="service-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="bi bi-card-checklist"></i></div>
              <div>
                <h3>Capacity Building & Innovation</h3>
                <p>Governance Bootcamps <br/> Fellowships <br/> AI in Schools</p>
              </div>
            </div>

            <div className="service-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bi bi-bar-chart"></i></div>
              <div>
                <h3>AI & Robotics Lab</h3>
                <p>Startup incubation <br/> Robotics hackathons <br/> Data governance platforms</p>
              </div>
            </div>

            <div className="service-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="bi bi-binoculars"></i></div>
              <div>
                <h3>AI Research & Insights</h3>
                <p>AI research initiatives <br/> Data-driven policy <br/> Innovative AI applications</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;

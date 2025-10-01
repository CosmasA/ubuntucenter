import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import statsBg from "../assets/img/stats-bg.jpg"; 

const statsData = [
  { end: 232, label: "Clients" },
  { end: 521, label: "Projects" },
  { end: 1453, label: "Hours Of Support" },
  { end: 32, label: "Workers" },
];

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3,    
  });

  return (
    <section id="stats" className="stats section dark-background">
      <img src={statsBg} alt="stats background" className="stats-bg" />

      <div className="container position-relative" ref={ref}>
        <div className="row gy-4">
          {statsData.map((stat, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="stats-item text-center w-100 h-100">
                {inView ? (
                  <CountUp start={0} end={stat.end} duration={2} />
                ) : (
                  <span>0</span>
                )}
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

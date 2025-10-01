import React, { useState } from 'react';
import videoBg from '../assets/videos/hero.mp4';
import videoBG from '../assets/videos/tech.mp4';

function Hero() {
  const videos = [videoBg, videoBG]; // videos in sequence
  const [current, setCurrent] = useState(0);

  const handleEnded = () => {
    // move to next video or loop back to first
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  return (
    <section id="hero" className="hero section">
      {/* Background video */}
      <video
        key={videos[current]} // ensures video reloads when source changes
        autoPlay
        muted
        playsInline
        className="hero-video"
        onEnded={handleEnded}
      >
        <source src={videos[current]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>

      {/* Overlay content */}
      <div className="hero-content container">
        <h3>Empowering Africa’s Future Through Inclusive & Responsible AI</h3>
        <p>
          We build ethical, inclusive, and African-led AI ecosystems where
          governance, innovation, and policy drive sustainable development and
          digital sovereignty.
        </p>
        <div className="hero-buttons">
          <a className="btn" href="#about">Our Work</a>
          <a className="btn btn-outline" href="#lab">Innovation Lab</a>
          <a className="btn" href="#trainings">Trainings</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

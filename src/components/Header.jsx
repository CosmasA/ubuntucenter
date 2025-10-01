import { useState, useEffect } from "react";
import "../App.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false); 
  const [showDropdown, setShowDropdown] = useState(false);

  // Handle scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dropdown on click (mobile-friendly)
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <header id="header" className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">UC4AGI</h1>
        </a>

        {/* Navigation */}
        <nav id="navmenu" className={`navmenu ${isOpen ? "open" : ""}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Work</a></li>

            {/* Dropdown Menu for Trainings */}
            <li
              className={`dropdown ${showDropdown ? "active" : ""}`}
              onMouseEnter={() => window.innerWidth > 992 && setShowDropdown(true)}
              onMouseLeave={() => window.innerWidth > 992 && setShowDropdown(false)}
            >
              <button
                type="button"
                className="dropdown-toggle"
                onClick={toggleDropdown}
              >
                Trainings <i className="bi bi-chevron-down"></i>
              </button>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li><a href="/robotics">Robotics Training</a></li>
                  <li><a href="/ai-skills">AI Skills Training</a></li>
                  <li><a href="/ai-ethics">AI Ethics & Governance</a></li>
                  <li><a href="/ai-tools">AI Tools Applications</a></li>
                </ul>
              )}
            </li>

            <li><a href="#resources">Resources</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Call to action button */}
        <a className="btn-getstarted" href="#register">Register</a>

        {/* Mobile toggle button */}
        <button
          className="mobile-nav-toggle d-xl-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Header;

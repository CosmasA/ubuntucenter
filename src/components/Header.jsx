import { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false); 
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPastTopbar, setIsPastTopbar] = useState(false);

  // Handle scroll background effect and topbar detection
  useEffect(() => {
    const handleScroll = () => {
      const topbar = document.getElementById('topbar');
      const topbarHeight = topbar ? topbar.offsetHeight : 0;
      
      // Check if scrolled past topbar
      setIsPastTopbar(window.scrollY > topbarHeight);
      
      // Check if scrolled for background effect
      setScrolled(window.scrollY > 50);
    };

    handleScroll(); // Run on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dropdown on click (mobile-friendly)
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Close menu when link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
    setShowDropdown(false);
  };

  return (
    <header 
      id="header" 
      className={`header ${scrolled ? "scrolled" : ""} ${isPastTopbar ? "header-fixed" : ""}`}
    >
      <div className="header-container">
        {/* Logo */}
        <a 
          href="/ubuntucenter/" 
          className="logo d-flex align-items-center me-auto me-xl-0" 
          onClick={handleLinkClick}
        >
          <h1 className="sitename">UC4AGI</h1>
        </a>

        {/* Navigation */}
        <nav id="navmenu" className={`navmenu ${isOpen ? "open" : ""}`}>
          <ul>
            <li><a href="/ubuntucenter/" onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about" onClick={handleLinkClick}>About Us</a></li>
            <li><a href="#services" onClick={handleLinkClick}>Our Work</a></li>

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
                  <li><a href="/robotics" onClick={handleLinkClick}>Robotics Training</a></li>
                  <li><a href="/ai-skills" onClick={handleLinkClick}>AI Skills Training</a></li>
                  <li><a href="/ai-ethics" onClick={handleLinkClick}>AI Ethics & Governance</a></li>
                  <li><a href="/ai-tools" onClick={handleLinkClick}>AI Tools Applications</a></li>
                </ul>
              )}
            </li>

            <li><a href="#resources" onClick={handleLinkClick}>Resources</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </nav>

        {/* Call to action button */}
        <a className="btn-getstarted" href="#register" onClick={handleLinkClick}>Register</a>

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
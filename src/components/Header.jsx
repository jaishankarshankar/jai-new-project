import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  // Close mobile nav on window resize if width > 980
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980 && navOpen) {
        setNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navOpen]);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      e.preventDefault();
      const targetElem = document.querySelector(href);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setNavOpen(false);
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const handleHomeClick = () => {
    navigate('/');
    setNavOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="logo">
          <div className="mark">JJ</div>
          <div className="brand">
            <div className="brand-name">JJ Tech</div>
            <div className="brand-sub muted">Future skills for students</div>
          </div>
        </div>

        <div className="nav-right">
          <nav className="nav">
            <button
              className="nav-toggle"
              id="navToggle"
              aria-expanded={navOpen}
              aria-label="Toggle navigation"
              onClick={() => setNavOpen(!navOpen)}
            >
              ☰
            </button>
            <ul className={`nav-links${navOpen ? ' open' : ''}`} id="navLinks">
              <li>
                <button type="button" className="nav-button" onClick={handleHomeClick}>
                  Home
                </button>
              </li>
              <li>
                <a href="#coursesSection" onClick={() => setNavOpen(false)}>Courses</a>
              </li>
              <li>
                <a href="#projectsSection" onClick={() => setNavOpen(false)}>Projects</a>
              </li>
              <li>
                <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button className="btn">
              Enroll
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

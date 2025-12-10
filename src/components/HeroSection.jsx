import React from 'react';
import './HeroSection.css';

const HeroSection = ({ onExploreCoursesClick }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="eyebrow pill">Electronics • Software • Robotics • English</div>
        <h1>
          Future Skills for
          <br />
          Future Leaders
        </h1>
        <p className="lead">Hands-on learning for school students — building electronics, coding, robotics and communication skills that matter.</p>
        <div className="cta">
          <button className="btn" onClick={onExploreCoursesClick}>Explore Courses</button>
          <button className="ghost">Join Training Program</button>
        </div>

        <div className="grid-4">
          <div className="feature">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="#2f80ed" strokeWidth="1.6" />
            </svg>
            <div className="f-title">Experienced Trainers</div>
          </div>
          <div className="feature">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="4" y="4" width="16" height="16" rx="3" stroke="#06b6d4" strokeWidth="1.6" />
            </svg>
            <div className="f-title">Practical Learning</div>
          </div>
          <div className="feature">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 12h16" stroke="#f59e0b" strokeWidth="1.6" />
            </svg>
            <div className="f-title">Future-ready Curriculum</div>
          </div>
          <div className="feature">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="8" r="3" stroke="#10b981" strokeWidth="1.6" />
              <path d="M6 20c1-3 7-3 12 0" stroke="#10b981" strokeWidth="1.6" />
            </svg>
            <div className="f-title">Certification</div>
          </div>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <svg width="380" height="260" viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="360" height="220" rx="16" fill="#ffffff" stroke="#e6f0ff" />
          <g transform="translate(40,40)">
            <rect x="0" y="80" width="240" height="100" rx="8" fill="#f3f7ff" />
            <circle cx="60" cy="-10" r="34" fill="#ffcc99" />
            <rect x="12" y="10" width="120" height="40" rx="8" fill="#2f80ed" />
            <rect x="150" y="90" width="60" height="40" rx="8" fill="#06b6d4" />
            <rect x="170" y="110" width="20" height="28" rx="6" fill="#0f1724" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

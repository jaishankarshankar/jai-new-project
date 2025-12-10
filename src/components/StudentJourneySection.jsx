import React from 'react';
import './StudentJourneySection.css';

const StudentJourneySection = () => {
  return (
<section id="projectsSection" className="section">
      <h2>Student Journey</h2>
      <div className="journey">
        <div className="step">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-icon">
            <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" stroke="#007bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 16V22" stroke="#007bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 22H16" stroke="#007bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <strong>Learn</strong>
          <p className="muted">Concepts + demos</p>
        </div>
        <div className="step">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-icon">
            <path d="M14.7 6.3a1 1 0 0 0-1.4 1.4l1.6 1.6a1 1 0 0 1 1.4-1.4l-1.6-1.6z" stroke="#28a745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.2 12.8a1 1 0 0 0-1.4 1.4l1.6 1.6a1 1 0 0 1 1.4-1.4l-1.6-1.6z" stroke="#28a745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 8h-2.5a1 1 0 0 0-.8.4l-1.9 2.5a1 1 0 0 0 .4.8l2.5 1.9a1 1 0 0 0 .8.4H18a1 1 0 0 1 1 1V9a1 1 0 0 0-1-1z" stroke="#28a745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 16H3.5a1 1 0 0 0-.8.4l-1.9 2.5a1 1 0 0 0 .4.8l2.5 1.9a1 1 0 0 0 .8.4H6a1 1 0 0 1 1 1v-4a1 1 0 0 0-1-1z" stroke="#28a745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <strong>Practice</strong>
          <p className="muted">Hands-on builds</p>
        </div>
        <div className="step">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-icon">
            <circle cx="12" cy="12" r="3" stroke="#ffc107" stroke-width="2"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82-.33H10a.65 .65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82L15 10a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="#ffc107" stroke-width="2"/>
          </svg>
          <strong>Build projects</strong>
          <p className="muted">Group & individual</p>
        </div>
        <div className="step">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-icon">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" stroke="#dc3545" stroke-width="2"/>
            <polyline points="14,2 14,8 20,8" stroke="#dc3545" stroke-width="2"/>
            <line x1="16" y1="13" x2="8" y2="13" stroke="#dc3545" stroke-width="2"/>
            <line x1="16" y1="17" x2="8" y2="17" stroke="#dc3545" stroke-width="2"/>
            <polyline points="10,9 9,9 8,9" stroke="#dc3545" stroke-width="2"/>
          </svg>
          <strong>Get certified</strong>
          <p className="muted">Showcase & certificate</p>
        </div>
      </div>
    </section>
  );
};

export default StudentJourneySection;

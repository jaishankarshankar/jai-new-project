import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <section className="section" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testi">
        <div className="testcard">
          <strong>Fantastic robotics class!</strong>
          <p className="muted">— Student A</p>
        </div>
        <div className="testcard">
          <strong>Great hands-on learning.</strong>
          <p className="muted">— Parent B</p>
        </div>
        <div className="testcard">
          <strong>School teams loved the workshop.</strong>
          <p className="muted">— Teacher C</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

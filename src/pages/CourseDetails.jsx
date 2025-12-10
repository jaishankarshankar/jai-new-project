import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courses from '../courseData';
import './CourseDetails.css';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="course-details">
        <p>Course not found.</p>
        <button className="btn back" onClick={() => navigate('/explore')}>
          Back to Explore
        </button>
      </div>
    );
  }

  return (
    <div className="course-details" style={{ backgroundColor: '#fff', padding: '40px 20px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#222' }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '8px' }}>{course.title}</h1>
        <p style={{ fontSize: '1rem', color: '#666', marginBottom: '20px' }}>
          {[course.level, course.duration, course.projectsShort].filter(Boolean).join(' • ')}
        </p>
        <hr style={{ border: '0', height: '1px', backgroundColor: '#e1e1e1', marginBottom: '30px' }} />

        {/* Image Gallery */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
          {course.imageBlocks.map((img, idx) => (
            <figure key={idx} style={{ maxWidth: '300px', textAlign: 'center' }}>
              <img
                src={`/assets/${img.fileName}`}
                alt={img.title}
                style={{ display: "block", margin: "0 auto", maxWidth: "100%", borderRadius: "12px" }}
                onError={(e) => {
                   e.target.onerror = null;
                   e.target.src = "/assets/placeholder.png";
                }}
              />
              <figcaption style={{ marginTop: '8px', fontWeight: '600', fontSize: '1rem' }}>{img.title}</figcaption>
              <p style={{ fontSize: '0.875rem', color: '#555', marginTop: '4px' }}>{img.caption}</p>
            </figure>
          ))}
        </div>

        {/* Long Content Sections */}
        <div>
          {course.longContent.map((section, idx) => (
            <section key={idx} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontWeight: 'bold', fontSize: '1.8rem', marginBottom: '12px' }}>{section.heading}</h2>
              <p style={{ whiteSpace: 'pre-line', fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>{section.body}</p>
            </section>
          ))}
        </div>

        {/* Back Button */}
        <button
          className="btn back"
          style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', borderRadius: '6px', border: 'none', backgroundColor: '#007bff', color: '#fff' }}
          onClick={() => navigate('/explore')}
        >
          Back to Explore Courses
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;

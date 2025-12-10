import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import courses from '../courseData';
import './ExploreCourses.css';

const ExploreCourses = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);

  useEffect(() => {
    const query = searchQuery.toLowerCase();

    // Dynamically extract categories from courses
    // For 'all' category, do not filter by category (show all)
    const filtered = courses.filter(course => {
      const matchesCategory = category === 'all' ? true : course.category === category;
      const matchesQuery = course.title.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });

    setFilteredCourses(filtered);
  }, [category, searchQuery]);

  // Define specific categories as per requirement
  const categories = [
    { key: 'all', label: 'All Courses' },
    { key: 'coding', label: 'Course' },
    { key: 'softskills', label: 'Skills' }
  ];

  return (
    <main className="page">
      <div className="container">
        <header className="page-header">
          <div className="explore-header">
            <h1 className="explore-title">Explore Courses</h1>
            <div className="filter-buttons">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`chip ${cat.key === category ? 'active' : ''}`}
                  onClick={() => setCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
          <div className="right-block">
            <input
              id="searchInput"
              type="search"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </header>

        <section id="coursesGrid" className="grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <article
                key={course.id}
                className="card"
                data-cat={course.category}
                data-name={course.title}
              >
                <h3>{course.title}</h3>
                <p className="meta">
                  {[course.level, course.duration, course.projectsShort]
                    .filter(Boolean)
                    .join(' • ')}
                </p>
                <p className="desc">{course.shortDescription}</p>
                <button
                  className="btn view"
                  onClick={() => navigate(`/course/${course.id}`)}
                >
                  Quick View
                </button>
              </article>
            ))
          ) : (
            <p>No courses match your search/filter criteria.</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default ExploreCourses;

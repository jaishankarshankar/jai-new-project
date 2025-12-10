import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StudentJourneySection from '../components/StudentJourneySection';
import TestimonialsSection from '../components/TestimonialsSection';
import CourseCard from '../components/CourseCard';
import './ExploreCourses.css';

const coursesData = [
  {
    id: 'circuit-creator-basics',
    title: 'Circuit Creator Basics',
    meta: 'Beginner • 6 weeks • 8 projects',
    description: 'Learn LEDs, buzzers, switches & breadboard basics.',
    category: 'electronics',
    details: `
      <p>This course introduces the fundamentals of electronics. 
      You will learn about electronic components like LEDs, buzzers, and switches, and how to use breadboards for prototyping.</p>
      <ul>
        <li>Understanding basic circuits</li>
        <li>Hands-on projects with LEDs and buzzers</li>
        <li>Using breadboards and switches</li>
        <li>Introduction to sensors and robotics</li>
      </ul>
      <p>Perfect for beginners who want to start with practical electronics projects.</p>
    `
  },
  // Other courses omitted for brevity
];

const categories = [
  { key: 'all', label: 'All Courses' },
  { key: 'course', label: 'Course' },
  { key: 'skills', label: 'Skills' },
];

const ExploreCourses = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (key) => {
    setActiveCategory(key);
  };

  const filteredCourses = coursesData.filter(course => {
    let matchesCategory = false;
    if (activeCategory === 'all') {
      matchesCategory = true;
    } else if (activeCategory === 'course') {
      matchesCategory = ['electronics', 'coding', 'computers'].includes(course.category);
    } else if (activeCategory === 'skills') {
      matchesCategory = ['english', 'softskills', 'college'].includes(course.category);
    }
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StudentJourneySection />
      <TestimonialsSection />
      <div className="container">
        <header className="page-header">
          <div>
            <h1>Explore Courses</h1>
            <p className="sub">Electronics, Coding, MS Office, English, Soft Skills & College Prep</p>
          </div>

          <div className="actions">
            <input
              id="searchInput"
              type="search"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <div className="filters">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  className={'chip' + (activeCategory === cat.key ? ' active' : '')}
                  onClick={() => handleCategoryClick(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section id="coursesGrid" className="grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <CourseCard
                key={course.title}
                id={course.id}
                title={course.title}
                meta={course.meta}
                description={course.description}
                category={course.category}
              />
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </section>
      </div>
    </>
  );
};

export default ExploreCourses;

import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StudentJourneySection from '../components/StudentJourneySection';
import Footer from '../components/Footer';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleExploreCoursesClick = () => {
    navigate('/explore');
  };

  return (
    <>
      <Header />
      <div className="container">
        <HeroSection onExploreCoursesClick={handleExploreCoursesClick} />
        <FeaturesSection />
        <StudentJourneySection />
      </div>
      <Footer />
    </>
  );
};

export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ id, title, meta, description, category }) => {
  const navigate = useNavigate();

  const handleQuickView = () => {
    navigate(`/course/${id}`);
  };

  return (
    <article className="card" data-cat={category} data-name={title}>
      <h3>{title}</h3>
      <p className="meta">{meta}</p>
      <p className="desc">{description}</p>
      <button className="btn view" onClick={handleQuickView}>Quick View</button>
    </article>
  );
};

export default CourseCard;

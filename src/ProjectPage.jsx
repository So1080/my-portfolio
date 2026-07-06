// ProjectPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectPage({ projects }) {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projects[projectId];

  if (!project) {
    return (
      <div className="error-view">
        <p>Project details could not be found.</p>
        <button onClick={() => navigate('/')}>Return Home</button>
      </div>
    );
  }

  return (
    <motion.div 
      className="project-page-layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Dynamic Back Navigation */}
      <button className="floating-back-btn" onClick={() => navigate(`/category/${project.category}`)}>
        ← Back to {project.category}
      </button>

      {/* 1. Hero Cover Header Image with Text Overlay */}
      <header 
        className="project-hero-banner"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.85)), url(${project.heroImage})` }}
      >
        <div className="hero-content-wrapper">
          <span className="project-category-tag">{project.category}</span>
          <h1>{project.title}</h1>
          <div className="project-metadata-row">
            <span><strong>Role:</strong> {project.role}</span>
            <span className="separator">|</span>
            <span><strong>Tech Stack:</strong> {project.techStack?.join(', ')}</span>
          </div>
        </div>
      </header>

      {/* 2. Opening Overview Paragraph */}
      <section className="project-intro-summary">
        <p className="pitch-text">{project.quickPitch}</p>
      </section>

      {/* 3. Alternating Two-Column Sections (Inspired by image3.jpg.webp) */}
      <section className="project-split-sections-container">
        {project.sections?.map((section, index) => (
          <div 
            key={index} 
            className="split-section-row"
            data-direction={section.imagePosition} // Used by CSS to reverse order
          >
            {/* Text Column */}
            <div className="text-column">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>

            {/* Image Column */}
            <div className="image-column">
              <div className="media-container">
                <img src={section.image} alt={`${project.title} - ${section.title}`} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  );
}
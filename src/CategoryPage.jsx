// CategoryPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CATEGORIES_DATA } from './projects'; // Import your category config maps

export default function CategoryPage({ projects }) {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  // Safeguard lookup configuration data details
  const categoryMeta = CATEGORIES_DATA[categoryId] || {
    title: `${categoryId} Portfolio`,
    description: "Exploring creative technologies, human interface design, and systems engineering architectures.",
    heroImage: "/assets/images/default-hero.jpg"
  };

  // Filter master dataset to only pull projects corresponding to this portal track keys
  const filteredProjectKeys = Object.keys(projects).filter(key => 
    projects[key].category === categoryId
  );

  return (
    <motion.div 
      className="category-page-layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Home Navigation Layer Action */}
      <button className="floating-back-btn" onClick={() => navigate('/')}>
        ← Back to Landscape
      </button>

      {/* 1. Category Hero Cover Header Image with Title Overlay */}
      <header 
        className="category-hero-banner"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.9)), url(${categoryMeta.heroImage})` }}
      >
        <div className="hero-content-wrapper">
          <span className="breadcrumb-tag">Portfolio Category</span>
          <h1>{categoryMeta.title}</h1>
        </div>
      </header>

      {/* 2. Category Opening Overview Description Paragraph */}
      <section className="category-intro-summary">
        <p className="category-description-text">{categoryMeta.description}</p>
      </section>

      {/* 3. Stacked Alternating Project Preview Rows */}
      <section className="category-projects-list-container">
        {filteredProjectKeys.map((key) => {
          const project = projects[key];
          
          return (
            <div 
              key={key} 
              className="category-project-row"
              data-direction={project.cardImagePosition || "right"} // Dynamic layout inversion
              onClick={() => navigate(`/project/${key}`)} // Direct link routing click modifier
            >
              {/* Text Meta Column Details */}
              <div className="project-preview-text-column">
                <span className="project-preview-index">View Case Study →</span>
                <h2>{project.title}</h2>
                <p>{project.quickPitch}</p>
                
                <div className="project-preview-tech-stack">
                  {project.techStack?.map((tech, idx) => (
                    <span key={idx} className="preview-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Image Preview Column Detail */}
              <div className="project-preview-image-column">
                <div className="preview-media-frame">
                  <img src={project.cardImage} alt={`${project.title} Banner preview`} />
                  <div className="hover-overlay-hint">
                    <span>Explore Project</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </motion.div>
  );
}
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useDragControls } from "framer-motion";
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import CategoryPage from './CategoryPage';
import { PROJECTS_DATA } from './projects';

function App() {
  const constraintsRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div className="portfolio-container">
      {/* 1. The Navigation Bar */}
      <nav className="menu-bar">
        <span>Home</span>
        <span>Education</span>
        <span>Projects</span>
        <span>Contact</span>
      </nav>

      <Routes>
        {/* Main Landscape View */}
        <Route path="/" element={
          <main className="landscape" ref={constraintsRef}>
            <div className="hero-text">
              <h1>Solyane Berge</h1>
              <p>Learning Scientist & Instructional Designer</p>
            </div>

            {PORTALS.map((portal) => (
              <div 
                key={portal.id}
                className="portal"
                style={{ left: portal.x, top: portal.y, position: 'absolute' }}
              >
                <div className="cloud-placeholder" />
                <span>{portal.label}</span>
              </div>
            ))}

            <StickFigure constraintsRef={constraintsRef} navigate={navigate} />
          </main>
        } />

        {/* Dynamic Category View */}
        <Route path="/category/:categoryId" element={<CategoryPage projects={PROJECTS_DATA} />} />
      </Routes>

    </div>
  );
}

const PORTALS = [
  { id: 'research', label: 'Research', x: 100, y: 200, color: '#FFD700', path: '/research' },
  { id: 'games', label: 'Games', x: 400, y: 200, color: '#FF69B4', path: '/games' },
  { id: 'design', label: 'UX & UI', x: 700, y: 200, color: '#00FA9A', path: '/design' },
];

const StickFigure = ({ constraintsRef }) => {
  const navigate = useNavigate();

  const handleDragEnd = (event, info) => {
    const { x, y } = info.point;

    PORTALS.forEach(portal => {
      // Create a "hit box" around the center of each portal (e.g., 100px wide)
      const isInside = 
        x > portal.x - 50 && x < portal.x + 50 &&
        y > portal.y - 50 && y < portal.y + 50;

      if (isInside) {
        console.log(`Navigating to ${portal.label}`);
        navigate(portal.path);
        // If using react-router: navigate(portal.path);
        // For now, let's just alert:
        alert(`Entering the ${portal.label} Zone!`);
      }
    });
  };

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef} 
      dragSnapToOrigin={true} // This is the built-in "snap back"
      dragElastic={0.05}      // Adds a slight "rubber band" feel
      dragMomentum={false}    // Fixes the Mac trackpad "stickiness"
      onDragEnd={handleDragEnd}
      whileHover={{ scale: 1.3 }}
      whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
      className="avatar"
      style={{ touchAction: 'none' }}
    >
      <img 
        src="src/assets/batch_StickFigure2.svg" 
        alt="You!" 
        style={{ pointerEvents: "none", width: '100%' }} 
      />
    </motion.div>
  );
};



export default App;
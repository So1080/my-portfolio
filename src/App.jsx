import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* 1. The Navigation Bar */}
      <nav className="menu-bar">
        <span>Home</span>
        <span>Projects</span>
        <span>Contact</span>
      </nav>

      {/* 2. The Interactive Landscape */}
      <main className="landscape">
        <div className="hero-text">
          <h1>Solyane Berge</h1>
          <p>Learning Scientist & Instructional Designer</p>
        </div>

        {/* This is where we will put the Clouds and the Stick Figure */}
      </main>
    </div>
  );
}

const StickFigure = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 1000, top: 0, bottom: 500 }} // Keeps him on screen
      dragSnapToOrigin={true} // He jumps back to the grass if you drop him in the middle of nowhere
      whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
      className="avatar"
    >
      <img src="src/assets/batch_StickFigure2.svg" alt="You!" />
    </motion.div>
  );
};

const handleDragEnd = (event, info) => {
  // 1. Get the drop coordinates
  const { x, y } = info.point;

  // 2. Define your "AI Literacy" Cloud area (Controller Cloud) 
  // You'll adjust these numbers based on where you place your cloud SVG
  const cloudArea = { xMin: 200, xMax: 400, yMin: 100, yMax: 250 };

  if (x > cloudArea.xMin && x < cloudArea.xMax && y > cloudArea.yMin && y < cloudArea.yMax) {
    console.log("Navigating to AI4GA Project...");
    // Trigger your achievement pop-up here!
    navigate("/projects/ai4ga");
  }
};

export default App;
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useDragControls } from "framer-motion";
import './App.css';

function App() {
  const constraintsRef = useRef(null);

  return (
    <div className="portfolio-container">
      {/* 1. The Navigation Bar */}
      <nav className="menu-bar">
        <span>Home</span>
        <span>Education</span>
        <span>Projects</span>
        <span>Contact</span>
      </nav>

      {/* 2. The Interactive Landscape */}
      <main className="landscape" ref={constraintsRef}>
        <div className="hero-text">
          <h1>Solyane Berge</h1>
          <p>Learning Scientist & Instructional Designer</p>
        </div>

        <StickFigure constraintsRef={constraintsRef} />
      </main>
    </div>
  );
}

const StickFigure = ({ constraintsRef }) => {
  // We remove the key and resetKey logic entirely for a smoother animation
  const handleDragEnd = (event, info) => {
    // 1. Get the drop coordinates relative to the screen
    const { x, y } = info.point;

    // 2. Define your "AI Literacy" Cloud area (Controller Cloud)
    // Adjust these based on your cloud's actual position
    const aiCloud = { xMin: 200, xMax: 400, yMin: 100, yMax: 250 };

    if (x > aiCloud.xMin && x < aiCloud.xMax && y > aiCloud.yMin && y < aiCloud.yMax) {
      alert("Achievement Unlocked: AI Explorer!");
      // navigate("/projects/ai4ga"); // This will be your next step
    }
    
    // Framer Motion's dragSnapToOrigin={true} will now handle the 
    // smooth slide back to the starting CSS position automatically.
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
    >
      <img 
        src="src/assets/batch_StickFigure2.svg" 
        alt="You!" 
        style={{ pointerEvents: "none", width: '100%' }} 
      />
    </motion.div>
  );
};

// const StickFigure = ({ constraintsRef }) => {
//   const [resetKey, setResetKey] = useState(0);
//   const handleDragEnd = (event, info) => {
//     const { x, y } = info.point;
//     // Example: Logic for AI4GA (AI Literacy) cloud coordinates
//     const aiCloud = { xMin: 200, xMax: 400, yMin: 100, yMax: 250 };

//     if (x > aiCloud.xMin && x < aiCloud.xMax && y > aiCloud.yMin && y < aiCloud.yMax) {
//       console.log("Navigating to AI4GA...");
//       // For now, we use a simple alert to test collision
//       alert("Achievement Unlocked: AI Explorer!");
//     }

//     setResetKey(prev => prev + 1);
//   };

//   // const [isDragging, setIsDragging] = useState(false);
//   return (
//     <motion.div
//       key={resetKey}
//       drag
//       dragConstraints={constraintsRef} // Keeps him on screen
//       dragSnapToOrigin={true} // He jumps back to the grass if you drop him in the middle of nowhere
//       dragElastic={0.01}
//       dragMomentum={false}

//       // onDragStart={() => setIsDragging(true)}
//       onDragEnd={() => setIsDragging(false)}
      
//       // Secondary safety net for trackpads
//       onPanEnd={() => setIsDragging(false)}
//       whileHover={{ scale: 1.3 }}
//       whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
      
//       className="avatar"
//     >
//       <img src="src/assets/batch_StickFigure2.svg" alt="You!" style={{ pointerEvents: "none", width: '100%' }} />
//     </motion.div>
//   );
// };

// const handleDragEnd = (event, info) => {
//   // 1. Get the drop coordinates
//   const { x, y } = info.point;

//   // 2. Define your "AI Literacy" Cloud area (Controller Cloud) 
//   // You'll adjust these numbers based on where you place your cloud SVG
//   const cloudArea = { xMin: 200, xMax: 400, yMin: 100, yMax: 250 };

//   if (x > cloudArea.xMin && x < cloudArea.xMax && y > cloudArea.yMin && y < cloudArea.yMax) {
//     console.log("Navigating to AI4GA Project...");
//     // Trigger your achievement pop-up here!
//     navigate("/projects/ai4ga");
//   }
// };



export default App;
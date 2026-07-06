import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import './App.css';
import CategoryPage from './CategoryPage';
import ProjectPage from './ProjectPage';
import { PROJECTS_DATA } from './projects';
import { AnimatePresence } from 'framer-motion';

// 1. Cleaned up Imports (Renamed SVG to prevent naming collision with the component)
import gamesPortalImg from './assets/Controller_and_frame.PNG';
import accessPortalImg from './assets/Rock_and_frame.PNG';
import designPortalImg from './assets/Flowers_and_frame.PNG';
import stickFigureSvg from './assets/batch_StickFigure2.svg';
import customBubbleImg from './assets/Speech_bubble.PNG'; 

// 2. The Single Master Portals Source (Percentages mapped from your design layers)
// const PORTALS = [
//   { id: 'accessibility', label: 'Accessibility', img: accessPortalImg, x: '25.2%', y: '75%', path: '/category/accessibility' },
//   { id: 'games', label: 'Games', img: gamesPortalImg, x: '77.2%', y: '21.8%', path: '/category/games' },
//   { id: 'design', label: 'UX & UI', img: designPortalImg, x: '84.3%', y: '64.1%', path: '/category/design' },
// ];

const PORTALS = [
  { 
    id: 'accessibility', 
    label: 'Accessibility', 
    img: accessPortalImg, 
    x: '25.2%', 
    y: '75%', 
    width: '20vw',
    textBottom: '6%',
    path: '/category/accessibility' 
  },
  { 
    id: 'games', 
    label: 'Games', 
    img: gamesPortalImg, 
    x: '77.2%', 
    y: '21.8%', 
    width: '35vw',
    textBottom: '6%',
    path: '/category/games' 
  },
  { 
    id: 'design', 
    label: 'UX & UI', 
    img: designPortalImg, 
    x: '84.3%', 
    y: '64.1%', 
    width: '13vw',
    textBottom: '5%',
    path: '/category/design' 
  },
];

function App() {
  const constraintsRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [hasStarted, setHasStarted] = useState(false);
  const [activeDropPortal, setActiveDropPortal] = useState(null);

  const isHome = location.pathname === "/";

  return (
    <>
    {/* 1. Seamlessly overlay the intro screen layer before mounting the landscape environment */}
    <AnimatePresence>
      {!hasStarted && <IntroGate onStart={() => setHasStarted(true)}/>}
    </AnimatePresence>
    

    <div className={`portfolio-container ${isHome ? 'home-active' : 'scrollable-page'}`}>
      
      {/* Fixed Navigation Bar */}
      {/* <nav className="menu-bar">
        <button className="nav-link" onClick={() => navigate('/')}>Home</button>
        <button className="nav-link" onClick={() => navigate('/category/accessibility')}>Accessibility</button>
        <button className="nav-link" onClick={() => navigate('/category/games')}>Games</button>
        <button className="nav-link" onClick={() => navigate('/category/design')}>UX & UI</button>
      </nav> */}

      {/* Fixed Organic Signpost Navigation */}
      {/* <nav className="signpost-nav">
        <button className="nav-sign" onClick={() => navigate('/')}>Home</button>
        <button className="nav-sign" onClick={() => navigate('/category/accessibility')}>Accessibility</button>
        <button className="nav-sign" onClick={() => navigate('/category/games')}>Games</button>
        <button className="nav-sign" onClick={() => navigate('/category/design')}>UX & UI</button>
      </nav> */}

      {/* Accessible, Structural Top Navigation Bar */}
      <nav className="menu-bar" aria-label="Main Navigation">
        <button className="nav-link" onClick={() => navigate('/')}>Home</button>
        <button className="nav-link" onClick={() => navigate('/category/accessibility')}>Accessibility</button>
        <button className="nav-link" onClick={() => navigate('/category/games')}>Games</button>
        <button className="nav-link" onClick={() => navigate('/category/design')}>UX & UI</button>
      </nav>

      <Routes>
        <Route path="/" element={
          <main className="landscape" ref={constraintsRef}>
            <div className="hero-text">
              <h1>Solyane Berge</h1>
              <p>UX Researcher & Learning Scientist</p>
            </div>

            {PORTALS.map((portal) => {
              // Check if this specific portal is highlighted by the stick figure's dragging body
              const isTargetedByAvatar = activeDropPortal === portal.id;

              return (
                <div 
                  key={portal.id}
                  /* 1. Appends an active class dynamically if the avatar crosses its coordinates */
                  className={`portal ${isTargetedByAvatar ? 'avatar-hovering' : ''}`}
                  style={{ 
                    left: portal.x, 
                    top: portal.y, 
                    position: 'absolute',
                    width: portal.width,
                    transform: 'translate(-50%, -50%)' 
                  }}
                  onClick={() => navigate(portal.path)}
                  aria-label={`Enter the ${portal.label} category`}
                >
                  <img src={portal.img} alt={portal.label} className="portal-img" style={{ width: '100%', height: 'auto' }} />
                  
                  <span className="portal-label" style={{ bottom: portal.textBottom }}>
                    {portal.label}
                  </span>
                </div>
              );
            })}

            {/* 2. Pass the state hook down so the figure can update portal active tracking flags */}
            <StickFigure constraintsRef={constraintsRef} setActiveDropPortal={setActiveDropPortal} />
          </main>
        } />

        <Route path="/category/:categoryId" element={<CategoryPage projects={PROJECTS_DATA} />} />
        <Route path="/project/:projectId" element={<ProjectPage projects={PROJECTS_DATA} />} />
      </Routes>
    </div>
    </>
  );
}

const IntroGate = ({ onStart }) => {
  return (
    <motion.div 
      className="intro-gate-overlay"
      exit={{ y: '-100vh', opacity: 0 }} // Glides straight up into the sky when clicked
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }} // Elegant cinematic curve
    >
      <motion.div 
        className="intro-content"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {/* Playful, hand-drawn themed splash title */}
        <h1 className="intro-title">Solyane Berge</h1>
        <p className="intro-subtitle">UX Researcher & Learning Scientist</p>
        
        {/* Pulsing CTA button reminiscent of a video game splash screen */}
        <motion.button 
          className="start-button"
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          animate={{ 
            boxShadow: [
              "0 0 0 0px rgba(0,0,0,0.2)", 
              "0 0 0 12px rgba(0,0,0,0)"
            ] 
          }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          Explore Trail
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

// 3. StickFigure Component with Dynamic Percentage Hitbox Detection & Portal Highlighting
const StickFigure = ({ constraintsRef, setActiveDropPortal }) => {
  const navigate = useNavigate();
  const [showBubble, setShowBubble] = React.useState(true);
  const [isDragging, setIsDragging] = React.useState(false);

  // Helper utility function to check where the stick figure body is currently floating
  const checkPortalIntersection = (event) => {
    if (!constraintsRef.current) return null;

    const rect = constraintsRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const avatarElement = event.target.closest('.avatar');
    if (!avatarElement) return null;

    const avatarRect = avatarElement.getBoundingClientRect();
    const avatarCenterX = avatarRect.left + avatarRect.width / 2;
    const avatarCenterY = avatarRect.top + avatarRect.height / 2;

    const currentX = avatarCenterX - rect.left;
    const currentY = avatarCenterY - rect.top;

    let matchedPortalId = null;

    PORTALS.forEach(portal => {
      const portalTargetX = (parseFloat(portal.x) / 100) * width;
      const portalTargetY = (parseFloat(portal.y) / 100) * height;

      // Matches your standard 75px comfort radius drop targets!
      const isOver = 
        currentX > portalTargetX - 75 && currentX < portalTargetX + 75 &&
        currentY > portalTargetY - 75 && currentY < portalTargetY + 75;

      if (isOver) {
        matchedPortalId = portal.id;
      }
    });

    return matchedPortalId;
  };

  const handleDrag = (event) => {
    // Continually updates which portal glows during active transit motions
    const activeId = checkPortalIntersection(event);
    setActiveDropPortal(activeId);
  };

  const handleDragEnd = (event, info) => {
    // Clear out active highlight flags the instant the drag interaction concludes
    setActiveDropPortal(null);
    setIsDragging(false);

    const activeId = checkPortalIntersection(event);
    if (activeId) {
      const targetPortal = PORTALS.find(p => p.id === activeId);
      if (targetPortal) navigate(targetPortal.path);
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef} 
      dragSnapToOrigin={true} 
      dragElastic={0.05}      
      dragMomentum={false}    
      onDragStart={() => setIsDragging(true)}
      onDrag={handleDrag} // Tracks real-time spatial overlaps for glow states
      onDragEnd={handleDragEnd}
      whileHover={{ scale: 1.15 }}
      whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
      onPointerDown={() => setShowBubble(false)}
      onAnimationComplete={() => {
        if (!isDragging) {
          setShowBubble(true);
        }
      }}
      className="avatar"
      style={{ touchAction: 'none' }}
      tabIndex="0" 
      aria-label="Interactive character avatar indicator. Drag into portals or use menus to browse."
    >
      {/* Hand-drawn Instruction Speech Bubble overlay element */}
      {showBubble && (
        <div className="speech-bubble">
          {/* 1. Your custom hand-drawn bubble graphic */}
          <img src={customBubbleImg} alt="Speech bubble instruction" className="bubble-graphic" />
          
          {/* 2. Your instruction text placed perfectly on top of your drawing */}
          <span className="bubble-text">Drop me on the subject that you are interested in!</span>
        </div>
      )}

      <img 
        src={stickFigureSvg} // Uses the correctly mapped asset import
        alt="Avatar Figure" 
        style={{ pointerEvents: "none", width: '100%' }} 
      />
    </motion.div>
  );
};



export default App;

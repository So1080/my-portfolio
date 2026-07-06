import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import './App.css';
import CategoryPage from './CategoryPage';
import ProjectPage from './ProjectPage';
import { PROJECTS_DATA } from './projects';

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

const MouseParticles = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Create a small sketch-dot particle at the cursor coordinate
      const newParticle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 6 + 4, // Random organic hand-drawn variance
      };
      
      setParticles((prev) => [...prev.slice(-20), newParticle]); // Limit to max 20 trailing dots
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="particle-container">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="ink-particle"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

const IntroTitle = () => {
  const nameStr = "Solyane Berge";
  
  return (
    <h1 className="intro-title" aria-label={nameStr}>
      {nameStr.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: index * 0.08, // Staggers each letter to look like live ink writing
            type: "spring",
            stiffness: 120
          }}
          style={{ display: "inline-block", whitespace: letter === " " ? "pre" : "normal" }}
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
};




const IntroGate = ({ onStart }) => {
  const nameStr = "Solyane Berge";
  const [showStickFigure, setShowStickFigure] = useState(false);
  
  // Track the actual title container dimensions in real-time for perfect responsive alignment
  const titleRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 440, height: 60 });

  useEffect(() => {
    if (titleRef.current) {
      setDimensions({
        width: titleRef.current.offsetWidth,
        height: titleRef.current.offsetHeight,
      });
    }

    const handleResize = () => {
      if (titleRef.current) {
        setDimensions({
          width: titleRef.current.offsetWidth,
          height: titleRef.current.offsetHeight,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Spatial boundaries relative to layout center
  const startTextX = -(dimensions.width / 2);
  const endTextX = dimensions.width / 2;
  const UNDERLINE_Y = dimensions.height / 2; 

  // Dynamic target landing coordinates for your character asset
  const FINAL_X = endTextX + 40; 
  const FINAL_Y = UNDERLINE_Y + dimensions.height * 1.2; 
  const responsiveCharacterWidth = `${dimensions.height * 0.75}px`;

  // Generates the smooth mathematical dot movement track
  const generateGamePath = () => {
    const pointsX = [];
    const pointsY = [];
    const totalSteps = 150;

    for (let i = 0; i <= totalSteps; i++) {
      const t = i / totalSteps;

      if (t < 0.45) {
        // Phase 1: Playful introductory bounces
        const bounceProgress = t / 0.45;
        const startX = -window.innerWidth / 2; 
        pointsX.push(startX + (startTextX - startX) * bounceProgress);

        const bounceArc = Math.abs(Math.sin(bounceProgress * Math.PI * 3));
        const heightFade = 1 - bounceProgress * 0.4; 
        pointsY.push(UNDERLINE_Y - bounceArc * 140 * heightFade);

      } else if (t >= 0.45 && t <= 0.85) {
        // Phase 2: Drawing underline beneath your name
        const textProgress = (t - 0.45) / 0.40; 
        pointsX.push(startTextX + (endTextX - startTextX) * textProgress);
        pointsY.push(UNDERLINE_Y); 

      } else {
        // Phase 3: Final leap right into character transformation
        const dropProgress = (t - 0.85) / 0.15; 
        pointsX.push(endTextX + (FINAL_X - endTextX) * dropProgress);

        const jumpArc = Math.sin(dropProgress * Math.PI); 
        const gravityFall = Math.pow(dropProgress, 2);    
        pointsY.push(UNDERLINE_Y - (jumpArc * 25) + (gravityFall * (FINAL_Y - UNDERLINE_Y)));
      }
    }
    return { x: pointsX, y: pointsY };
  };

  const gamePath = generateGamePath();

  return (
    <motion.div 
      className="intro-gate-overlay"
      exit={{ y: '-100vh', opacity: 0 }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="intro-content">
        <div style={{ position: 'relative', display: 'inline-block' }}>
          
          {/* THE KINETIC DOT / CHARACTER AVATAR */}
          <AnimatePresence mode="wait">
            {!showStickFigure ? (
              <motion.div 
                key="ink-dot"
                className="wandering-ink-dot"
                animate={{ x: gamePath.x, y: gamePath.y }}
                transition={{
                  duration: 4.5, 
                  ease: "linear"
                }}
                onAnimationComplete={() => setShowStickFigure(true)}
              />
            ) : (
              <motion.div
                key="stick-character"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: [0.5, 1.1, 1] }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  width: responsiveCharacterWidth, 
                  height: 'auto',
                  top: '50%',
                  left: '50%',
                  x: FINAL_X,
                  y: FINAL_Y,
                  transform: 'translate(-50%, -85%)',
                  zIndex: 20
                }}
              >
                {/* Your custom stick figure layout vector asset */}
                <img src={stickFigureSvg} alt="Character Avatar" style={{ width: '100%' }} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* CRAWLING HANDWRITTEN TITLE EXPOSURE */}
          <h1 ref={titleRef} className="intro-title" aria-label={nameStr}>
            {nameStr.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 2.025 + (index * 0.13), 
                  duration: 0.15
                }}
                style={{ 
                  display: "inline-block", 
                  whiteSpace: letter === " " ? "pre" : "normal" 
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* SUBTITLE */}
        <motion.p 
          className="intro-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.6, duration: 0.7 }}
        >
          UX Researcher & Learning Scientist
        </motion.p>
        
        {/* INTERACTIVE NAVIGATION ACTION */}
        <motion.button 
          className="start-button"
          onClick={onStart}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.9, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Open Sketchbook
        </motion.button>
      </div>
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

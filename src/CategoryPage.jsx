// CategoryPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CATEGORIES_DATA } from './projects';

export default function CategoryPage({ projects }) {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const categoryMeta = CATEGORIES_DATA[categoryId] || {
    title: `${categoryId} Projects`,
    description: "Exploring creative technologies, human interface design, and systems engineering architectures.",
    heroImage: "/assets/images/default-hero.jpg"
  };

  const filteredProjectKeys = Object.keys(projects).filter(key => 
    projects[key].category === categoryId
  );

  return (
    <motion.div 
      className="category-page-layout"
      style={{
        backgroundColor: '#F7F4EE',
        color: '#1A1A1A',
        minHeight: '100vh',
        padding: '2.5rem 4rem',
        fontFamily: '"Patrick Hand", cursive, sans-serif'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Navigation & Header Breadcrumb */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <button 
          onClick={() => navigate('/')}
          style={{
            background: '#FFFFFF',
            border: '2px solid #1A1A1A',
            borderRadius: '20px 8px 18px 12px/12px 18px 12px 20px',
            padding: '0.6rem 1.4rem',
            fontFamily: 'inherit',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#1A1A1A',
            cursor: 'pointer',
            boxShadow: '3px 3px 0px #1A1A1A'
          }}
        >
          ← Back to Landscape
        </button>

        <span style={{ 
          fontSize: '1.2rem', 
          fontWeight: 'bold', 
          color: '#1A1A1A',
          letterSpacing: '0.05em' 
        }}>
          CATEGORY // {categoryId?.toUpperCase()}
        </span>
      </div>

      {/* Category Hero Section */}
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          margin: '0 0 1rem 0',
          fontWeight: 'bold',
          color: '#1A1A1A',
          letterSpacing: '1px'
        }}>
          {categoryMeta.title}
        </h1>
        <p style={{ 
          maxWidth: '720px', 
          margin: '0 auto', 
          fontSize: '1.25rem', 
          lineHeight: '1.6',
          color: '#2D2D2D',
          fontFamily: 'system-ui, -apple-system, "Inter", sans-serif'
        }}>
          {categoryMeta.description}
        </p>
      </header>

      {/* Project Cards Section */}
      <section style={{ maxWidth: '950px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {filteredProjectKeys.map((key) => {
          const project = projects[key];
          
          // Fallback sequence: check cardImage -> heroImage -> heroVideo -> first section image
          const mediaSrc = project.cardImage || project.heroImage || project.heroVideo || project.sections?.[0]?.image;
          const isVideo = typeof mediaSrc === 'string' && mediaSrc.match(/\.(mp4|webm|ogg)$/i);

          return (
            <motion.div 
              key={key} 
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => navigate(`/project/${key}`)}
              style={{
                backgroundColor: '#FFFFFF',
                border: '2.5px solid #1A1A1A',
                borderRadius: '14px',
                padding: '2rem',
                display: 'grid',
                // First column takes flexible remaining space; second adapts to max-content size of media
                gridTemplateColumns: '1fr max-content',
                gap: '2.5rem',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: '6px 6px 0px #1A1A1A'
              }}
            >
              {/* Text Information Column */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ 
                  fontSize: '1.1rem', 
                  color: '#1A1A1A', 
                  fontWeight: 'bold', 
                  marginBottom: '0.4rem',
                  display: 'inline-block'
                }}>
                  View Case Study →
                </span>

                <h2 style={{ 
                  fontSize: '2.5rem', 
                  margin: '0 0 0.8rem 0', 
                  fontWeight: 'bold',
                  color: '#1A1A1A',
                  lineHeight: '1.1'
                }}>
                  {project.title}
                </h2>

                <div style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.5', 
                  color: '#333333', 
                  margin: '0 0 1.5rem 0',
                  fontFamily: 'system-ui, -apple-system, "Inter", sans-serif'
                }}
                dangerouslySetInnerHTML={{ __html: project.quickPitch }}
                />
                  {/* {project.quickPitch}
                </p> */}
                
                {/* Tech Stack Tags */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.techStack?.map((tech, idx) => (
                    <span 
                      key={idx} 
                      style={{
                        background: '#F0EBDC',
                        color: '#1A1A1A',
                        fontWeight: '600',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        border: '1.5px solid #1A1A1A',
                        fontFamily: 'system-ui, -apple-system, "Inter", sans-serif'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic Aspect Ratio Media Column */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '360px' // Caps width so ultra-wide images don't crowd the text
              }}>
                {mediaSrc ? (
                  isVideo ? (
                    <video 
                      src={mediaSrc} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      style={{ 
                        width: '100%',
                        height: 'auto',
                        maxHeight: '260px',
                        objectFit: 'contain', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                      }}
                    />
                  ) : (
                    <img 
                      src={mediaSrc} 
                      alt={project.title} 
                      onError={(e) => {
                        console.error("Failed to load image for project:", key, mediaSrc);
                        e.target.style.display = 'none';
                      }}
                      style={{ 
                        width: '100%',
                        height: 'auto',
                        maxHeight: '260px',
                        objectFit: 'contain', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                      }}
                    />
                  )
                ) : (
                  <div style={{
                    width: '240px',
                    height: '160px',
                    backgroundColor: '#EAE5D9',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666666',
                    fontSize: '0.9rem'
                  }}>
                    No Preview Available
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </section>
    </motion.div>
  );
}


// OLD LAYOUT
// 
// // CategoryPage.jsx
// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { CATEGORIES_DATA } from './projects';

// export default function CategoryPage({ projects }) {
//   const { categoryId } = useParams();
//   const navigate = useNavigate();

//   const categoryMeta = CATEGORIES_DATA[categoryId] || {
//     title: `${categoryId} Projects`,
//     description: "Exploring creative technologies, human interface design, and systems engineering architectures.",
//     heroImage: "/assets/images/default-hero.jpg"
//   };

//   const filteredProjectKeys = Object.keys(projects).filter(key => 
//     projects[key].category === categoryId
//   );

//   return (
//     <motion.div 
//       className="category-page-layout"
//       style={{
//         backgroundColor: '#F7F4EE',
//         color: '#1A1A1A',
//         minHeight: '100vh',
//         padding: '2.5rem 4rem',
//         fontFamily: '"Patrick Hand", cursive, sans-serif'
//       }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       {/* Navigation & Header Breadcrumb */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
//         <button 
//           onClick={() => navigate('/')}
//           style={{
//             background: '#FFFFFF',
//             border: '2px solid #1A1A1A',
//             borderRadius: '20px 8px 18px 12px/12px 18px 12px 20px',
//             padding: '0.6rem 1.4rem',
//             fontFamily: 'inherit',
//             fontSize: '1.2rem',
//             fontWeight: 'bold',
//             color: '#1A1A1A',
//             cursor: 'pointer',
//             boxShadow: '3px 3px 0px #1A1A1A'
//           }}
//         >
//           ← Back to Landscape
//         </button>

//         <span style={{ 
//           fontSize: '1.2rem', 
//           fontWeight: 'bold', 
//           color: '#1A1A1A',
//           letterSpacing: '0.05em' 
//         }}>
//           CATEGORY // {categoryId?.toUpperCase()}
//         </span>
//       </div>

//       {/* Category Hero Section */}
//       <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
//         <h1 style={{ 
//           fontSize: '4rem', 
//           margin: '0 0 1rem 0',
//           fontWeight: 'bold',
//           color: '#1A1A1A',
//           letterSpacing: '1px'
//         }}>
//           {categoryMeta.title}
//         </h1>
//         <p style={{ 
//           maxWidth: '720px', 
//           margin: '0 auto', 
//           fontSize: '1.25rem', 
//           lineHeight: '1.6',
//           color: '#2D2D2D',
//           fontFamily: 'system-ui, -apple-system, "Inter", sans-serif'
//         }}>
//           {categoryMeta.description}
//         </p>
//       </header>

//       {/* Project Cards Section */}
//       <section style={{ maxWidth: '950px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
//         {filteredProjectKeys.map((key) => {
//           const project = projects[key];
          
//           // Fallback sequence: check cardImage -> heroImage -> heroVideo -> first section image
//           const mediaSrc = project.cardImage || project.heroImage || project.heroVideo || project.sections?.[0]?.image;
//           const isVideo = typeof mediaSrc === 'string' && mediaSrc.match(/\.(mp4|webm|ogg)$/i);

//           return (
//             <motion.div 
//               key={key} 
//               whileHover={{ y: -4, transition: { duration: 0.2 } }}
//               onClick={() => navigate(`/project/${key}`)}
//               style={{
//                 backgroundColor: '#FFFFFF',
//                 border: '2.5px solid #1A1A1A',
//                 borderRadius: '14px',
//                 padding: '2rem',
//                 display: 'grid',
//                 gridTemplateColumns: '1fr 320px',
//                 gap: '2.5rem',
//                 alignItems: 'center',
//                 cursor: 'pointer',
//                 boxShadow: '6px 6px 0px #1A1A1A'
//               }}
//             >
//               {/* Text Information Column */}
//               <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                 <span style={{ 
//                   fontSize: '1.1rem', 
//                   color: '#1A1A1A', 
//                   fontWeight: 'bold', 
//                   marginBottom: '0.4rem',
//                   display: 'inline-block'
//                 }}>
//                   View Case Study →
//                 </span>

//                 <h2 style={{ 
//                   fontSize: '2.5rem', 
//                   margin: '0 0 0.8rem 0', 
//                   fontWeight: 'bold',
//                   color: '#1A1A1A',
//                   lineHeight: '1.1'
//                 }}>
//                   {project.title}
//                 </h2>

//                 <p style={{ 
//                   fontSize: '1.1rem', 
//                   lineHeight: '1.5', 
//                   color: '#333333', 
//                   margin: '0 0 1.5rem 0',
//                   fontFamily: 'system-ui, -apple-system, "Inter", sans-serif'
//                 }}>
//                   {project.quickPitch}
//                 </p>
                
//                 {/* Tech Stack Tags */}
//                 <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
//                   {project.techStack?.map((tech, idx) => (
//                     <span 
//                       key={idx} 
//                       style={{
//                         background: '#F0EBDC',
//                         color: '#1A1A1A',
//                         fontWeight: '600',
//                         padding: '0.3rem 0.8rem',
//                         borderRadius: '6px',
//                         fontSize: '0.9rem',
//                         border: '1.5px solid #1A1A1A',
//                         fontFamily: 'system-ui, -apple-system, "Inter", sans-serif'
//                       }}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Unboxed Image / Video Column */}
//               <div style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 width: '100%',
//                 minHeight: '200px',
//                 overflow: 'hidden'
//               }}>
//                 {mediaSrc ? (
//                   isVideo ? (
//                     <video 
//                       src={mediaSrc} 
//                       autoPlay 
//                       loop 
//                       muted 
//                       playsInline
//                       style={{ 
//                         width: '100%', 
//                         height: '200px', 
//                         objectFit: 'cover', 
//                         borderRadius: '8px',
//                         boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
//                       }}
//                     />
//                   ) : (
//                     <img 
//                       src={mediaSrc} 
//                       alt={project.title} 
//                       onError={(e) => {
//                         console.error("Failed to load image for project:", key, mediaSrc);
//                         e.target.style.display = 'none';
//                       }}
//                       style={{ 
//                         width: '100%', 
//                         height: '200px', 
//                         objectFit: 'cover', 
//                         borderRadius: '8px',
//                         boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
//                       }}
//                     />
//                   )
//                 ) : (
//                   <div style={{
//                     width: '100%',
//                     height: '200px',
//                     backgroundColor: '#EAE5D9',
//                     borderRadius: '8px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: '#666666',
//                     fontSize: '0.9rem'
//                   }}>
//                     No Preview Available
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           );
//         })}
//       </section>
//     </motion.div>
//   );
// }

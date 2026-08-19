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
      <div 
        style={{ 
          minHeight: '100vh', 
          backgroundColor: '#F7F4EE', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontFamily: '"Patrick Hand", cursive, sans-serif'
        }}
      >
        <p style={{ fontSize: '1.8rem', color: '#1A1A1A', marginBottom: '1rem' }}>
          Project details could not be found.
        </p>
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
          Return Home
        </button>
      </div>
    );
  }

  const heroMediaSource = project.heroVideo || project.heroImage;
  const isHeroVideo = project.heroVideo || (typeof project.heroImage === 'string' && project.heroImage.match(/\.(mp4|webm|ogg)$/i));

  return (
    <motion.div 
      className="project-page-layout"
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
      {/* Dynamic Back Navigation Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <button 
          onClick={() => navigate(`/category/${project.category}`)}
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
          ← Back to {project.category}
        </button>

        <span style={{ 
          fontSize: '1.2rem', 
          fontWeight: 'bold', 
          color: '#1A1A1A',
          letterSpacing: '0.05em' 
        }}>
          CASE STUDY // {project.category?.toUpperCase()}
        </span>
      </div>

      {/* Main Project Title Block */}
      <header style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          margin: '0 0 1.8rem 0',
          fontWeight: 'bold',
          color: '#1A1A1A',
          letterSpacing: '1px'
        }}>
          {project.title}
        </h1>

        {/* Metadata Badges */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          flexWrap: 'wrap',
          marginTop: '1.2rem',
          marginBottom: '2.5rem' 
        }}>
          <div style={{
            background: '#FFFFFF',
            border: '1.5px solid #1A1A1A',
            padding: '0.4rem 1rem',
            borderRadius: '8px',
            boxShadow: '2px 2px 0px #1A1A1A',
            fontSize: '1.1rem'
          }}>
            <strong>Role:</strong> {project.role}
          </div>

          <div style={{
            background: '#FFFFFF',
            border: '1.5px solid #1A1A1A',
            padding: '0.4rem 1rem',
            borderRadius: '8px',
            boxShadow: '2px 2px 0px #1A1A1A',
            fontSize: '1.1rem'
          }}>
            <strong>Tech:</strong> {project.techStack?.join(', ')}
          </div>
        </div>

        {/* Polaroid Hero Frame */}
        {heroMediaSource && (
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: '#FAF8F5',
            border: '2.5px solid #1A1A1A',
            padding: '1rem 1rem 2.5rem 1rem',
            boxShadow: '6px 6px 0px #1A1A1A',
            borderRadius: '12px'
          }}>
            {isHeroVideo ? (
              <video 
                src={heroMediaSource} 
                autoPlay 
                loop 
                muted 
                playsInline
                controls
                style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'contain', borderRadius: '6px' }}
              />
            ) : (
              <img 
                src={heroMediaSource} 
                alt={project.title} 
                style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'contain', borderRadius: '6px' }}
              />
            )}
          </div>
        )}
      </header>

      {/* Pitch Summary Paragraph */}
      <section style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'left' }}>
        <div style={{ 
          fontSize: '1.3rem', 
          lineHeight: '1.6', 
          color: '#2D2D2D',
          fontFamily: 'system-ui, -apple-system, "Inter", sans-serif',
          textAlign: 'left',
          whiteSpace: 'pre-line'
        }}
        dangerouslySetInnerHTML={{ __html: project.quickPitch }}
        />
          {/* {project.quickPitch} */}
        {/* </p> */}
      </section>

      {/* Content Section Blocks */}
      <section style={{ maxWidth: '950px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {project.sections?.map((section, index) => {
          const isImageLeft = section.imagePosition === 'left';
          
          // Filter out undefined/null/empty media strings
          const mediaList = (section.images || (section.image ? [section.image] : [])).filter(Boolean);
          const hasMedia = mediaList.length > 0;
          const isHorizontal = section.layout === 'horizontal';

          return (
            <motion.div 
              key={index} 
              style={{
                display: 'grid',
                // If media exists, use 2 columns; otherwise, single full-width column
                gridTemplateColumns: hasMedia ? '1fr 1fr' : '1fr',
                gap: '3.5rem',
                alignItems: 'center'
              }}
            >
              {/* Text Column */}
              <div style={{ 
                order: (hasMedia && isImageLeft) ? 2 : 1, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                textAlign: 'left'
              }}>
                <h2 style={{ 
                  fontSize: '2.4rem', 
                  margin: '0 0 1rem 0', 
                  fontWeight: 'bold',
                  color: '#1A1A1A',
                  lineHeight: '1.1',
                  textAlign: 'left'
                }}>
                  {section.title}
                </h2>
                <div style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.6', 
                  color: '#333333',
                  margin: 0,
                  fontFamily: 'system-ui, -apple-system, "Inter", sans-serif',
                  whiteSpace: 'pre-line', // Preserves bullet points / line breaks cleanly if present
                  textAlign: 'left'
                }}
                dangerouslySetInnerHTML={{ __html: section.text }}
                />
                  {/* {section.text} */}
                {/* </div> */}
              </div>

              {/* Media Gallery Column (Renders only if media exists) */}
              {hasMedia && (
                <div style={{ 
                  order: isImageLeft ? 1 : 2,
                  display: 'flex',
                  flexDirection: isHorizontal ? 'row' : 'column',
                  gap: '1rem',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  {mediaList.map((src, imgIdx) => {
                    const isVideo = typeof src === 'string' && src.match(/\.(mp4|webm|ogg)$/i);

                    const style = {
                      width: '100%',
                      height: 'auto',
                      maxHeight: isHorizontal ? '260px' : '360px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                    };

                    return isVideo ? (
                      <video
                        key={imgIdx}
                        src={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        style={style}
                        // style={{
                        //   width: '100%',
                        //   height: 'auto',
                        //   maxHeight: isHorizontal ? '260px' : '360px',
                        //   objectFit: 'contain',
                        //   borderRadius: '8px',
                        //   boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                        // }}
                      />
                    ) : (
                      <img 
                        key={imgIdx}
                        src={src} 
                        alt={`${section.title} media ${imgIdx + 1}`}
                        style={style}
                        // style={{ 
                        //   width: '100%', 
                        //   maxHeight: isHorizontal ? '220px' : '260px',
                        //   objectFit: 'cover', 
                        //   borderRadius: '8px',
                        //   boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                        // }}
                      />
                    );
                  })}
                </div>
              )}
            </motion.div>
          );
        })}
      </section>
    </motion.div>
  );
}

// // ProjectPage.jsx
// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// export default function ProjectPage({ projects }) {
//   const { projectId } = useParams();
//   const navigate = useNavigate();
  
//   const project = projects[projectId];

//   if (!project) {
//     return (
//       <div 
//         style={{ 
//           minHeight: '100vh', 
//           backgroundColor: '#F7F4EE', 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'center', 
//           justifyContent: 'center',
//           fontFamily: '"Patrick Hand", cursive, sans-serif'
//         }}
//       >
//         <p style={{ fontSize: '1.8rem', color: '#1A1A1A', marginBottom: '1rem' }}>
//           Project details could not be found.
//         </p>
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
//           Return Home
//         </button>
//       </div>
//     );
//   }

//   const heroMediaSource = project.heroVideo || project.heroImage;
//   const isHeroVideo = project.heroVideo || (typeof project.heroImage === 'string' && project.heroImage.match(/\.(mp4|webm|ogg)$/i));

//   return (
//     <motion.div 
//       className="project-page-layout"
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
//       {/* Dynamic Back Navigation Header */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
//         <button 
//           onClick={() => navigate(`/category/${project.category}`)}
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
//           ← Back to {project.category}
//         </button>

//         <span style={{ 
//           fontSize: '1.2rem', 
//           fontWeight: 'bold', 
//           color: '#1A1A1A',
//           letterSpacing: '0.05em' 
//         }}>
//           CASE STUDY // {project.category?.toUpperCase()}
//         </span>
//       </div>

//       {/* Main Project Title Block */}
//       <header style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
//         <h1 style={{ 
//           fontSize: '4rem', 
//           margin: '0 0 1.8rem 0',
//           fontWeight: 'bold',
//           color: '#1A1A1A',
//           letterSpacing: '1px'
//         }}>
//           {project.title}
//         </h1>

//         {/* Metadata Badges */}
//         <div style={{ 
//           display: 'flex', 
//           justifyContent: 'center', 
//           gap: '1rem', 
//           flexWrap: 'wrap',
//           marginTop: '1.2rem',
//           marginBottom: '2.5rem' 
//         }}>
//           <div style={{
//             background: '#FFFFFF',
//             border: '1.5px solid #1A1A1A',
//             padding: '0.4rem 1rem',
//             borderRadius: '8px',
//             boxShadow: '2px 2px 0px #1A1A1A',
//             fontSize: '1.1rem'
//           }}>
//             <strong>Role:</strong> {project.role}
//           </div>

//           <div style={{
//             background: '#FFFFFF',
//             border: '1.5px solid #1A1A1A',
//             padding: '0.4rem 1rem',
//             borderRadius: '8px',
//             boxShadow: '2px 2px 0px #1A1A1A',
//             fontSize: '1.1rem'
//           }}>
//             <strong>Tech:</strong> {project.techStack?.join(', ')}
//           </div>
//         </div>

//         {/* Polaroid Hero Frame */}
//         {heroMediaSource && (
//           <div style={{
//             maxWidth: '900px',
//             margin: '0 auto',
//             background: '#FAF8F5',
//             border: '2.5px solid #1A1A1A',
//             padding: '1rem 1rem 2.5rem 1rem',
//             boxShadow: '6px 6px 0px #1A1A1A',
//             borderRadius: '12px'
//           }}>
//             {isHeroVideo ? (
//               <video 
//                 src={heroMediaSource} 
//                 autoPlay 
//                 loop 
//                 muted 
//                 playsInline
//                 controls
//                 style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', borderRadius: '6px' }}
//               />
//             ) : (
//               <img 
//                 src={heroMediaSource} 
//                 alt={project.title} 
//                 style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', borderRadius: '6px' }}
//               />
//             )}
//           </div>
//         )}
//       </header>

//       {/* Pitch Summary Paragraph */}
//       <section style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'left' }}>
//         <p style={{ 
//           fontSize: '1.3rem', 
//           lineHeight: '1.6', 
//           color: '#2D2D2D',
//           fontFamily: 'system-ui, -apple-system, "Inter", sans-serif',
//           textAlign: 'left'
//         }}>
//           {project.quickPitch}
//         </p>
//       </section>

//       {/* Alternating Two-Column Content Blocks */}
//       <section style={{ maxWidth: '950px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
//         {project.sections?.map((section, index) => {
//           const isImageLeft = section.imagePosition === 'left';
          
//           const mediaList = section.images || (section.image ? [section.image] : []);
//           const isHorizontal = section.layout === 'horizontal';

//           return (
//             <motion.div 
//               key={index} 
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: '1fr 1fr',
//                 gap: '3.5rem',
//                 alignItems: 'center'
//               }}
//             >
//               {/* Text Column with explicit left alignment */}
//               <div style={{ 
//                 order: isImageLeft ? 2 : 1, 
//                 display: 'flex', 
//                 flexDirection: 'column', 
//                 justifyContent: 'center',
//                 textAlign: 'left'
//               }}>
//                 <h2 style={{ 
//                   fontSize: '2.4rem', 
//                   margin: '0 0 1rem 0', 
//                   fontWeight: 'bold',
//                   color: '#1A1A1A',
//                   lineHeight: '1.1',
//                   textAlign: 'left'
//                 }}>
//                   {section.title}
//                 </h2>
//                 <p style={{ 
//                   fontSize: '1.1rem', 
//                   lineHeight: '1.6', 
//                   color: '#333333',
//                   margin: 0,
//                   fontFamily: 'system-ui, -apple-system, "Inter", sans-serif',
//                   textAlign: 'left'
//                 }}>
//                   {section.text}
//                 </p>
//               </div>

//               {/* Media Gallery Column */}
//               <div style={{ 
//                 order: isImageLeft ? 1 : 2,
//                 display: 'flex',
//                 flexDirection: isHorizontal ? 'row' : 'column',
//                 gap: '1rem',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//               }}>
//                 {mediaList.map((src, imgIdx) => {
//                   const isVideo = typeof src === 'string' && src.match(/\.(mp4|webm|ogg)$/i);

//                   return isVideo ? (
//                     <video
//                       key={imgIdx}
//                       src={src}
//                       autoPlay
//                       loop
//                       muted
//                       playsInline
//                       controls
//                       style={{
//                         width: '100%',
//                         maxHeight: isHorizontal ? '220px' : '260px',
//                         objectFit: 'cover',
//                         borderRadius: '8px',
//                         boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
//                       }}
//                     />
//                   ) : (
//                     <img 
//                       key={imgIdx}
//                       src={src} 
//                       alt={`${section.title} media ${imgIdx + 1}`} 
//                       style={{ 
//                         width: '100%', 
//                         maxHeight: isHorizontal ? '220px' : '260px',
//                         objectFit: 'cover', 
//                         borderRadius: '8px',
//                         boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
//                       }}
//                     />
//                   );
//                 })}
//               </div>
//             </motion.div>
//           );
//         })}
//       </section>
//     </motion.div>
//   );
// }

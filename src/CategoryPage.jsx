import { PROJECTS_DATA } from './projects';

// inside CategoryPage.jsx
const CategoryPage = () => {
  const { categoryId } = useParams();
  const filteredProjects = PROJECTS_DATA.filter(p => p.category === categoryId);

  return (
    <div className="category-container">
      <h1>{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Portfolio</h1>
      
      <div className="project-list">
        {filteredProjects.map((project) => (
          <section key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <div className="meta-badge-row">
              <span className="badge-role">{project.role}</span>
              {project.tools.map(tool => <span key={tool} className="badge-tool">{tool}</span>)}
            </div>

            <p className="project-outcome"><strong>Impact:</strong> {project.outcome}</p>

            <div className="project-details-grid">
              <div className="detail-item">
                <h4>The "Why" (Pedagogy)</h4>
                <p>{project.pedagogy}</p>
              </div>
              <div className="detail-item">
                <h4>The "Testing" (Evaluation)</h4>
                <p>{project.testing}</p>
              </div>
              {/* Add more sections for Proof and Collaboration here */}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
import projects from '../../data/projects';
import './Project.css';
import { db } from '../../firebase';
function Project() {
    // const projectsRef = ref(db, 'projects');
    return (
        <main className="projects">
            <h4 className="projects-title">Projects</h4>

            <section className="projects-section">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h4 className="project-title">{project.title}</h4>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map((tag) => (
                                <span key={tag} className="project-tag">{tag}</span>
                            ))}
                        </div>
                        <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
                            Ver en GitHub 
                        </a>
                        <a className="project-link demo" href={project.demo} target="_blank" rel="noreferrer">
                            Ver demo 
                        </a>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Project;
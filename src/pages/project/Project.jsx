import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { ref, onValue } from 'firebase/database';
import './Project.css';

function Project() {

    const [projects, setProjects] = useState([]);

    const [filtro, setFiltro] = useState("Todos");

    useEffect(() => {

        const projectsRef = ref(db, 'projects');

        onValue(projectsRef, (snapshot) => {
            const data = snapshot.val(); 
            if (data) {
                const list = Object.values(data); 
                setProjects(list); 
            }
        });

    }, []); 

    const projectsFiltrados = filtro === "Todos"
        ? projects
        : projects.filter((p) => p.tags.includes(filtro));

    return (
        <main className="projects">
            <h4 className="projects-title">Projects</h4>

            <div className="projects-filtros">
                <button className={`filtro-btn ${filtro === "Todos" ? "activo" : ""}`} onClick={() => setFiltro("Todos")}>
                    Todos
                </button>
                <button className={`filtro-btn ${filtro === "React" ? "activo" : ""}`} onClick={() => setFiltro("React")}>
                    React
                </button>
                <button className={`filtro-btn ${filtro === "Angular" ? "activo" : ""}`} onClick={() => setFiltro("Angular")}>
                    Angular
                </button>
                <button className={`filtro-btn ${filtro === "JS" ? "activo" : ""}`} onClick={() => setFiltro("JS")}>
                    JavaScript
                </button>
            </div>

            <section className="projects-section">
                {projectsFiltrados.map((project, index) => (
                    <div key={index} className="project-card">
                        <h4 className="project-title">{project.title}</h4>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tags">
                            {project.tags.split(',').map((tag) => (
                                <span key={tag} className="project-tag">{tag.trim()}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
                                Ver en GitHub
                            </a>
                            <a className="project-link demo" href={project.demo} target="_blank" rel="noreferrer">
                                Ver demo
                            </a>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default Project;
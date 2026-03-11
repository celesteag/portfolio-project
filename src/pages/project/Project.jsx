import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { ref, onValue, push, remove, update } from 'firebase/database';
import './Project.css';

function Project() {

  // useState guarda los projects que vienen de Firebase
  // empieza vacío [] y cuando llegan los datos se actualiza
  const [projects, setProjects] = useState([]);

  // useState para el filtro, empieza en "Todos"
  const [filtro, setFiltro] = useState("Todos");

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    tags: "",
    repo: "",
    demo: ""

  });

  const [isVisible, setIsVisible] = useState(false);

  const addProject = async () => {
    const projectsRef = ref(db, 'projects');
    await push(projectsRef, newProject);

    setNewProject({ title: "", description: "", tags: "", repo: "", demo: "" });
  }

  // useEffect se ejecuta una vez cuando el componente carga
  useEffect(() => {

    // ref apunta a la colección "projects" en Firebase
    const projectsRef = ref(db, 'projects');

    // onValue escucha Firebase y cuando llegan datos ejecuta la función
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val(); // datos de Firebase como objeto
      if (data) {
        const list = Object.values(data); // convierte el objeto en array
        setProjects(list); // guarda los datos en el estado
      }
    });

  }, []); // [] = solo se ejecuta una vez al cargar

  // Filtra los projects según el tag seleccionado
  const projectsFiltrados = filtro === "Todos"
    ? projects
    : projects.filter((p) => p.tags.toLowerCase().includes(filtro.toLowerCase()));

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

      <button
        className="toggle-button"
        onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Ocultar Formulario' : 'Mostrar Formulario'}
      </button>

      {isVisible && (
        <div className='add-form'>
          <input placeholder='Título' value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}>
          </input>
          <input placeholder='Descripción' value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}>
          </input>
          <input placeholder='Tags' value={newProject.tags}
            onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}>
          </input>
          <input placeholder='Repositorio GitHub' value={newProject.repo}
            onChange={(e) => setNewProject({ ...newProject, repo: e.target.value })}>
          </input>
          <input placeholder='Demo' value={newProject.demo}
            onChange={(e) => setNewProject({ ...newProject, demo: e.target.value })}>
          </input>
          <button onClick={addProject}>Añadir Proyecto</button>
        </div>
      )}


    </main>
  );
}

export default Project;
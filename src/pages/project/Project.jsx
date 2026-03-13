import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { ref, onValue, push, remove, update } from 'firebase/database';
import './Project.css';

const emptyForm = { title: "", description: "", tags: "", repo: "", demo: "" };

function Project() {
  const [projects, setProjects] = useState([]);
  const [filtro, setFiltro] = useState("Todos");
  const [newProject, setNewProject] = useState(emptyForm);
  const [isVisible, setIsVisible] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const projectsRef = ref(db, 'projects');
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.entries(data).map(([id, value]) => ({ id, ...value }));
        setProjects(list);
      } else {
        setProjects([]);
      }
    });
  }, []);

  // --- Validación ---
  const validate = () => {
    const newErrors = {};
    if (!newProject.title.trim()) newErrors.title = "El título es obligatorio";
    if (!newProject.description.trim()) newErrors.description = "La descripción es obligatoria";
    if (!newProject.tags.trim()) newErrors.tags = "Añade al menos un tag";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Añadir ---
  const addProject = async () => {
    if (!validate()) return;
    const projectsRef = ref(db, 'projects');
    await push(projectsRef, newProject);
    setNewProject(emptyForm);
    setErrors({});
    setIsVisible(false);
  };

  // --- Editar: abre formulario con datos del proyecto ---
  const startEdit = (project) => {
    setEditingId(project.id);
    setNewProject({
      title: project.title,
      description: project.description,
      tags: project.tags,
      repo: project.repo,
      demo: project.demo,
    });
    setErrors({});
    setIsVisible(true);
  };

  // --- Guardar cambios ---
  const updateProject = async () => {
    if (!validate()) return;
    const projectRef = ref(db, `projects/${editingId}`);
    await update(projectRef, newProject);
    setEditingId(null);
    setNewProject(emptyForm);
    setErrors({});
    setIsVisible(false);
  };

  // --- Cancelar edición ---
  const cancelEdit = () => {
    setEditingId(null);
    setNewProject(emptyForm);
    setErrors({});
    setIsVisible(false);
  };

  // --- Eliminar con confirmación inline ---
  const deleteProject = async (id) => {
    const projectRef = ref(db, `projects/${id}`);
    await remove(projectRef);
    setConfirmDelete(null);
  };

  const projectsFiltrados = filtro === "Todos"
    ? projects
    : projects.filter((p) => p.tags.toLowerCase().includes(filtro.toLowerCase()));

  return (
    <main className="projects">
      <h4 className="projects-title">Proyectos</h4>

      <div className="projects-filtros">
        {["Todos", "React", "Angular", "JS"].map((f) => (
          <button
            key={f}
            className={`filtro-btn ${filtro === f ? "activo" : ""}`}
            onClick={() => setFiltro(f)}
          >
            {f === "JS" ? "JavaScript" : f}
          </button>
        ))}
      </div>

      <section className="projects-section">
        {projectsFiltrados.map((project) => (
          <div key={project.id} className="project-card">
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
              {project.demo && (
                <a className="project-link demo" href={project.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              )}
              <button className="project-link edit" onClick={() => startEdit(project)}>
                Editar
              </button>

              <button className="project-link delete" onClick={() => setConfirmDelete(project.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </section>

      <button className="toggle-button" onClick={() => {
        if (isVisible && editingId) cancelEdit();
        else setIsVisible(!isVisible);
      }}>
        {isVisible ? 'Ocultar Formulario' : 'Mostrar Formulario'}
      </button>

      {isVisible && (
        <div className="add-form">
          <input
            placeholder="Título *"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          />
          {errors.title && <span className="form-error">{errors.title}</span>}

          <input
            placeholder="Descripción *"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          />
          {errors.description && <span className="form-error">{errors.description}</span>}

          <input
            placeholder="Tags (ej: React, Firebase, JavaScript) *"
            value={newProject.tags}
            onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
          />
          {errors.tags && <span className="form-error">{errors.tags}</span>}

          <input
            placeholder="Repositorio GitHub"
            value={newProject.repo}
            onChange={(e) => setNewProject({ ...newProject, repo: e.target.value })}
          />
          <input
            placeholder="Demo"
            value={newProject.demo}
            onChange={(e) => setNewProject({ ...newProject, demo: e.target.value })}
          />

          {editingId ? (
            <>
              <button onClick={updateProject}>Guardar cambios</button>
              <button onClick={cancelEdit}>Cancelar</button>
            </>
          ) : (
            <button onClick={addProject}>Añadir Proyecto</button>
          )}
        </div>
      )}

      {confirmDelete && (
        <div className="modal-overlay">
          <div className="modal">
            <p>¿Seguro que quieres eliminar este proyecto?</p>
            <div className="modal-buttons">
              <button onClick={() => deleteProject(confirmDelete)}>Eliminar</button>
              <button onClick={() => setConfirmDelete(null)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Project;
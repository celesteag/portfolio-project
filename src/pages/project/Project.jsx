import { useState, useEffect } from 'react';
import './Project.css';

import { ref, onValue, push, update, remove } from "firebase/database";
import { db } from '../../firebase';

import { getProjectsOnce, saveProject } from '../../services/dataService';

import { parseJSON } from '../../utils/parseJSON';
import { parseCSV } from '../../utils/parseCSV';
import { parseXML } from '../../utils/parseXML';

import { exportJSON } from '../../utils/exportJSON';
import { exportCSV } from '../../utils/exportCSV';
import { exportXML } from '../../utils/exportXML';


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
    const projectsRef = ref(db, "projects");

    const unsubscribe = onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setProjects([]);
        return;
      }
      const list = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      setProjects(list);
    });

    return () => unsubscribe();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!newProject.title.trim()) newErrors.title = "El título es obligatorio";
    if (!newProject.description.trim()) newErrors.description = "La descripción es obligatoria";
    if (!newProject.tags.trim()) newErrors.tags = "Añade al menos un tag";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addProject = async () => {
    if (!validate()) return;
    await saveProject(newProject);
    setNewProject(emptyForm);
    setErrors({});
    setIsVisible(false);
  };

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

  const updateProject = async () => {
    if (!validate()) return;
    const projectRef = ref(db, `projects/${editingId}`);
    await update(projectRef, newProject);
    setEditingId(null);
    setNewProject(emptyForm);
    setErrors({});
    setIsVisible(false);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setNewProject(emptyForm);
    setErrors({});
    setIsVisible(false);
  };

  const deleteProject = async (id) => {
    const projectRef = ref(db, `projects/${id}`);
    await remove(projectRef);
    setConfirmDelete(null);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const text = event.target.result;
      let data = [];

      if (file.name.endsWith(".json")) data = parseJSON(text);
      if (file.name.endsWith(".csv")) data = parseCSV(text);
      if (file.name.endsWith(".xml")) data = parseXML(text);

      for (let project of data) {
        await saveProject(project);
      }
    };

    reader.readAsText(file);
  };

  const downloadFile = (content, type, filename) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };

  const handleExport = async (format) => {
    const data = await getProjectsOnce();

    let content;

    if (format === "json") {
      content = exportJSON(data);
      downloadFile(content, "application/json", "projects.json");
    }

    if (format === "csv") {
      content = exportCSV(data);
      downloadFile(content, "text/csv", "projects.csv");
    }

    if (format === "xml") {
      content = exportXML(data);
      downloadFile(content, "text/xml", "projects.xml");
    }
  };

  const projectsFiltrados = filtro === "Todos"
    ? projects
    : projects.filter((p) => p.tags.toLowerCase().includes(filtro.toLowerCase()));

  return (
    <main className="projects">
      <h4 className="projects-title">Proyectos</h4>

      <div className="import-export-container">
        <label className="custom-file-upload">
          <input type="file" onChange={handleImport} />
          Seleccionar archivo
        </label>

        <div className="export-buttons">
          <button className="filtro-btn" onClick={() => handleExport("json")}>Export JSON</button>
          <button className="filtro-btn" onClick={() => handleExport("csv")}>Export CSV</button>
          <button className="filtro-btn" onClick={() => handleExport("xml")}>Export XML</button>
        </div>
      </div>

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
              <a href={project.repo} className="project-link" target="_blank" rel="noreferrer">GitHub</a>

              {project.demo && (
                <a href={project.demo} className="project-link demo" target="_blank" rel="noreferrer">Demo</a>
              )}

              <button className="project-link edit" onClick={() => startEdit(project)}>Editar</button>
              <button className="project-link delete" onClick={() => setConfirmDelete(project.id)}>Eliminar</button>
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
            placeholder="Título"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          />
          {errors.title && <span>{errors.title}</span>}

          <input
            placeholder="Descripción"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          />
          {errors.description && <span>{errors.description}</span>}

          <input
            placeholder="Tags"
            value={newProject.tags}
            onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
          />
          {errors.tags && <span>{errors.tags}</span>}

          <input
            placeholder="Repo"
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
              <button onClick={updateProject}>Guardar</button>
              <button onClick={cancelEdit}>Cancelar</button>
            </>
          ) : (
            <button onClick={addProject}>Añadir</button>
          )}
        </div>
      )}
      {confirmDelete && (
        <div className="modal-overlay">
          <div className="modal">
            <p>¿Seguro que quieres eliminar este proyecto?</p>
            <div className="modal-buttons">
              <button className="project-link delete" onClick={() => deleteProject(confirmDelete)}>Eliminar</button>
              <button className="project-link edit" onClick={() => setConfirmDelete(null)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Project;
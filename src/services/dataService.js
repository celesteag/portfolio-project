import { db } from "../firebase";
import { ref, push, get, update, remove } from "firebase/database";

const baseRef = ref(db, "projects");

export const getProjectsOnce = async () => {
  const snapshot = await get(baseRef);
  
  if (!snapshot.exists()) return [];
  
  const data = snapshot.val();
  return Object.keys(data).map(key => ({
    id: key,
    ...data[key]
  }));
};

export const saveProjectService = async (project) => {
  await push(baseRef, project);
};

export const updateProjectService = async (id, project) => {
  const projectRef = ref(db, `projects/${id}`);
  await update(projectRef, project);
};

export const deleteProjectService = async (id) => {
  const projectRef = ref(db, `projects/${id}`);
  await remove(projectRef);
};


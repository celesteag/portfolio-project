import { db } from "../firebase";
import { ref, push, get } from "firebase/database";

const baseRef = ref(db, "projects");

export const saveProject = async (project) => {
  await push(baseRef, project);
};

export const getProjectsOnce = async () => {
  const baseRef = ref(db, "projects");
  const snapshot = await get(baseRef);
  
  if (!snapshot.exists()) return [];
  
  const data = snapshot.val();
  return Object.keys(data).map(key => ({
    id: key,
    ...data[key]
  }));
};
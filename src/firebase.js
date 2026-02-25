import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCY99sBULjNgGxDoiTCbmnguPwINn3VjnY",
  authDomain: "portfolio-project-lnd.firebaseapp.com",
  databaseURL: "https://portfolio-project-lnd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-project-lnd",
  storageBucket: "portfolio-project-lnd.firebasestorage.app",
  messagingSenderId: "503275648596",
  appId: "1:503275648596:web:7c0ef930e810d9704e1fc1",
  measurementId: "G-XZEDXSY5JV"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANAXKr4ovWaX6ZWb8Ai9wzq0iasoGBMuQ",
  authDomain: "todo-list-9407e.firebaseapp.com",
  projectId: "todo-list-9407e",
  storageBucket: "todo-list-9407e.appspot.com",
  messagingSenderId: "960183870853",
  appId: "1:960183870853:web:5d816c77550879f93610ec",
  measurementId: "G-NHEKGMJL10",
};
// If user didnt auth
const app = initializeApp(firebaseConfig);

// Initialize Firebase

const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };

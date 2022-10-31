// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

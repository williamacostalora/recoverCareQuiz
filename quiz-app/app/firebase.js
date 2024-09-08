// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR6QG9KzLtHbQ0thy0Kvrvj9XGRvpQafk",
  authDomain: "rcarequiz.firebaseapp.com",
  projectId: "rcarequiz",
  storageBucket: "rcarequiz.appspot.com",
  messagingSenderId: "61730031875",
  appId: "1:61730031875:web:21c40568a5b369f8cdc136",
  measurementId: "G-E2GLYGC8JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (database)
const db = getFirestore(app);

export { db };

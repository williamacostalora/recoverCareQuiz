// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
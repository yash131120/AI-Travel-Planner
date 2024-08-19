// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8T_pwJO5eR6EBOR0nVwjTJZ6VYiap4aU",
  authDomain: "ai-travel-planner-app-75263.firebaseapp.com",
  projectId: "ai-travel-planner-app-75263",
  storageBucket: "ai-travel-planner-app-75263.appspot.com",
  messagingSenderId: "484402572080",
  appId: "1:484402572080:web:3f98dce8e1469f566db6f5",
  measurementId: "G-F27ZY2HH2P",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

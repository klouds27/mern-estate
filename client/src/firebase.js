// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-dba96.firebaseapp.com",
  projectId: "mern-estate-dba96",
  storageBucket: "mern-estate-dba96.appspot.com",
  messagingSenderId: "496304755053",
  appId: "1:496304755053:web:b9dbb30dfee599b487ca64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
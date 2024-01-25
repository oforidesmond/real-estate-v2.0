// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-v2-7cda7.firebaseapp.com",
  projectId: "real-estate-v2-7cda7",
  storageBucket: "real-estate-v2-7cda7.appspot.com",
  messagingSenderId: "133876889226",
  appId: "1:133876889226:web:60b8ef7c2ae5e376ca1f73"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
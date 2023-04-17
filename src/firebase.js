// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA79qfAoqnMNUDB-jU_PGjYA-04vkTKuLY",
  authDomain: "movies-app-8f9f4.firebaseapp.com",
  projectId: "movies-app-8f9f4",
  storageBucket: "movies-app-8f9f4.appspot.com",
  messagingSenderId: "750229319002",
  appId: "1:750229319002:web:87309ccaa69adaf8ec1763",
  databaseURL: "https://movies-app-8f9f4-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);

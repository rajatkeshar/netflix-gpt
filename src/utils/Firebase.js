// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjHmW4S2poT1S6pumNCsKqB08laSemIlQ",
  authDomain: "netflixgpt-4a263.firebaseapp.com",
  projectId: "netflixgpt-4a263",
  storageBucket: "netflixgpt-4a263.appspot.com",
  messagingSenderId: "464135519866",
  appId: "1:464135519866:web:cd477f518ab1279a12c5c3",
  measurementId: "G-V2REHWTP27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
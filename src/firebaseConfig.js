// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK7-l3nOD6HSCtKPRYrknCY3DLV11uuws",
  authDomain: "althaf-portfolio-b189a.firebaseapp.com",
  projectId: "althaf-portfolio-b189a",
  storageBucket: "althaf-portfolio-b189a.appspot.com",
  messagingSenderId: "294172984799",
  appId: "1:294172984799:web:64790cb7fb69d2342af06a",
  measurementId: "G-E3H25X5T8V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
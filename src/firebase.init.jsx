// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMeAEciwj_v8ocZ_HaHpviib6VB3cbFcA",
  authDomain: "sadai-vandar.firebaseapp.com",
  projectId: "sadai-vandar",
  storageBucket: "sadai-vandar.appspot.com",
  messagingSenderId: "278735964740",
  appId: "1:278735964740:web:5758e7947ad11e1ee48a11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getApp(app)
export default app;
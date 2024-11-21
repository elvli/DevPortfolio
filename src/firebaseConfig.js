// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2AI_HblSn7FDgqEZVtBsbwrgPOwRqx_0",
  authDomain: "personalwebsite-5ce11.firebaseapp.com",
  projectId: "personalwebsite-5ce11",
  storageBucket: "personalwebsite-5ce11.firebasestorage.app",
  messagingSenderId: "1085940033612",
  appId: "1:1085940033612:web:30ea6038af995a1d606ce9",
  measurementId: "G-LVVFHW0HNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
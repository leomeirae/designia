// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "designai-ia.firebaseapp.com",
  projectId: "designai-ia",
  storageBucket: "designai-ia.firebasestorage.app",
  messagingSenderId: "96232450294",
  appId: "1:96232450294:web:92ff9bd9f039ddae17a4d7",
  measurementId: "G-H7NP34WBHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)

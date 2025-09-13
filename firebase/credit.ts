// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseError, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";

// Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.M_S_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_IDD,

  apiKey: "AIzaSyB_doT3lcrV3W_zTuW5aXk9NnWjwM-vzfc",
  authDomain: "hairy-sticker.firebaseapp.com",
  projectId: "hairy-sticker",
  storageBucket: "hairy-sticker.firebasestorage.app",
  messagingSenderId: "1083591136449",
  appId: "1:1083591136449:web:d5906d4fff080f49c8f040",
  measurementId: "G-CJ5GPMBBXB",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export default app;
export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGopZpWgpKtwouem8k4h_pG0xCFy_2qXE",
  authDomain: "coffee-store-app-2000f.firebaseapp.com",
  projectId: "coffee-store-app-2000f",
  storageBucket: "coffee-store-app-2000f.firebasestorage.app",
  messagingSenderId: "332347726399",
  appId: "1:332347726399:web:55e4e6b060240fc94a768a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
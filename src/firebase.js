// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVZ658S6flsFbt7IX5hV4shvntKR6wwJ4",
  authDomain: "realtime-chat-app-98d9c.firebaseapp.com",
  projectId: "realtime-chat-app-98d9c",
  storageBucket: "realtime-chat-app-98d9c.appspot.com",
  messagingSenderId: "114021808",
  appId: "1:114021808:web:a419ff008f78474448b275"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
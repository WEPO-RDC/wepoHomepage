// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7_hBghaB-oSPzUbZy2ULuc0vXqwnDGv4",
  authDomain: "waitlist-27036.firebaseapp.com",
  projectId: "waitlist-27036",
  storageBucket: "waitlist-27036.appspot.com",
  messagingSenderId: "818391263842",
  appId: "1:818391263842:web:b33fadb4295e0b455c3f3b",
  measurementId: "G-1X5GDNKQE8",
  databaseURL: "https://waitlist-27036-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db}
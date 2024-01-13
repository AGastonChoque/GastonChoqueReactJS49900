// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMmue5pHQoetHzSQWHKxlUfDd6WBeefBI",
  authDomain: "ecommerce49900-c8a51.firebaseapp.com",
  projectId: "ecommerce49900-c8a51",
  storageBucket: "ecommerce49900-c8a51.appspot.com",
  messagingSenderId: "77180238003",
  appId: "1:77180238003:web:a0831aaebd8dbaf25258c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
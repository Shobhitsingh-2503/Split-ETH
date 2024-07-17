// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgjF7TSH6m6TZbzEkjWy-aCngnrAHC-VQ",
  authDomain: "spliteth-b0858.firebaseapp.com",
  projectId: "spliteth-b0858",
  storageBucket: "spliteth-b0858.appspot.com",
  messagingSenderId: "560305276181",
  appId: "1:560305276181:web:64dba88a9076360984951c",
  measurementId: "G-621WRLQ7G9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

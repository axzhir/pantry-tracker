// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeo1qbh7vDMrsIMtsmuLQTdjuO6whF8fI",
  authDomain: "inventory-management-253ae.firebaseapp.com",
  projectId: "inventory-management-253ae",
  storageBucket: "inventory-management-253ae.appspot.com",
  messagingSenderId: "900255613176",
  appId: "1:900255613176:web:60881b08e39faeb820bb0d",
  measurementId: "G-6BD8LY68XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}
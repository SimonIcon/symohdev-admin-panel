
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "portfolio-74d4b.firebaseapp.com",
    projectId: "portfolio-74d4b",
    storageBucket: "portfolio-74d4b.appspot.com",
    messagingSenderId: "1038710423310",
    appId: "1:1038710423310:web:3fdc9628b74d8f2061215f",
    measurementId: "G-NHTPHTE5G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: "AIzaSyB0Z-w4YRdKFobJqGTFyQjxkZdy3XtM0bA",
  authDomain: "proyecto-final-talentotech.firebaseapp.com",
  projectId: "proyecto-final-talentotech",
  storageBucket: "proyecto-final-talentotech.firebasestorage.app",
  messagingSenderId: "1020721642123",
  appId: "1:1020721642123:web:d29382c3552081fa8e328e"
}; */

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta Firestore
export const db = getFirestore(app);

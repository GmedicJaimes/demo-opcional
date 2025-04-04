import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDaZS38DrFiRjdfN0hyzKpyex-9IlM_57Q",
  authDomain: "exodus-39c6e.firebaseapp.com",
  projectId: "exodus-39c6e",
  storageBucket: "exodus-39c6e.firebasestorage.app",
  messagingSenderId: "280896679977",
  appId: "1:280896679977:web:dcae8743a6b7c471742c38",
  measurementId: "G-LL1G4ZD26E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

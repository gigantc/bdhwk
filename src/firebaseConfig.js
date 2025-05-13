import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATo3Z-GwHAUC4vrN51ZC0SSAgoubDzLlE",
  authDomain: "bdhwk-5daf0.firebaseapp.com",
  projectId: "bdhwk-5daf0",
  storageBucket: "bdhwk-5daf0.firebasestorage.app",
  messagingSenderId: "361533796037",
  appId: "1:361533796037:web:e4288ba3644b75bab80aac"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "missing",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "missing",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "missing",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "missing",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "missing",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "missing",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "missing"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics, Firestore, and Storage
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const db = getFirestore(app);
export const storage = getStorage(app);

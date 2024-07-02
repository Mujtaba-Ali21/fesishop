import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Add this import for Firestore

const firebaseConfig = {
  apiKey: "AIzaSyA6iKUr-oecL00knNd5X_Kruf4Is9sIC54",
  authDomain: "fesi-shop.firebaseapp.com",
  projectId: "fesi-shop",
  storageBucket: "fesi-shop.appspot.com",
  messagingSenderId: "948923387963",
  appId: "1:948923387963:web:97c7d4560d6b383c32cc1e",
  measurementId: "G-P876YVK6Y4",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app); // Export firestore instance


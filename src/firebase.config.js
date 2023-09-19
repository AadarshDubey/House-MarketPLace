import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyB4ghLvbjVTNmMHeMhRpNPGr6wxn3rBQf8",
  authDomain: "house-marketplace-c068f.firebaseapp.com",
  projectId: "house-marketplace-c068f",
  storageBucket: "house-marketplace-c068f.appspot.com",
  messagingSenderId: "303131464187",
  appId: "1:303131464187:web:4e1f86aad65def42bcfb5e",
  measurementId: "G-QPPKTMS29V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

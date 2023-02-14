import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIgCEp8xONzup33shr9ka1UWx-mz7mlBY",
  authDomain: "internet-shop-68258.firebaseapp.com",
  projectId: "internet-shop-68258",
  storageBucket: "internet-shop-68258.appspot.com",
  messagingSenderId: "936015084617",
  appId: "1:936015084617:web:1cbaf63eada6c4a10ed398",
  measurementId: "G-4YXDGQEML3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

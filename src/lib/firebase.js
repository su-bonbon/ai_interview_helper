import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp90KCl7krkD1wcEvVB_9Y41u9d8eF1HE",
  authDomain: "your-interview-helper.firebaseapp.com",
  projectId: "your-interview-helper",
  storageBucket: "your-interview-helper.firebasestorage.app",
  messagingSenderId: "445218971557",
  appId: "1:445218971557:web:9e97db636af815dc88124c",
  measurementId: "G-V0G9KM28TP",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function initAnalytics() {
  if (typeof window === "undefined") return null;
  const supported = await isSupported();
  return supported ? getAnalytics(app) : null;
}

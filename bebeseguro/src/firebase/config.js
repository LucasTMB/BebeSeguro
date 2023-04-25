import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDydOxa_KeuNVxuI0BB6aqofeqUp0lxnw8",
  authDomain: "bebeseguro-3e68a.firebaseapp.com",
  projectId: "bebeseguro-3e68a",
  storageBucket: "bebeseguro-3e68a.appspot.com",
  messagingSenderId: "1068990393810",
  appId: "1:1068990393810:web:6aecc6afa8020d5b266c0b",
  measurementId: "G-WF1B3CLF1M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};
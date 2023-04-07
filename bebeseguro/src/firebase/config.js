import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR5u1m_Ww4x5mcYeVjlPfssJF5xUUIodU",
  authDomain: "bebeseguro-f45ce.firebaseapp.com",
  projectId: "bebeseguro-f45ce",
  storageBucket: "bebeseguro-f45ce.appspot.com",
  messagingSenderId: "415221594957",
  appId: "1:415221594957:web:9686caff43f69b49285504",
  measurementId: "G-L31V00YV8P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};
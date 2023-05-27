import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDx3bbk2xxJUTugPnkKRuj1hwk-uRmiS_k",
  authDomain: "bbseguro-7d1ec.firebaseapp.com",
  projectId: "bbseguro-7d1ec",
  storageBucket: "bbseguro-7d1ec.appspot.com",
  messagingSenderId: "429072190872",
  appId: "1:429072190872:web:707082f290dc4e4768efed"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
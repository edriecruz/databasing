import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDxlMroFyBv2LuToYe47R9MaqLjxjDBtGc",
  authDomain: "crud-img-374c6.firebaseapp.com",
  projectId: "crud-img-374c6",
  storageBucket: "crud-img-374c6.appspot.com",
  messagingSenderId: "28065390421",
  appId: "1:28065390421:web:650e589215d02361b859dc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);
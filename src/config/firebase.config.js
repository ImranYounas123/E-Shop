import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB-VTXz1FjYvfIHEuZ2nylC_uHu5lyvYyg",
  authDomain: "ecommerce-6748e.firebaseapp.com",
  projectId: "ecommerce-6748e",
  storageBucket: "ecommerce-6748e.appspot.com",
  messagingSenderId: "365785182075",
  appId: "1:365785182075:web:c6aa5df2ac9bb0c773d7de",
  measurementId: "G-7RZT48X1NK"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

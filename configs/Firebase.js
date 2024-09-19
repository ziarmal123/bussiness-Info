
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA28pUUXd1TJWFHTQL6dTJwPzUuTwV646o",
  authDomain: "reactform-f5846.firebaseapp.com",
  databaseURL: "https://reactform-f5846-default-rtdb.firebaseio.com",
  projectId: "reactform-f5846",
  storageBucket: "reactform-f5846.appspot.com",
  messagingSenderId: "693208318248",
  appId: "1:693208318248:web:425ab1eb7fdb451707101d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)

export const storage=getStorage(app)
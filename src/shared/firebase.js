// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_KNNRpN4jNVrkT5fwNu65NgPSPrOiUNA",
  authDomain: "assessment-b1a4a.firebaseapp.com",
  projectId: "assessment-b1a4a",
  storageBucket: "assessment-b1a4a.appspot.com",
  messagingSenderId: "1057596362459",
  appId: "1:1057596362459:web:758c2fbe677563a97b06fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };

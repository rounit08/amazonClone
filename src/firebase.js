import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZR-7wP-6-UjPNcLdJZ3o33OIjM7motPw",
  authDomain: "clone-829b2.firebaseapp.com",
  projectId: "clone-829b2",
  storageBucket: "clone-829b2.appspot.com",
  messagingSenderId: "71403084373",
  appId: "1:71403084373:web:6e8346fa66b83fa12912dc",
  measurementId: "G-BLP2RQ48K1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

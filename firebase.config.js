// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH7M0b2NQB63np7729DZenypdQfZ0bGnA",
  authDomain: "car-doctor-24389.firebaseapp.com",
  projectId: "car-doctor-24389",
  storageBucket: "car-doctor-24389.appspot.com",
  messagingSenderId: "238365760909",
  appId: "1:238365760909:web:9e43bc6d828bcfc369b1c4",
  measurementId: "G-36NCXCTN72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics}
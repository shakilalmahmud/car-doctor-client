// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDs4fDxUQ5eiNDrv7kUpQIhFejc09UaZ3c",
    authDomain: "car-doctor-ca718.firebaseapp.com",
    projectId: "car-doctor-ca718",
    storageBucket: "car-doctor-ca718.appspot.com",
    messagingSenderId: "456557364446",
    appId: "1:456557364446:web:2496fc272b64a5e0f62e4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCJM1eg2dVtO2SCPtevl0ty_7oeDI-FXao",
 authDomain: "netflix-clone-e5a89.firebaseapp.com",
 projectId: "netflix-clone-e5a89",
 storageBucket: "netflix-clone-e5a89.appspot.com",
 messagingSenderId: "9335506720",
 appId: "1:9335506720:web:6a730116b76aadae277945",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, app, db };

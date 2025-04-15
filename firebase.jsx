// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBglQF-siZujD21xLr-f5HNCh09uGmZiuI",
  authDomain: "netflix-clone-b4947.firebaseapp.com",
  projectId: "netflix-clone-b4947",
  storageBucket: "netflix-clone-b4947.firebasestorage.app",
  messagingSenderId: "357341417145",
  appId: "1:357341417145:web:0317e2b8cc46a532195568",
  measurementId: "G-P9HPVMMZGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };

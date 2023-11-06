import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC2O2JqPZGw7KbprmsN2bmMwM7xvCDRSQU",
    authDomain: "fir-3aa2c.firebaseapp.com",
    projectId: "fir-3aa2c",
    storageBucket: "fir-3aa2c.appspot.com",
    messagingSenderId: "86214787243",
    appId: "1:86214787243:web:23ec777e639fb4066cb7ee",
    measurementId: "G-STRRNK8SLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
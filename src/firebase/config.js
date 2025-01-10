//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtimbax9H7xrsiXeXTgyUECjGAIB2OIxk",
  authDomain: "pdf-9ec2e.firebaseapp.com",
  projectId: "pdf-9ec2e",
  storageBucket: "pdf-9ec2e.firebasestorage.app",
  messagingSenderId: "636380123702",
  appId: "1:636380123702:web:bee5a4a9b65f5284a07e97",
  measurementId: "G-8YBLZKNGTN",
};

//* Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//* Initialize Firebase Auth and set persistence
const auth = getAuth(firebase_app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Failed to set session persistence:", error);
  });

export { auth };
export default firebase_app;

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "spa-react-d1f74.firebaseapp.com",
  projectId: "spa-react-d1f74",
  storageBucket: "spa-react-d1f74.firebasestorage.app",
  messagingSenderId: "380825837357",
  appId: "1:380825837357:web:29e802c0f4c6ff2057fda4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


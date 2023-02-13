import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZBJROhMfydpSY5PpthYdqBVzjZ2JeN38",
  authDomain: "gpt-portal-377702.firebaseapp.com",
  projectId: "gpt-portal-377702",
  storageBucket: "gpt-portal-377702.appspot.com",
  messagingSenderId: "195278515475",
  appId: "1:195278515475:web:1b6c3a100501e19d8bfee6",
  measurementId: "G-T03W86J7XG"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
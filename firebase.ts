import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIHu44aJy4h4PJtxMG-vFZg-al7T1JRsM",
  authDomain: "chatgpt-84d8f.firebaseapp.com",
  projectId: "chatgpt-84d8f",
  storageBucket: "chatgpt-84d8f.appspot.com",
  messagingSenderId: "328919260204",
  appId: "1:328919260204:web:59dcc812e3cfebb3738589",
  measurementId: "G-B5BSGEX2HJ"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

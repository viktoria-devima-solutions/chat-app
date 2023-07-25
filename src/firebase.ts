// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD8pW05hQONvme6B-ANlD3_Z9c8tkLPvtw',
  authDomain: 'test-chat-ca099.firebaseapp.com',
  projectId: 'test-chat-ca099',
  storageBucket: 'test-chat-ca099.appspot.com',
  messagingSenderId: '102325288535',
  appId: '1:102325288535:web:62c0265ff9eb8a3381ed12',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

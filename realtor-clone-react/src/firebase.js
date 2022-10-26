// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATy5p1nk53HI0k6voaGkRGEusdFBSZSM4",
  authDomain: "realtor-clone-react-6faa1.firebaseapp.com",
  projectId: "realtor-clone-react-6faa1",
  storageBucket: "realtor-clone-react-6faa1.appspot.com",
  messagingSenderId: "452871557988",
  appId: "1:452871557988:web:11a03efc537c771e6e2071"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
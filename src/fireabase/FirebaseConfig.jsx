// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY5VdUrKqEGiYUiKQ7MdZAtIXpnm7lSo8",
  authDomain: "myfirstapp-df5e5.firebaseapp.com",
  projectId: "myfirstapp-df5e5",
  storageBucket: "myfirstapp-df5e5.appspot.com",
  messagingSenderId: "584614904731",
  appId: "1:584614904731:web:69f9501db83dc97750573e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}
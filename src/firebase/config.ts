// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC0dwHDvsua0UqA4to28unaV4uJ5uXZLw",
  authDomain: "ziqzi-chat.firebaseapp.com",
  databaseURL: "https://ziqzi-chat-default-rtdb.firebaseio.com",
  projectId: "ziqzi-chat",
  storageBucket: "ziqzi-chat.appspot.com",
  messagingSenderId: "91246742131",
  appId: "1:91246742131:web:fe3d9e1a7e5021b83bb806",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
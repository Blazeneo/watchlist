
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwnSu5K8USKKMYMghWXIYcVPj5lRdW1-o",
  authDomain: "watchlist-a3b07.firebaseapp.com",
  databaseURL: "https://watchlist-a3b07-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "watchlist-a3b07",
  storageBucket: "watchlist-a3b07.appspot.com",
  messagingSenderId: "41165070828",
  appId: "1:41165070828:web:df604ccd6980076712e0c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
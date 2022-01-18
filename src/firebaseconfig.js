import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA21RWtpmkQqEWDVtBgAq5YaqWpt6w0UXw",
  authDomain: "netflixclone-ccc74.firebaseapp.com",
  projectId: "netflixclone-ccc74",
  storageBucket: "netflixclone-ccc74.appspot.com",
  messagingSenderId: "69349503321",
  appId: "1:69349503321:web:77c5388237e4f2d7fb5c48",
  measurementId: "G-1MYRB9S4JW",
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export default storage;

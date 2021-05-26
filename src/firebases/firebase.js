import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCoDR1PcQMdqxhsDCV6I08Z-zZhchRMfTg",
    authDomain: "wacoa-app-prueba.firebaseapp.com",
    projectId: "wacoa-app-prueba",
    storageBucket: "wacoa-app-prueba.appspot.com",
    messagingSenderId: "1052510374076",
    appId: "1:1052510374076:web:e5b1ade1dcbc37ab5628b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export const auth = firebase.auth();

export {firebase}
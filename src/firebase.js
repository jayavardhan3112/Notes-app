import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0_okNRlPqLremuEkwut-v379PEKwQLvY",
    authDomain: "todo-app-cp-afc2c.firebaseapp.com",
    projectId: "todo-app-cp-afc2c",
    storageBucket: "todo-app-cp-afc2c.appspot.com",
    messagingSenderId: "51969400949",
    appId: "1:51969400949:web:4f90d89619cf088509183c",
    measurementId: "G-Z2008D5CHN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;


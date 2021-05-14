import firebase from 'firebase';

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyBADsTBg4gv43XGqMHMahnuMyFzW-oGo1A",
  authDomain: "todo-app-5c7ff.firebaseapp.com",
  projectId: "todo-app-5c7ff",
  storageBucket: "todo-app-5c7ff.appspot.com",
  messagingSenderId: "700477871173",
  appId: "1:700477871173:web:2271f00b32ab9f09fe7f2c",
  measurementId: "G-B4N5185N23"
});

const db = firebase.firestore();

export default  db;
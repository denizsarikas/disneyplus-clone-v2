
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDIXcwWX7x9L2WO0eE2lkDcoxVxnusUva0",
  authDomain: "disneyplus-v2-7bc82.firebaseapp.com",
  projectId: "disneyplus-v2-7bc82",
  storageBucket: "disneyplus-v2-7bc82.appspot.com",
  messagingSenderId: "907588418064",
  appId: "1:907588418064:web:72b7b0f789d795a05de895",
  measurementId: "G-57D43FXMFX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
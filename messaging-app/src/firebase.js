import firebase from "firebase";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyACziC7AnBdf-_GU84p2uqs_cd8IcRJRvU",
  authDomain: "messaging-app-cf732.firebaseapp.com",
  //databaseURL: "https://messaging-app-cf732-default-rtdb.firebaseio.com/",
  projectId: "messaging-app-cf732",
  storageBucket: "messaging-app-cf732.appspot.com",
  messagingSenderId: "720490074018",
  appId: "1:720490074018:web:a0156851d1e51f9a89acfb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

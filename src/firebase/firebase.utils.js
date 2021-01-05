import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC4QCrXkh9FwdteZ1MJxoAMEsdIWwTT8V8",
  authDomain: "crwn-db-1a78a.firebaseapp.com",
  projectId: "crwn-db-1a78a",
  storageBucket: "crwn-db-1a78a.appspot.com",
  messagingSenderId: "448187886630",
  appId: "1:448187886630:web:41818912c2deb8a6ff8ae7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

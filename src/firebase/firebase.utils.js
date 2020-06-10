import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyBnsdJi7BJZfjuGjikSz9LE7EPiYMeMl5M",
  authDomain: "testing-ever.firebaseapp.com",
  databaseURL: "https://testing-ever.firebaseio.com",
  projectId: "testing-ever",
  storageBucket: "testing-ever.appspot.com",
  messagingSenderId: "787355811417",
  appId: "1:787355811417:web:7c0963da78ddd52901fb48",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

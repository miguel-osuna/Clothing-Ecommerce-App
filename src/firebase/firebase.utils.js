import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAdLw04_dTJvLDPJI4_6mXSjgCjgGnxKCs",
  authDomain: "crwn-db-7b6c3.firebaseapp.com",
  projectId: "crwn-db-7b6c3",
  storageBucket: "crwn-db-7b6c3.appspot.com",
  messagingSenderId: "808645006430",
  appId: "1:808645006430:web:1e94d2f5401e65b7a950cf",
  measurementId: "G-MB8YFZYHB2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDUQNDVhBS5QNvfcUxtkBtbgEnjmfY3btU",
  authDomain: "willi-9f0b8.firebaseapp.com",
  projectId: "willi-9f0b8",
  storageBucket: "willi-9f0b8.appspot.com",
  messagingSenderId: "473688776492",
  appId: "1:473688776492:web:81154518ca074b302b5689"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

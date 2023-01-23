import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyAZk8iNF7SVQSMiAHara-HnGaiLQ8D0Drk",
    authDomain: "e-ride-f320a.firebaseapp.com",
    projectId: "e-ride-f320a",
    storageBucket: "e-ride-f320a.appspot.com",
    messagingSenderId: "678941870119",
    appId: "1:678941870119:web:94bb88319699639a9fe602"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();



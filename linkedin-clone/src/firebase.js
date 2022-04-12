import firebase from "firebase";

const firebaseConfig = {
 apiKey: "AIzaSyDJMojg9yJqDAIhmq35d0OWXZ4PybYX-YI",
 authDomain: "linkedin-clone-79de3.firebaseapp.com",
 projectId: "linkedin-clone-79de3",
 storageBucket: "linkedin-clone-79de3.appspot.com",
 messagingSenderId: "956720880426",
 appId: "1:956720880426:web:fea5c9295844b22dac9c53",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

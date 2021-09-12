import firebase from "firebase/app";
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAzVBdr4VHc8udAT7BfVL4A-NPqFVR4-Tc",
  authDomain: "test-app-397d2.firebaseapp.com",
  databaseURL: "https://test-app-397d2-default-rtdb.firebaseio.com",
  projectId: "test-app-397d2",
  storageBucket: "test-app-397d2.appspot.com",
  messagingSenderId: "463208598824",
  appId: "1:463208598824:web:cf3679c4506dfc89b6941d"
};
firebase.initializeApp(firebaseConfig)
const database = firebase.database();

export const fire = firebase;
export default database;

import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyCzrX2ngYGEazFgu6kS6bpTHhygdoRyipw",
  authDomain: "imagebox-f0e55.firebaseapp.com",
  databaseURL: "https://imagebox-f0e55-default-rtdb.firebaseio.com",
  projectId: "imagebox-f0e55",
  storageBucket: "imagebox-f0e55.appspot.com",
  messagingSenderId: "1071339246839",
  appId: "1:1071339246839:web:a03301817093a0a28d2ff2",
  measurementId: "G-9XP0L8T6DP"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const database = firebase.database();

const auth = firebase.auth();

export { projectStorage, projectFirestore, timestamp, auth, database };
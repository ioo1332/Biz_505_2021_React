//import *as firebase from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1D6ZVBjFu2BIHMKqnrtBQxXBHi7Quh-Y",
  authDomain: "hello-android-9d4ac.firebaseapp.com",
  databaseURL: "https://hello-android-9d4ac-default-rtdb.firebaseio.com",
  projectId: "hello-android-9d4ac",
  storageBucket: "hello-android-9d4ac.appspot.com",
  messagingSenderId: "607570257268",
  appId: "1:607570257268:web:4a641d4c0f9932f9c2b821",
  measurementId: "G-DRVPWSN6M3",
};
// firebase 관련 연결 Connection이 불필요하게 과다하게 연결 생성되는것을
// 방지하는 코드

firebase.initializeApp(firebaseConfig);

const realDB = firebase.database();
const firestore = firebase.firestore();

export { realDB, firestore };

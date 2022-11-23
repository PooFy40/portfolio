import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyAy-VvvCUqByorrKcUYVS8qCzk1Od7xkPM",
  authDomain: "portfolio-45ef9.firebaseapp.com",
  databaseURL: "https://portfolio-45ef9.firebaseio.com",
  projectId: "portfolio-45ef9",
  storageBucket: "portfolio-45ef9.appspot.com",
  messagingSenderId: "85496445442",
  appId: "1:85496445442:web:e4fd9a36f79391da4cc51b",
  measurementId: "G-EMXLVZ1HE8"
};

firebase.initializeApp(config);
export const auth = firebase.auth()
export const db = firebase.firestore()

export default firebase;
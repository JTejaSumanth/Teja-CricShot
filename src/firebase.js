import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAayhnAPdvWQmeX7je9fqroavJtbtogPks",
  authDomain: "cricshot-3e594.firebaseapp.com",
  projectId: "cricshot-3e594",
  storageBucket: "cricshot-3e594.appspot.com",
  messagingSenderId: "623004454908",
  appId: "1:623004454908:web:2115546ada80340b86ec79",
  measurementId: "G-8CV81GDVD7"
};

firebase.initializeApp(firebaseConfig)
// const storage = firebase.storage();
// const db = firebaseApp.firestore();

// export { db, storage }
export default firebase.auth()
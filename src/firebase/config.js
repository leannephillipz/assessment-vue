import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAunon-rdzhazG4EYIM5_fRXIQh7JVRM-A",
    authDomain: "assessment-2f428.firebaseapp.com",
    databaseURL: "https://assessment-2f428-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "assessment-2f428",
    storageBucket: "assessment-2f428.appspot.com",
    messagingSenderId: "18624726857",
    appId: "1:18624726857:web:a5af96560dedfdb91efc98",
    measurementId: "G-P8VP1VDB00"
  };

  firebase.initializeApp();

  const projectFirestore = firebase.firestore();

  export { projectFirestore };
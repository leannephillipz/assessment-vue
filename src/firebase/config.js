import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3f1LcnGB4g8GgRG56ATsgWEXIYmUCahA",
  authDomain: "assessment-62e0f.firebaseapp.com",
  databaseURL: "https://assessment-62e0f.firebaseio.com",
  projectId: "assessment-62e0f",
  storageBucket: "assessment-62e0f.appspot.com",
  messagingSenderId: "583666337169",
  appId: "1:583666337169:web:3d7708dbbbd9112bf20630",
  measurementId: "G-Y7VK3H5VC0"
};

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  // console.log("fire");

  export { projectFirestore }

  // check firebase rules if this doesn't pull data.

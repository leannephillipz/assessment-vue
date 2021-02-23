import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
// const firebaseConfig = {
//   apiKey: "AIzaSyBKB4L3qyD-QHCovEvntQS3HRuOJBVSkno",
//   authDomain: "udemy-vue-projects.firebaseapp.com",
//   databaseURL: "https://udemy-vue-projects.firebaseio.com",
//   projectId: "udemy-vue-projects",
//   storageBucket: "udemy-vue-projects.appspot.com",
//   messagingSenderId: "25092947019",
//   appId: "1:25092947019:web:fdd61cabc8d29add63e1ce"
// };

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


// init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }

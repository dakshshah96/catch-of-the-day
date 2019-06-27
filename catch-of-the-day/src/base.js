import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBhBOp8FIdHJgCqvqd7tkKO4bICDhAhggk",
  authDomain: "catch-of-the-day-daksh.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-daksh.firebaseio.com",
  projectId: "catch-of-the-day-daksh",
  storageBucket: "",
  messagingSenderId: "353492925715",
  appId: "1:353492925715:web:f4f57d2836fc9608"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base

import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDfMmONiDP-rTilWwH9NbtpVi4N7OJp8nA",
    authDomain: "schoolattendance-8ebd1.firebaseapp.com",
    databaseURL: "https://schoolattendance-8ebd1-default-rtdb.firebaseio.com",
    projectId: "schoolattendance-8ebd1",
    storageBucket: "schoolattendance-8ebd1.appspot.com",
    messagingSenderId: "207285034322",
    appId: "1:207285034322:web:fed43304865f8a23ce6e8b",
    measurementId: "G-L23Z95S9BE"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

export default firebase.database();
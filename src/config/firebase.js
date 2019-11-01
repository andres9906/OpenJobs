
import firebase, { firestore } from 'firebase'


//<!-- The core Firebase JS SDK is always required and must be listed first -->
//<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-app.js"></script>

//<!-- TODO: Add SDKs for Firebase products that you want to use
//     https://firebase.google.com/docs/web/setup#available-libraries -->
//<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-analytics.js"></script>

//<script>
  // Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyAfu8WHDsfR3Mme0FQ3IT4DrH6mf6VZo6k",
    authDomain: "mytwit-4a4ce.firebaseapp.com",
    databaseURL: "https://mytwit-4a4ce.firebaseio.com",
    projectId: "mytwit-4a4ce",
    storageBucket: "mytwit-4a4ce.appspot.com",
    messagingSenderId: "248550275860",
    appId: "1:248550275860:web:ea486b187689d19123a001",
    measurementId: "G-83EP5YY9XJ"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
 export const addU=(nombre,email)=>{

  return db.collection('Usuario').doc(email).set({Nombre:nombre});
 }
 export const update=(id,nombre)=>{
   return db.collection('Usuario').doc(id).update({Nombre:nombre})
 }

  
  export const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  }
  export const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  export const signout = () => {
    return auth.signOut();
  }
  export const recuperarPass = (email) => {
    return auth.sendPasswordResetEmail(email);
  }

  require("firebase/firestore");

  var db = firebase.firestore();
 export var db = firebase.firestore();
 // firebase.analytics();




  //</script>
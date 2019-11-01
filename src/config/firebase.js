
import firebase from 'firebase'

//<!-- The core Firebase JS SDK is always required and must be listed first -->
//<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-app.js"></script>

//<!-- TODO: Add SDKs for Firebase products that you want to use
//     https://firebase.google.com/docs/web/setup#available-libraries -->
//<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-analytics.js"></script>

//<script>
  // Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyAzRDbvPCR3bN-P1D59NQLAa12XypD5Uuw",
    authDomain: "openjobs-7a4e8.firebaseapp.com",
    databaseURL: "https://openjobs-7a4e8.firebaseio.com",
    projectId: "openjobs-7a4e8",
    storageBucket: "openjobs-7a4e8.appspot.com",
    messagingSenderId: "724334005156",
    appId: "1:724334005156:web:a44310feda11905509cf31",
    measurementId: "G-H60H3XCX0Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const crearUs=(apellido,email,nombre)=>{
  
return null;
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



 // firebase.analytics();




  //</script>
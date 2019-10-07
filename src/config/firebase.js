
import firebase from 'firebase'

//<!-- The core Firebase JS SDK is always required and must be listed first -->
//<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-app.js"></script>

//<!-- TODO: Add SDKs for Firebase products that you want to use
//     https://firebase.google.com/docs/web/setup#available-libraries -->
//<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-analytics.js"></script>

//<script>
  // Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyBBhR4BRThfJHcTUn7ub0C_C0lILB4BXqo",
    authDomain: "openjobs-f9ccc.firebaseapp.com",
    databaseURL: "https://openjobs-f9ccc.firebaseio.com",
    projectId: "openjobs-f9ccc",
    storageBucket: "",
    messagingSenderId: "249224832794",
    appId: "1:249224832794:web:211379dd86c38db7d86ea3",
    measurementId: "G-E8WV4R1MHC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
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
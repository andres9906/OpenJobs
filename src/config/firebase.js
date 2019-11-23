
import firebase, { firestore, storage } from 'firebase'
import { userInfo } from 'os';



//<!-- The core Firebase JS SDK is always required and must be listed first -->
//<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-app.js"></script>

//<!-- TODO: Add SDKs for Firebase products that you want to use
//     https://firebase.google.com/docs/web/setup#available-libraries -->
//<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-analytics.js"></script>

//<script>
// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyCrHZl4BArAqazWlNYsoLgB3QiJM7B1lYs",
  authDomain: "openjobs-606c7.firebaseapp.com",
  databaseURL: "https://openjobs-606c7.firebaseio.com",
  projectId: "openjobs-606c7",
  storageBucket: "openjobs-606c7.appspot.com",
  messagingSenderId: "653431809277",
  appId: "1:653431809277:web:2eb52cbc25c14bb09a4a94",
  measurementId: "G-0CGGV0YSLF"
};



// Initialize Firebase
export const getCurrentUserEmail = () => {

  return firebase.auth().currentUser.email;
};



firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export const addU = (nombre, id, email) => {
  return db.collection('Usuarios').doc(id).set({ Nombre: nombre, Email: email }).then(function (docRef) {
    console.log('Document written with ID: ', docRef.id); setTimeout(() => {
      console.log("Funciona");
    }, 20000);
  })
    .catch(function (error) {
      setTimeout(() => {
        console.error('Error adding document: ', error);
      }, 20000);

    });;;
}

export const addWork = (nombre, descripcion, sueldo, categoria) => {
  let emaill = getCurrentUserEmail()
  console.log(categoria)
  console.log(nombre)
  return db.collection('Trabajos').add({ Nombre: nombre, Descripcion: descripcion, Sueldo: sueldo, Categoria: categoria, Email: emaill }).then(function (docRef) {
    console.log('Document written with ID: ', docRef.id); setTimeout(() => {
      console.log("Funciona");
    }, 20000);
  })
    .catch(function (error) {
      setTimeout(() => {
        console.error('Error adding document: ', error);
      }, 20000);

    });;
}
export const updateWork = (id, email) => {
  return db.collection('Trabajos').doc(id).update({ Aceptar: '1', EmailWorker: email }).then(function () {
    console.log("updated")
  }).catch(function (error) {
    console.log("Error")
  });
}
export const updateWork2 = (id,nombre,categoria,descripcion,sueldo) => {
  return db.collection('Trabajos').doc(id).update({ Nombre: nombre, Descripcion: descripcion, Sueldo: sueldo, Categoria: categoria }).then(function () {
    console.log("updated")
  }).catch(function (error) {
    console.log("Error")
  });
}

export const deleteWork = (id) => {
  return db.collection('Trabajos').doc(id).delete()
}



export const updatePass = (pass) => {
  var user = firebase.auth().currentUser;
  return user.updatePassword(pass).then(function () {
    console.log("updated")
  }).catch(function (error) {
    console.log("Error")
  });
}
export const update = (id, nombre) => {
  return db.collection('Usuarios').doc(id).update({ Nombre: nombre }).then(function (docRef) {
    console.log('Document written with ID: ', docRef.id); setTimeout(() => {
      console.log("Funciona");
    }, 20000);
  })
    .catch(function (error) {
      setTimeout(() => {
        console.error('Error adding document: ', error);
      }, 20000);

    });;
}
export const addComentario = (comentario, trabajo) => {
  let email = getCurrentUserEmail()
  return db.collection('Comentarios').add({ Comentario: comentario, Email: email, Trabajo: trabajo })
}
export const Aplicacion = (emailCreador, trabajoid) => {
  let emailAplicante = getCurrentUserEmail()
  return db.collection('Aplicantes').add({ EmailAplicante: emailAplicante, EmailCreador: emailCreador, Trabajo: trabajoid })
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
export const usuari = () => {
  var algo = firebase.auth().currentUser;
  var email;
  email = algo.email;
  console.log(email)
  return email;
}

export const uploadImg = (id, img) => {


}
require("firebase/firestore");
require("firebase/storage");

var fr = firebase.storage();


export const db = firebase.firestore();
export default { firebase }
 // firebase.analytics();




  //</script>

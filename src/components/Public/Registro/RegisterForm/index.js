import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { signup, addU } from './../../../../config/firebase';
import Alert from 'react-bootstrap/Alert'

import { withRouter } from 'react-router-dom';
function timedRefresh(timeoutPeriod) {
  setTimeout("location.reload(true);", timeoutPeriod);
}

function RegistroForm(props) {
  const { history } = props
  const [email, setEmail] = React.useState('')
  const [nombre, setNom] = React.useState('')
  const [open, setOpen] = React.useState(false);
  const [mens, setMens] = React.useState('')
  const [cpassword, setcpassword] = useState('')

  const [apellido, setApellido] = React.useState('')
  const [password, setPass] = React.useState('')
  const handleSubmit = (evt) => {

    evt.preventDefault()
    if (cpassword == password) {
      if (email && password) {
        signup(email, password)
          .then(user => {
            props.setAuthentication(true);

            sessionStorage.setItem('user', user.user.uid);
            console.log("Entrooo")

            addU(nombre, user.user.uid, email).then(email => {
              var emai = email
              sessionStorage.setItem('email', emai);
              ;
              history.push("/Usuario");
              window.onload = timedRefresh(100);
              setTimeout(() => {

              }, 2000);
            })

          }).catch(err => {

            if (password.length < 6) {

              setTimeout(() => {
                setMens('')
                setOpen(false)
              }, 2000);
              setMens("La contraseña debe ser de al menos 6 caracteres");
              setOpen(true);
            }
            if (err.message == "The email address is already in use by another account.") {
              setTimeout(() => {
                setMens('')
                setOpen(false)
              }, 2000);
              setMens("El email esta en uso");
              setOpen(true);
            }


          }, 2000);
      }
    }  else {
      setTimeout(() => {
        setMens('')
        setOpen(false)
      }, 2000);
      setMens("Contraseñas no coinciden");
      setOpen(true);
    }

  }

  return (
    <div class="Registro">

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={nombre} onChange={e => setNom(e.target.value)} required />
          <label>Nombre</label>
        </div>


        <div>
          <input type="text" value={apellido} onChange={e => setApellido(e.target.value)} required />
          <label>Apellido</label>
        </div>
        <div>
          <input type="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <label>Email</label>
        </div>
        <div>
          <input type="password" value={password} onChange={e => setPass(e.target.value)} required />
          <label>Contraseña</label>
        </div>
        <div>
          <input type="password" value={cpassword} onChange={e => setcpassword(e.target.value)} required />
          <label>Contraseña</label>
        </div>
        <input type="submit" value="Registrarse" ></input>
      </form>
      <a href="/Login">Ya tienes cuenta?</a>
      <Alert variant="danger" show={open}>
        {mens}
      </Alert>
    </div>);

}
export default withRouter(RegistroForm);
/**
  constructor(props){
    super(props)
    this.state={

        first_name:'',
        last_name:'',
        ID:'',
        password:'',
        email:''
    }
  }
  handlerFirst_nameChange=(event)=>{
    this.setState({
      first_name:event.target.value
    })
  }
  handlerLast_nameChange=(event)=>{
    this.setState({
      last_name:event.target.value
    })
  }
  handlerIDChange=(event)=>{
    this.setState({
      ID:event.target.value
    })
  }
  handlerPasswordChange=(event)=>{
    this.setState({
      password:event.target.value
    })
  }
  handlerEmailChange=(event) => {
    this.setState({
      email:event.target.value
    })
  }
  handleSubmit= event =>{
   // var GuardarUsuario= firebase.ref('/Usuario').push();
    GuardarUsuario.set({
      'Nombre': this.state.first_name ,
      'Apellido': this.state.last_name ,
      'ID': this.state.ID ,
      'Contraseña': this.state.password ,
      'Email': this.state.email

    });
  alert('Usuario Guardado')
    }

  render() {
    return (
      <div class="row #9e9e9e grey">
  <form id ="contacForm" class="col s12" onSubmit={this.handleSubmit}>
    <div class="row">
      <div class="input-field col s6 ">
        <input  id="first_name" type="text" class="validate " value={this.state.first_name} onChange={this.handlerFirst_nameChange}/>
        <label for="first_name" Style="font-size:20px; text-align:left" class="active white-text text-darken-2">First Name </label >
      </div>
      <div class="input-field col s6">
        <input id="last_name" type="text" class="validate" value={this.state.last_name} onChange={this.handlerLast_nameChange}/>
        <label for="last_name" Style="font-size:20px; text-align:left" class="active white-text text-darken-2">Last Name</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input  id="ID" type="text" class="validate" value={this.state.ID} onChange={this.handlerIDChange}/>
        <label for="ID" Style="font-size:20px; text-align:left" class="active white-text text-darken-2">ID</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="password" type="password" class="validate" value={this.state.password} onChange={this.handlerPasswordChange}/>
        <label for="password" Style="font-size:20px; text-align:left" class="active white-text text-darken-2">Password</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="email" type="email" class="validate" value={this.state.email} onChange={this.handlerEmailChange}/>
        <label for="email" Style="font-size:20px; text-align:left" class="active white-text text-darken-2">Email </label>
      </div>
    </div>
    <button type='submit'  class="btn waves-effect #03a9f4 light-blue " >Aceptar</button>
  </form>

</div>
    );
  }
}**/

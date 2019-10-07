import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import {signup} from './../../../../config/firebase';



function RegistroForm(props){
  const[email,setEmail]=useState('')
  const[nombre,setNom]=useState('')
  const[apellido,setApellido]=useState('')
  const[password,setPass]=useState('')
  const handleSubmit=(evt)=>{
    evt.preventDefault()
    if(email&&password){
      signup(email,password)
      .then(user =>{
        props.setAuthentication(true);
           sessionStorage.setItem('user',user.user.uid);
            
        }).catch(err=>{
          console.log(err)
          }, 2000); 
        }

    }
  
return(<div className="main">

  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Nombre" value={nombre} onchange={e=>setNom(e.target.value)} ></input>
    <input type="text" placeholder="Apellido" value={apellido} onchange={e=>setApellido(e.target.value)}></input>
    <input type="email"placeholder="email" value={email}  onChange={e => setEmail(e.target.value)}></input>
    <input type="password" placeholder="password" value={password} onChange={e => setPass(e.target.value)}></input>
    <button type="submit" >algo</button>
  </form>
</div>);

}
export default RegistroForm; 
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

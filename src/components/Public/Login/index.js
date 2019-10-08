import React, { useState}  from 'react';
import {Link} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'



import {login} from './../../../config/firebase';
import {withRouter} from 'react-router-dom';
function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}

function Login(props) {
  const {history}=props
  const [open, setOpen] = React.useState(false);
  const[incm,setincm]=React.useState(false)
  const[mens,setMens]=React.useState('')
  
  const [email, setEmail] = React.useState('');
  const [password, setPass] =React.useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
   
    if(email && password){
      login(email, password)
      .then(user =>{
        props.setAuthentication(true);
        sessionStorage.setItem('user',user.user.uid);
        history.push("/Usuario")
        window.onload = timedRefresh(100);
        setTimeout(()=>{
          
        }, 2000); 
        
          })
      .catch(err=>{
       
        setTimeout(()=>{
          setMens('')
      setOpen(false)
        }, 2000); 
        setOpen(true)
        setMens('Error credenciales')
    
      });
    }
  };
  


  
  return (<div style={{backgroundColor:'black'}}>
    <div className="login">
      
       

<form onSubmit={handleSubmit}>
 
 
 <div> <input type="email"value={email}    onChange={e => setEmail(e.target.value)}required></input>
 <label>Email</label>
 </div>
 <div>
  <input type="password" value={password} onChange={e => setPass(e.target.value)}required></input>
  <label>Password</label>
  </div>
  <input type="submit" value="Registrarse" ></input>
  <a href="/RecuperarContraseña">Recurperar contraseña</a>
  <br></br>
  <a href="/Registro">Crear cuenta</a>
</form>

       
      
      
      
  </div>
  <Alert variant="danger" show={open}>
{mens}
</Alert>

  </div>
  );
}

export default withRouter(Login);

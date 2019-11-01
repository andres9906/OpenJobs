import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'
import {update} from './../../../config/firebase';
import {withRouter} from 'react-router-dom';


function UpdateU(props) {
  const [open, setOpen] = React.useState(false)
  const[mens,setMens]=React.useState('')
  const {history}=props
  const[email,setEmail]=React.useState('')
  const [password, setPass] =React.useState('');   
 
  

  const handleSubmit = (evt) => {
    evt.preventDefault();
   
    if(email){
      update(sessionStorage.getItem('user'),email)
      .then(email =>{
        sessionStorage.setItem('email',email);
        setTimeout(()=>{
          setMens('')
      setOpen(false)
      setEmail('')
        }, 2000); 
        setOpen(true)
        setMens('Funciono')
    
      
        
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
    <div class="login">
      
       

<form onSubmit={handleSubmit} >
 
 
<div>
    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}required   />
    <label>Nombre</label>
    </div>
 <div>
  <input type="text"  />
  <label>Email</label>
  </div>
  <input type="submit" value="Actualizar" ></input>

</form>

       
      
      
  </div>
  <Alert variant="danger" show={open}>
{mens}
</Alert>

  </div>
  );
}

export default withRouter(UpdateU);

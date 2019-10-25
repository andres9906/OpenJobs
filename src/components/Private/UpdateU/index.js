import React, {useState}  from 'react';
import {Link} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'

import firebase, { firestore } from 'firebase'



import {update} from './../../../config/firebase';
import {withRouter} from 'react-router-dom';


function updateU(props) {
  const [open, setOpen] = React.useState(false)
  const[mens,setMens]=React.useState('')
  const {history}=props
  const[email,setEmail]=React.useState('') 

  const [password, setPass] =React.useState('');   
 
  

  const handleSubmit = (evt) => {
    evt.preventDefault();
   
    if(email && password){
      update('abjjgp3@gmail.com',email, password)
      .then(user =>{
        setTimeout(()=>{
          setMens('')
      setOpen(false)
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
 const
 
<div>
    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}required   />
    <label>Nombre</label>
    </div>
 <div>
  <input type="text" value={password} onChange={e => setPass(e.target.value)}required />
  <label>Apellido</label>
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

export default withRouter(updateU);

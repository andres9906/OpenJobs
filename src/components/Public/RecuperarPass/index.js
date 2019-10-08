import React, { useState}  from 'react';
import Alert from 'react-bootstrap/Alert';



import {recuperarPass} from './../../../config/firebase';


function RecuperarPass(props) {
    if(props.isAuth){
        props.history.push("/");
    }

  
  const [mens, setMessage] = React.useState('');
  const [variant,setVariant]=React.useState('');
  const [open, setOpen] = React.useState(false);

  
  const [email, setEmail] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
  
    if(email){
      recuperarPass(email)
      .then( () =>{
        setVariant('success')
          setTimeout(()=>{
            setMessage('')
            setOpen(false);
          }, 2000);
        setMessage('Verfique su correo');
        setOpen(true); 

      })
      .catch(err=>{
        setVariant('danger')
        setTimeout(()=>{
          setMessage('')
          setOpen(false);
        }, 2000);
      setMessage('Error con el correo');
      setOpen(true); 

        
         
         

        
      });
    }else{
     
    }
  };
  


  
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
       <div> <input type="email"value={email}  onChange={e => setEmail(e.target.value)}></input>
 <label>Email</label>
 
 </div>
 
 <input type="submit" value="Recuperar" ></input>
 </form>
 <Alert variant={variant} show={open}>
{mens}
</Alert>
       </div>
  );
}

export default RecuperarPass;

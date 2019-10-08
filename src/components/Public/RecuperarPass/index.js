import React, { useState}  from 'react';
import {Link} from 'react-router-dom';



import {recuperarPass} from './../../../config/firebase';


function RecuperarPass(props) {
    if(props.isAuth){
        props.history.push("/");
    }

  const [variant, setVariant] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  
  const [email, setEmail] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);
    if(email){
      recuperarPass(email)
      .then( () =>{
        
          setTimeout(()=>{
          }, 2000); 
      })
      .catch(err=>{
        setTimeout(()=>{
         
        }, 2000);  
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
 
 <input type="submit" value="Recordar" ></input>
 </form>
       </div>
  );
}

export default RecuperarPass;

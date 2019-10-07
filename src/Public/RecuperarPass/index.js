import React, { useState}  from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import {SnackbarContentWrapper} from '../Utils/SnackbarContentWrapper';

import {recuperarPass} from './../../config/firebase';

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
          setVariant('success');
          setMessage('Correo de recuperación enviado');
          setOpen(true);
          setTimeout(()=>{
          }, 2000); 
      })
      .catch(err=>{
        setTimeout(()=>{
          setVariant('error');
          setMessage('No hay una cuenta vinculada a este correo');
          setOpen(true);
          setLoading(false);
        }, 2000);  
      });
    }else{
      setVariant('error');
      setMessage('Digite el email');
      setOpen(true);
      setLoading(false);
    }
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <Container component="main" maxWidth="xs" className="login">
      
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
             
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography component="h1" variant="h5">
              Recuperar contraseña
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo"
                type="email"
                name="email"
                autoComplete="email"              
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Confirmar
          </Button>
          </Grid>
            <Grid item xs={12}>
              <Typography component="p">¡Ya la recuerdo! <Link to="/Login">Iniciar sesión</Link></Typography>
              <Typography component="p">¿Nuevo en OpenJobs? <Link to="/Registro">Regístrate ahora »</Link></Typography>
            </Grid>
          </Grid>
        </form>
      
      
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
          <SnackbarContentWrapper
         onClose={handleClose}
         variant={variant}
         message={message}
         />
      </Snackbar>
  </Container>
  );
}

export default RecuperarPass;

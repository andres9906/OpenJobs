import React from 'react';
import Header from './Header';
import RegistroForm from './RegisterForm'

import 'bootstrap/dist/css/bootstrap.min.css';

function Registro (){
  
    return(
    <main className="main">
      <Header></Header>
      <RegistroForm></RegistroForm>

    </main>);
  
}

export default Registro;

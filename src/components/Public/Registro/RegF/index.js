import React from 'react';

import RegistroForm from './../RegisterForm'

import 'bootstrap/dist/css/bootstrap.min.css';

function RegF (props){
  
    return(
    <main className="RegF" style={{backgroundColor: '#EBEFF2',paddingBottom: '100%'}}>
      
      <RegistroForm setAuthentication={props.setAuthentication}></RegistroForm>
     

    </main>);
  
}

export default RegF;

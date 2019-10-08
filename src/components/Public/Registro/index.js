import React from 'react';

import RegF from './RegF'

import 'bootstrap/dist/css/bootstrap.min.css';

function Registro (props){
  
    return(
    <main className="main" >
    
      <RegF setAuthentication={props.setAuthentication}></RegF>
     

    </main>);
  
}

export default Registro;

import React from 'react';
import Header from './Header';
import RegisterForm from'./RegisterForm';

import 'bootstrap/dist/css/bootstrap.min.css';

function Registro (){
  
    return(
    <main className="main">
      <Header></Header>
<RegisterForm/>

    </main>);
  
}

export default Registro;

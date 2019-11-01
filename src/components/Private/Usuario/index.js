import React, { useState}  from 'react';
import LeftSideBar from './LeftsideBar';
import Trabajo from './Trabajos'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {Link} from 'react-router-dom';
import {auth} from './../../../config/firebase';

function getEmail(){
    auth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          return user.email;      
        } else {
          // No user is signed in.
          return "";
        }
      });
}


function Usuario(props){
    const {history}=props
    

    return(<main className="main">
        
        <Row >
            <Col xs lg={2} style={{height:'10px'}}>
          
           <LeftSideBar/>
           
            </Col>
            <Col >
            <h2>Trabajos publicados</h2>
            <hr></hr>
           
           
                <Trabajo></Trabajo>
       
           
                <h2>Trabajos aceptados</h2>
            <hr ></hr>
            <Trabajo></Trabajo>
            </Col>
            <Col>
            <h1>Usuariooo</h1></Col>
            <input disabled value={getEmail()} id="email" type="text" class="validate"></input>
            <p>>sjfddfkjlkjlk</p> 
            

        </Row>
    </main>);
}
export default Usuario;
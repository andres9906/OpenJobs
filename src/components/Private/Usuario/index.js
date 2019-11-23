
import React, { useState, useEffect } from 'react';
import { db } from './../../../config/firebase';
import Aceptados from './Aceptado'
import LeftSideBar from './LeftsideBar';
import Trabajo from './Trabajos'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Usuario() {
   
  
  const [usuario, setUsuario] = React.useState([]);
  
  
  useEffect(() => {
      var url = new URL(window.location.href);
      
      
      const fetchData = async () => {
        
          const data1= await db.collection("Usuarios").doc(sessionStorage.getItem("user")).get();
          setUsuario({...data1.data(),id:data1.id})
         
      };
      fetchData();
    


  }, [])
  
    return (<div className="mai">
       
        <Row  style={{height:'100%', marginLeft: '0px',marginRight: '0px'}} >
            <Col style={{height:'auto'  ,paddingLeft:'0px'}}>

                <LeftSideBar />

            </Col>
            <Col >
                <Row style={{
    marginLeft: '0px',marginRight: '0px'
}}>
                    <h2>Trabajos publicados</h2>
                    <br/>
                    <hr></hr>
                    <hr></hr>


                    <Trabajo > </Trabajo>
                </Row>
                <Row style={{
    marginLeft: '0px',marginRight: '0px'
}}>
                    <h2>Trabajos Aceptado</h2>
                    <br/>
                    <hr></hr>
                    <hr></hr>


                    <Aceptados> </Aceptados>
                </Row>
            </Col>
            <Col>
<h1>{usuario.Nombre}</h1></Col>
        </Row>
    </div>);
}
export default Usuario;
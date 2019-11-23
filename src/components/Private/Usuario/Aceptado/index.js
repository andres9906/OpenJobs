import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Media from 'react-media';
import { db, usuari, getCurrentUserEmail } from './../../../../config/firebase'

import {
  withRouter
} from 'react-router-dom'


import Button from 'react-bootstrap/Button';

function Trabajo(props) {
  console.log(props)
  const { history } = props;
  const [resultado, setResultado] = React.useState([]);
  const [usuario, setUsuario] = React.useState([]);
  useEffect(() => {
    var url = new URL(window.location.href);


    const fetchData = async () => {
      console.log(sessionStorage.getItem("email"))
      
   
      const data = await db.collection("Trabajos").where('EmailWorker','==',sessionStorage.getItem("email").toLowerCase()).get();
      setResultado(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    

    };
 fetchData();
  


  }, []);
console.log(resultado)
  
  return (
    <ListGroup style={{ paddingTop: '100px' }}>
      <Media queries={{

        small: " (max-width: 999px)",
        medium: "(min-width: 1000px) and (max-width: 1418px)",
        large: "(min-width: 1419px)"
      }}>
       {matches => (
          <>
         
          {
          resultado.map(item=>( matches.small && <ListGroup.Item style={ {width: '400px'}} ><h4> {item.Nombre}</h4><br /><p>
            {item.Descripcion}<br /></p>
              <div class="but" style={{ paddingLeft: '250px', paddingTop: '30px' }}><Button variant="outline-info" onClick={() => history.push("/Search/Detail?Trabajo=".concat(item.id))}>Ver mas</Button>
              </div>
           </ListGroup.Item>))}
            {resultado.map(item=>( matches.medium && <ListGroup.Item style={ {width: '750px'}} ><h4> {item.Nombre}</h4><br /><p>
            {item.Descripcion}<br /></p>
              <div class="but" style={{ paddingLeft: '650px', paddingTop: '30px' }}><Button variant="outline-info" onClick={() => history.push("/Search/Detail?Trabajo=".concat(item.id))}>Ver mas</Button>
              </div>
           </ListGroup.Item>))}

           {resultado.map(item=>( matches.large && <ListGroup.Item style={ {width: '800px'}} ><h4> {item.Nombre}</h4><br /><p>
            {item.Descripcion}<br /></p>
              <div class="but" style={{ paddingLeft: '650px', paddingTop: '30px' }}><Button variant="outline-info" onClick={() => history.push("/Search/Detail?Trabajo=".concat(item.id))}>Ver mas</Button>
              </div>
           </ListGroup.Item>))}
          </>
        )}
      </Media>
      


    </ListGroup>

  );

}

export default withRouter(Trabajo);

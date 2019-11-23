import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {db} from './../../../../config/firebase';





import {
  withRouter
} from 'react-router-dom'


import Button from 'react-bootstrap/Button';
import Media from 'react-media';

function Resultado(props) {
  const { history } = props;
  
  const [resultado, setResultado] = React.useState([])






  useEffect(() => {
    var url = new URL(window.location.href);
 
    var d = url.searchParams.get("Query")
    var c=url.searchParams.get("Categoria")
    const fetchData = async () => {
      console.log(c)
      if(d!=null){

        
        const data = await db.collection("Trabajos").where("Descripcion","==",d).get();
        setResultado(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      }
      if(c!=null){

   
        const data = await db.collection("Trabajos").where("Categoria","==",c).get();
        setResultado(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      }
     
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
          {resultado.map(item=>( matches.small && <ListGroup.Item style={ {width: '400px'}} ><h4> {item.Nombre}</h4><br /><p>
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

export default withRouter(Resultado);

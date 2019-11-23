import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import BreadCrumb from 'react-bootstrap/Breadcrumb'
import {addComentario,db} from './../../../../config/firebase';
import React, { useState, useEffect } from 'react';
function Comentarios(){
  const [resultado, setResultado] = React.useState([])
  const[comentario,setComentario]=React.useState('')
  useEffect(() => {
    var url = new URL(window.location.href);
 
    var d = url.searchParams.get("Trabajo")
    const fetchData = async () => {
      

      const data = await db.collection("Comentarios").where("Trabajo","==",d).get();
      setResultado(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      
     
    };
    fetchData();

  
  }, []);
  console.log(resultado)
  const handleSubmit=(evt)=>{
      
 

 
     var url = new URL(window.location.href);

    var d = url.searchParams.get("Trabajo")
    evt.preventDefault()
    console.log(comentario)
    
    addComentario(comentario,d)
    setTimeout("location.reload(true);",1);
    
    }
return(<Row>
  <Row>
    <ul style={{listStyle:'none'}}>
    
  <li>
 
<Form onSubmit={handleSubmit}>
    
      
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Comentario</Form.Label>
      <Form.Control as="textarea" rows="3"  style={{width:'980px'}} onChange={e=>setComentario(e.target.value)} />
    </Form.Group>
    <Button variant="secondary"  type="submit" value="Submit" size="sm">
      Publicar
    </Button>

  </Form>
  </li>
  <li>
  {resultado.map(item=>(  <BreadCrumb>{item.Email}:{item.Comentario}</BreadCrumb>))}
  </li>
  </ul>
    
  
  </Row>

  <Row>

  </Row>
  
  

</Row>
  );

}
export default Comentarios;
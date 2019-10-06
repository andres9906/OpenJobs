import React from 'react';
import Detail from './Detalle'
import InfoU from './InfoU'
import Comentarios from './Comentarios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Pagination from 'react-bootstrap/Pagination';


function Content (){
  
    return(
    <main className="Content">
<Row style={{paddingTop:'40px'}}>
<Col style={{paddingLeft:'75px'}}>
<Detail/>

</Col>
<Col xs lg={3}>
  <InfoU></InfoU>
</Col>
</Row>
<Row style={{paddingTop:'70px' ,paddingLeft:'75px'}}>
  
</Row>
     

    </main>);
  
}

export default Content;

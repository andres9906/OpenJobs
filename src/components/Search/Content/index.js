import React from 'react';
import Resultado from './Resultados'
import Filtro from './Filtro'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Pagination from 'react-bootstrap/Pagination';


function Content (){
  
    return(
    <main className="Content">
<Row style={{paddingLeft :'30px'}}>
<Col xs lg={2} style={{paddingTop:'100px'}}>
<Filtro/>
</Col>
<Col>
<Resultado />
</Col>
        </Row>
        <Row style={{paddingLeft :'450px', paddingTop:'20px'}}>
<Pagination>
<Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item active>{1}</Pagination.Item>

 
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Item >{4}</Pagination.Item>
  <Pagination.Item>{5}</Pagination.Item>


  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
</Pagination>

        </Row>
     

    </main>);
  
}

export default Content;

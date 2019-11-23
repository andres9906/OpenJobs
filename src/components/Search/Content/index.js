import React from 'react';
import Resultado from './Resultados'
import Filtro from './Filtro'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Pagination from 'react-bootstrap/Pagination';


import Media from 'react-media';  
function Content (){
  
    return(
    <div className="algo" style={{paddingBottom:'0px'}}>
<Row style={{paddingLeft :'30px',marginLeft:'0px',marginRight:'0px'}}>
<Col xs lg={2} style={{paddingTop:'100px'}}>
<Filtro/>
</Col>
<Col>

<Resultado />
</Col>
        </Row>
        <Row style={{paddingLeft :'450px', paddingTop:'20px',marginLeft:'0px',marginRight:'0px'}}>


        </Row>
     

    </div>);
  
}

export default Content;

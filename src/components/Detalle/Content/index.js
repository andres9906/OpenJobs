import React from 'react';
import Detail from './Detalle'
import InfoU from './InfoU'
import Comentarios from './Comentarios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-media';



function Content(props) {

  return (
    <div className="Content" style={{ paddingBottom: '0px' }}>
      <Row style={{ paddingTop: '40px', marginRight: '0px', marginLeft: '0px' }}>
        <Col style={{ paddingLeft: '75px' }}>
          <Detail />

        </Col>
        <Col xs lg={3}>
          <InfoU auth={props.auth}></InfoU>
        </Col>
      </Row>
      <Row style={{ paddingTop: '70px', paddingLeft: '75px', marginRight: '0px', marginLeft: '0px', paddingBottom: '10px' }}>
        
        <Comentarios ></Comentarios>
      </Row>


    </div>);

}

export default Content;

import React from 'react';
import LeftSideBar from './LeftsideBar';
import Trabajo from './Trabajos'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Usuario() {
    return (<div className="main">
        {console.log(sessionStorage.getIte("user"))}
        <Row style={
            marginLeft: '-1',
    marginRight: '0px';}
>
            <Col xs lg={2} style={{ height: '10px' }}>

            <LeftSideBar />

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
            <h1>Usuario</h1></Col>
        </Row>
    </dv >);
}
export default Usuario;
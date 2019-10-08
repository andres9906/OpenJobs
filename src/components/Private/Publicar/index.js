import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function Publicar() {
    return (
        <main className="Publicar" >
            <form>

                <section class="cont">
                    <section class="todo">
                        <h5><strong>Subir</strong> </h5>
                        <Breadcrumb style={{ height: '50px' }}></Breadcrumb>
                        <Row>
                            <Col sm={2}><label>Nombre del trabajo</label></Col>
                            <Col sm={6}><Form.Control placeholder="Nombre del trabajo"></Form.Control></Col>
                        </Row>
                        <br    ></br>
                        <Row>
                            <Col sm={2}><label>Sueldo</label></Col>
                            <Col sm={5}><Form.Control placeholder="Sueldo"></Form.Control></Col>
                            <Col sm={5}><Form.Control placeholder="Tiempo"></Form.Control></Col>
                        </Row>
                        <br    ></br>
                        <Row>
                            <Col sm={2}><label>Sueldo</label></Col>
                            <Col sm={10}> <Form.Control as="textarea" rows="5" /></Col>

                        </Row>
                        <br    ></br>
                        <Row>
                            <Col sm={2}><label>Sueldo</label></Col>
                            <Form.Group as={Col} controlId="formGridState">
                          
                                <Form.Control as="select">
                                    <option>Categorias</option>
                                    
                                    <option>Cuidar Niños</option>
                                    <option>Tutoria</option>
                                    <option>Hacer aseo</option>
                                    <option>Cocina</option>
                                    <option>Otros</option>
                                </Form.Control>
                            </Form.Group>

                        </Row>  
                    </section>
                    <div class="end">
                    <Breadcrumb >
                    <label>subir</label> <a href="/Usuario"> volver</a></Breadcrumb>

      

                    </div>
                </section>
            </form>
        </main>
    );
}

export default Publicar;

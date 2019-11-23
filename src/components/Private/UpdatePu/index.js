import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import LeftSideBar from './LeftsideBar'

import {updateWork2,deleteWork} from './../../../config/firebase';
function UPPublicar() {

  const[nombre,setNombre]=React.useState('')
  const[sueldo,setSueldo]=React.useState('')
  const[descripcion,setDescripcion]=React.useState('')
  const [open,setOpen]=React.useState(false)
  const[mens,setMens]=React.useState('')
  const [categoria,setCategoria]=React.useState('')
  
  const handleSubmit=(evt)=>{

    evt.preventDefault()
    
    console.log("Funcnas")
    console.log(categoria)
    var url = new URL(window.location.href);
     var d = url.searchParams.get("Trabajo")
    updateWork2(d,nombre,descripcion,sueldo,categoria)
    setTimeout(()=>{
        setMens('')
    setOpen(false)
      }, 2000); 
          setMens("Aplicacion enviada");
          setOpen(true);
    setNombre('')
    setSueldo('')
    setDescripcion('')
    
    
    //    }
    }
    const handleSubmit2=(evt)=>{

        evt.preventDefault()
        
        console.log("Funcnas")
        console.log(categoria)
        var url1 = new URL(window.location.href);
        var d1 = url1.searchParams.get("Trabajo")
        deleteWork(d1)
        setTimeout(()=>{
            setMens('')
        setOpen(false)
          }, 2000); 
              setMens("Aplicacion enviada");
              setOpen(true);
        setNombre('')
        setSueldo('')
        setDescripcion('')
        
        
        //    }
        }
    return (<Row style={{marginLeft:'0px',marginRight:'0px'}}>
         <Col  sm={2} style={{height:'auto'  ,paddingLeft:'0px'}}>

<LeftSideBar />

</Col>
        <Col>
        <div className="Publicar" >
            <form c>

                <section class="cont">
                    <section class="todo">
                    <Alert variant="success" show={open}>
{mens}
</Alert>
                        <h5><strong>Actualizar</strong> </h5>
                        <Breadcrumb style={{ height: '50px' }}></Breadcrumb>
                        <Row>
                            <Col sm={2}><label>Nombre del trabajo</label></Col>
                            <Col sm={6}><Form.Control placeholder="Nombre del trabajo" value={nombre} onChange={e=>setNombre(e.target.value)} required></Form.Control></Col>
                        </Row>
                        <br    ></br>
                        <Row>
                            <Col sm={2}><label>Sueldo</label></Col>
                            <Col sm={6}><Form.Control placeholder="Sueldo" value={sueldo} onChange={e=>setSueldo(e.target.value)} required></Form.Control></Col>

                        </Row>
                        <br    ></br>
                        <Row>
                            <Col sm={2}><label>Descripcion</label></Col>
                            <Col sm={10}> <Form.Control as="textarea" rows="5" value={descripcion} onChange={e=>setDescripcion(e.target.value)} /></Col>

                        </Row>
                        <br    ></br>
                        <Row>
                            <Col sm={2}><label>Categoria</label></Col>
                            <Form.Group as={Col} controlId="formGridState">

                                <Form.Control as="select" value={categoria}onChange={e=>setCategoria(e.target.value)}>
                                    <option values="Categoria">Categorias</option>

                                    <option value="cuidar niños">Cuidar Niños</option>
                                    <option value="tutoria">Tutoria</option>
                                    <option value="hacer aseo" >Hacer aseo</option>
                                    <option value="cocina">Cocina</option>
                                    <option>Otros</option>
                                </Form.Control>
                            </Form.Group>

                        </Row>
                    </section>
                    <div class="end">
                    <Breadcrumb >
                    <Button variant="primary" type="submit">Actualizar</Button>
                    <a href="/Usuario"> volver</a></Breadcrumb>



                    </div>
                </section>
            </form>
            
        </div>
        </Col>

        </Row>
    );
}

export default UPPublicar;

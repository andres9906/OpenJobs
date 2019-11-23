import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import LeftSideBar from './LeftsideBar'
import { update, updatePass ,updateE} from './../../../config/firebase'
function UpdateU() {
  console.log(sessionStorage.getItem("email"))
  const [nombre, setNombre] = React.useState('')
  const [sueldo, setSueldo] = React.useState('')
  const [descripcion, setDescripcion] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const [mens, setMens] = React.useState('')
  const [categoria, setCategoria] = React.useState('')

  const handleSubmit = (evt) => {

    evt.preventDefault()
    if (nombre) {
      update(sessionStorage.getItem("user"), nombre)

    }
    if (descripcion) {
      updatePass(descripcion)

    }
    
    console.log("Funcnas")
    console.log(categoria)

    setTimeout(() => {
      setMens('')
      setOpen(false)
    }, 2000);
    setMens("Actulizado");
    setOpen(true);
    setNombre('')
    setSueldo('')
    setDescripcion('')


    //    }
  }
  return (<Row style={{ marginLeft: '0px', marginRight: '0px' }}>
    <Col sm={2} style={{ height: 'auto', paddingLeft: '0px' }}>

      <LeftSideBar />

    </Col>
    <Col>
      <div className="Publicar" >
        <form onSubmit={handleSubmit}>

          <section class="cont">
            <section class="todo">
              <Alert variant="success" show={open}>
                {mens}
              </Alert>
              <h5><strong>Actualizar</strong> </h5>
              <Breadcrumb style={{ height: '50px' }}></Breadcrumb>
              <Row>
                <Col sm={2}><label>Nombre</label></Col>
                <Col sm={6}><Form.Control placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} ></Form.Control></Col>
              </Row>
              <br    ></br>
             
     
              <Row>
                <Col sm={2}><label>Contraseña</label></Col>
                <Col sm={6}><Form.Control type="password" placeholder="Contraseña" value={descripcion} onChange={e => setDescripcion(e.target.value)} ></Form.Control></Col>

              </Row>

            </section>
            <div class="end">
              <Breadcrumb >
                <Button variant="primary" type="submit">Actulizar</Button>
                <a href="/Usuario"> volver</a></Breadcrumb>



            </div>
          </section>
        </form>
      </div>
    </Col>
  </Row>
  );
}

export default UpdateU;

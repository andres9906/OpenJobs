import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';


import {
withRouter
} from 'react-router-dom'





function Header(props){
 const {history}=props; 
    return(
<>
<Navbar class=" justify-content-between" bg="#" variant="dark" className="nav" style={{backgroundColor : '#3b83bd'}}>
<Navbar.Brand href="#home">OpenJobs</Navbar.Brand>
<Nav className="mr-auto">
<Form inline >
   
      <FormControl type="text" placeholder="Search" className="mr-sm-2" id="searchBar" style={{width:'800px'}} />
      <Button variant="outline-light" onClick={() =>history.push('/Search')}>Search</Button>
    </Form>
    </Nav>
    <Nav className="">
      
      <NavDropdown title="Categorias" id="collasible-nav-dropdown" active>
  
 
        <NavDropdown.Item href="/Search">Cuidar mascotas</NavDropdown.Item>
        <NavDropdown.Item href="/Search">Tutoria</NavDropdown.Item>
        <NavDropdown.Item href="/Search">Hacer aseo</NavDropdown.Item>
        <NavDropdown.Item href="/Search">Cocinar</NavDropdown.Item>
        <NavDropdown.Item href="/Search">Otros</NavDropdown.Item>
       
       
      </NavDropdown>
      <Nav.Link href="/Login" active>Iniciar sesion</Nav.Link>
        
      <Nav.Link href="/Registro" active>Registarse </Nav.Link>
     
    </Nav>
 
  </Navbar>
 
</>
                );
}
export default  withRouter(Header);

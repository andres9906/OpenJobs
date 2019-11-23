import React,{usuState,useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';
import Media from 'react-media';  


import {
withRouter
} from 'react-router-dom'





function Header(props){
 const {history}=props; 
 const[busqueda,setBusqueda]=React.useState();

 

    
    
  const handleSubmit = (evt) => {
    
    evt.preventDefault();
  
    
    const cadena="/Search?Query="
   const url=cadena.concat(busqueda)
    history.push(url)
    setTimeout("location.reload(true);",10);
    setBusqueda('')
    console.log(url)
    
  }
    return(
<>
<Navbar collapseOnSelect expand="lg" bg="#" variant="dark" style={{backgroundColor : '#3b83bd' }} >
<Navbar.Brand href="/">OpenJobs</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav className="mr-auto">
<Form inline  onSubmit={handleSubmit}>
<Media queries={{
       
          small: " (max-width: 1276px)",
          medium: "(min-width: 1277px) and (max-width: 1418px)",
          large: "(min-width: 1419px)"
        }}>
          {matches => (
            <>
              {matches.small &&  <FormControl type="text" placeholder="Search" className="mr-sm-2" id="searchBar" style={{width:'400px'}}  onChange={e=>setBusqueda(e.target.value)}/>}
              {matches.medium &&  <FormControl type="text" placeholder="Search" className="mr-sm-2" id="searchBar" style={{width:'650px'}}  onChange={e=>setBusqueda(e.target.value)}/>}
              

              {matches.large && <FormControl type="text" placeholder="Search" className="mr-sm-2" id="searchBar" style={{width:'800px'}}  onChange={e=>setBusqueda(e.target.value)}/>}
           </>
          )}
        </Media>


      <Button variant="outline-light" type="submit">Search</Button>


      
    </Form>
    </Nav>
    </Nav>
    <Nav className="">
      
      <NavDropdown title="Categorias" id="collasible-nav-dropdown" active>
  
 
      <NavDropdown.Item href="/Search?Categoria=cuidar niños">Cuidar niños</NavDropdown.Item>
        <NavDropdown.Item href="/Search?Categoria=tutoria">Tutoria</NavDropdown.Item>
        <NavDropdown.Item href="/Search?Categoria=hacer aseo">Hacer aseo</NavDropdown.Item>
        <NavDropdown.Item href="/Search?Categoria=cocina">Cocinar</NavDropdown.Item>
        <NavDropdown.Item href="/Search?Categoria=otros">Otros</NavDropdown.Item>
       
       
      </NavDropdown>
      <Nav.Link href="/About" active>Acerca de</Nav.Link>
      <Nav.Link href="/Login" active>Iniciar sesion</Nav.Link>
        
      <Nav.Link href="/Registro" active>Registarse </Nav.Link>
     
     
    </Nav>
  </Navbar.Collapse>
</Navbar>


 
</>
                );
}
export default  withRouter(Header);

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

function Section1(){

return(
<Carousel>
    <Carousel.Item>
    <Image src={require('./img/images.jpg')} fluid />
    
      <Carousel.Caption>
        <h3>Servicio de aseo</h3>
        <p>Personas dispuestas a limpiar tu casa</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <Image src={require('./img/descarga1.jpg')} fluid />
   
  
      <Carousel.Caption>
        <h3>Servicio de tutoria</h3>
        <p>La mejor atencion para los niños</p>
      </Carousel.Caption>
    </Carousel.Item>
  
   
  </Carousel>);

}
export default Section1;
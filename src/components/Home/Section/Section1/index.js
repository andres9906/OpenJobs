import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Section1(){

return(
<Carousel>
    <Carousel.Item>
    <img src={require('./img/images.jpg')}  />
      <Carousel.Caption>
        <h3>Servicio de aseo</h3>
        <p>Personas dispuestas a limpiar tu casa</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={require('./img/descarga1.jpg')}  />
  
      <Carousel.Caption>
        <h3>Servicio de tutoria</h3>
        <p>La mejor atencion para los niños</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={require('./img/images.jpg')}  />
  
      <Carousel.Caption>
        <h3>Buscar otra imangen</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
   
  </Carousel>);

}
export default Section1;
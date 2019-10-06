import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import {
  withRouter
  } from 'react-router-dom'
  
  
import Button from 'react-bootstrap/Button';
function Resultado (props){
  const {history}=props; 
  
    return(
        <ListGroup style={{paddingTop:'100px'}}>
        <ListGroup.Item style={{width:'800px',height:'260px'}}><h4>Titulo</h4><br/><p>	
A unique identifier for the Component, the eventKey makes it distinguishable from others in a set. Similar to React's key prop, in that it only needs to be unique amongst the Components siblings, not globally.<br/></p>
<div class="but" style={{paddingLeft:'650px',paddingTop:'30px'}}><Button variant="outline-info" onClick={() =>history.push('/Search/Detail')}>Ver mas</Button>
</div>
</ListGroup.Item>
<ListGroup.Item style={{width:'800px',height:'260px'}}><h4>Titulo</h4><br/><p>	
A unique identifier for the Component, the eventKey makes it distinguishable from others in a set. Similar to React's key prop, in that it only needs to be unique amongst the Components siblings, not globally.<br/></p>
<div class="but" style={{paddingLeft:'650px',paddingTop:'30px'}}><Button variant="outline-info">Ver mas</Button>
</div>
</ListGroup.Item>
<ListGroup.Item style={{width:'800px',height:'260px'}}><h4>Titulo</h4><br/><p>	
A unique identifier for the Component, the eventKey makes it distinguishable from others in a set. Similar to React's key prop, in that it only needs to be unique amongst the Components siblings, not globally.<br/></p>
<div class="but" style={{paddingLeft:'650px',paddingTop:'30px'}}><Button variant="outline-info">Ver mas</Button>
</div>
</ListGroup.Item>
<ListGroup.Item style={{width:'800px',height:'260px'}}><h4>Titulo</h4><br/><p>	
A unique identifier for the Component, the eventKey makes it distinguishable from others in a set. Similar to React's key prop, in that it only needs to be unique amongst the Components siblings, not globally.<br/></p>
<div class="but" style={{paddingLeft:'650px',paddingTop:'30px'}}><Button variant="outline-info">Ver mas</Button>
</div>
</ListGroup.Item>
<ListGroup.Item style={{width:'800px',height:'260px'}}><h4>Titulo</h4><br/><p>	
A unique identifier for the Component, the eventKey makes it distinguishable from others in a set. Similar to React's key prop, in that it only needs to be unique amongst the Components siblings, not globally.<br/></p>
<div class="but" style={{paddingLeft:'650px',paddingTop:'30px'}}><Button variant="outline-info">Ver mas</Button>
</div>
</ListGroup.Item>
<ListGroup.Item style={{width:'800px',height:'260px'}}><h4>Titulo</h4><br/><p>	
A unique identifier for the Component, the eventKey makes it distinguishable from others in a set. Similar to React's key prop, in that it only needs to be unique amongst the Components siblings, not globally.<br/></p>
<div class="but" style={{paddingLeft:'650px',paddingTop:'30px'}}><Button variant="outline-info">Ver mas</Button>
</div>
</ListGroup.Item>

  </ListGroup>

    );
  
}

export default withRouter(Resultado);

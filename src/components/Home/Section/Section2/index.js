import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby } from '@fortawesome/free-solid-svg-icons';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { faBook} from '@fortawesome/free-solid-svg-icons';
import { faDog} from '@fortawesome/free-solid-svg-icons';
import { faUtensils} from '@fortawesome/free-solid-svg-icons'

import {
    withRouter
    } from 'react-router-dom'
    
import { faPlus} from '@fortawesome/free-solid-svg-icons'
function Section2(props){
    const {history}=props; 
 
    return(
        
      <section className="sec2">
          <h4>Categorias</h4>
<div class="row">

    <div class="caja" >
    <FontAwesomeIcon icon={faTrash} style={{fontSize:'5em'}}/>
<div> <a href="/Search?Categoria=hacer aseo">Hacer aseo</a></div>
    </div>
    <div class="caja">
    <FontAwesomeIcon icon={faBaby} style={{fontSize:'5em'}}/>
     
     <div> <a href="/Search?Categoria=cuidar niños">Cuidar niños</a></div>
         </div>
    <div class="caja">
         <FontAwesomeIcon icon={faBook} style={{fontSize:'5em'}}/>
     
         <div> <a href="/Search?Categoria=tutoria">Tutoria</a></div>
         </div>
  
</div>
<div class="row">

    <div class="caja">
    <FontAwesomeIcon icon={faDog} style={{fontSize:'5em'}}/>
    <div> <a href="/Search?Categoria=cuidar mascotas">Cuidar mascotas</a></div>
    </div>
    <div class="caja">
    <FontAwesomeIcon icon={faUtensils} style={{fontSize:'5em'}}/>
    <div> <a href="/Search?Categoria=cocina">Cocina</a></div>
         </div>
         <div class="caja">
         <FontAwesomeIcon icon={faPlus} style={{fontSize:'5em'}}/>
         <div> <a href="/Search?Categoria=otros">Otros</a></div>
         </div>
  
</div>

      </section>
    );
}
export default  withRouter(Section2);
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby } from '@fortawesome/free-solid-svg-icons';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { faBook} from '@fortawesome/free-solid-svg-icons';
import { faDog} from '@fortawesome/free-solid-svg-icons';
import { faUtensils} from '@fortawesome/free-solid-svg-icons'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
function Section2(){
    return(
      <section className="sec2">
          <h4>Categorias</h4>
<div class="row">

    <div class="caja">
    <FontAwesomeIcon icon={faTrash} style={{fontSize:'5em'}}/>
<div>Hacer aseo</div>
    </div>
    <div class="caja">
    <FontAwesomeIcon icon={faBaby} style={{fontSize:'5em'}}/>
     
     <div> Cuidar niños</div>
         </div>
    <div class="caja">
         <FontAwesomeIcon icon={faBook} style={{fontSize:'5em'}}/>
     
     <div> Tutoria</div>
         </div>
  
</div>
<div class="row">

    <div class="caja">
    <FontAwesomeIcon icon={faDog} style={{fontSize:'5em'}}/>
<div> Cuidar mascotas</div>
    </div>
    <div class="caja">
    <FontAwesomeIcon icon={faUtensils} style={{fontSize:'5em'}}/>
     <div> Cocineros</div>
         </div>
         <div class="caja">
         <FontAwesomeIcon icon={faPlus} style={{fontSize:'5em'}}/>
     <div> Otros</div>
         </div>
  
</div>

      </section>
    );
}
export default Section2;
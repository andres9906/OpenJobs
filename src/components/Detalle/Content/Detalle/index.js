import Media from 'react-media'
import React, { useState, useEffect } from 'react';
import { db } from './../../../../config/firebase';

function Detalle() {
    const [resultado, setResultado] = React.useState([]);
    useEffect(() => {
        var url = new URL(window.location.href);

        var d = url.searchParams.get("Trabajo")
        const fetchData = async () => {

            const data = await db.collection("Trabajos").doc(d).get();
            setResultado({ ...data.data(), id: data.id });
            
        };
        fetchData();
        
      

    }, []);
    console.log(resultado)
    return (
        <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
          }}>
            {matches => (
              <>
                {matches.small && <div className="detalle" style={{width:'400px'}}>

<h1>{resultado.Nombre}</h1>

<p><h3>Descripcion:</h3>{resultado.Descripcion} <br></br><h3>Sueldo:</h3>{resultado.Sueldo}</p>

</div>}
                {matches.medium && <div className="detalle" style={{width:'600px'}}>

<h1>{resultado.Nombre}</h1>

<p><h3>Descripcion:</h3>{resultado.Descripcion} <br></br><h3>Sueldo:</h3>{resultado.Sueldo}</p>

</div>}
                {matches.large && <p>  <div className="detalle" style={{width:'700px'}}>

<h1>{resultado.Nombre}</h1>

<p><h3>Descripcion:</h3>{resultado.Descripcion} <br></br><h3>Sueldo:</h3>{resultado.Sueldo}</p>

</div></p>}
              </>
            )}
          </Media>
        
      
    );

}

export default Detalle;


import React, { useState, useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import { db, Aplicacion, updateWork } from './../../../../config/firebase'
import Alert from 'react-bootstrap/Alert'
function InfoU(props) {
    const [aplicante, setAplicante] = React.useState([]);
    const [resultado, setResultado] = React.useState([]);
    const [mens, setMens] = React.useState('')
    const [open, setOpen] = React.useState('')

    useEffect(() => {
        var url = new URL(window.location.href);

        var d = url.searchParams.get("Trabajo")
        const fetchData = async () => {

            const data = await db.collection("Trabajos").doc(d).get();
            setResultado({ ...data.data(), id: data.id });
            if (sessionStorage.getItem("email") != null) {
                const data1 = await db.collection("Aplicantes").where('EmailCreador', '==', sessionStorage.getItem("email").toLowerCase()).get();
                setAplicante(data1.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            }
        };
        fetchData();


    }, []);
    console.log(aplicante)
    const handleSubmit2 = (evt) => {


        const data3 = db.collection("Aplicantes").where('EmailCreador', '==', sessionStorage.getItem("email").toLowerCase()).get().then(snapshot => {
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }

            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data().EmailAplicante);
                updateWork(d, doc.data().EmailAplicante)
            });
        })
            .catch(err => {
                console.log('Error getting documents', err);
            });


        var url = new URL(window.location.href);

        var d = url.searchParams.get("Trabajo")
        evt.preventDefault()


        //updateWork(d,aplicante.Email)


    }
    const handleSubmit1 = (evt) => {




        var url = new URL(window.location.href);

        var d = url.searchParams.get("Trabajo")
        evt.preventDefault()

        setTimeout(() => {
            setMens('')
            setOpen(false)
        }, 2000);
        setMens("Aplicacion enviada");
        setOpen(true);
        Aplicacion(resultado.Email, d)


    }
    console.log(props.auth)
    return (<div className="Algonuevo">
    <Alert variant="success" show={open}>
        {mens}
    </Alert>
    {props.auth ?
        <>
            {resultado.Email == sessionStorage.getItem("email").toLowerCase() ? <>< h6 > {resultado.Email}

            </h6>

                <ListGroup style={{ height: '300px', overflow: 'auto' }} >
                    {aplicante.map(item => (

                        <ListGroup.Item>{item.EmailAplicante} <form onSubmit={handleSubmit2}> <button type="submit">aceptar</button></form></ListGroup.Item>))}
                </ListGroup ></> : <>< h6 > {resultado.Email}</h6> <form onSubmit={handleSubmit1}>

                    <Button variant="secondary" type="submit" value="Submit" size="sm">
                        Aplicar
</Button>
                </form></>}



        </>
        : < h6 > {resultado.Email}</h6>}</div >


    );
}
export default InfoU;
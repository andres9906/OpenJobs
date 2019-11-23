import React,{useState, useEffect} from 'react';

import Header from './Header';
import Home from './../Home';
import Search from './../Search';
import Detail from './../Detalle';
import About from './../About'
import UpdateU from './UpdateU';
import UPPublicar from './UpdatePu';
import Usuario from './Usuario'
import Publicar from './Publicar'




import { BrowserRouter, Route} from 'react-router-dom';

function Private(props) {
 
    return(
    <main className="main">
        
     <BrowserRouter>

     <Header setAuthentication={props.setAuthentication} />



     <Route path="/" exact component={Home}></Route>
     
     <Route path="/Search/Detail" render={()=><Detail auth={props.auth} />}></Route>
     <Route path="/Search" exact component={Search}></Route>
     <Route path="/Usuario" exact component={Usuario}></Route>
    <Route path="/Publicar" exact component={Publicar}></Route>
    <Route path="/UpdatePu" exact component={UPPublicar}></Route>
    <Route path="/About" exact component={About}></Route>
    <Route path="/Update" exact component={UpdateU}></Route>
     </BrowserRouter>

    </main>);
  
}

export default Private;

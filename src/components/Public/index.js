import React,{useState, useEffect} from 'react';
import Home from './../Home';
import Search from './../Search';
import Detail from './../Detalle';
import Register from './Registro';
import Header from './Header';
import Login from './Login';
import RecuperarPass from'./RecuperarPass';
import About from  './../About';




import { BrowserRouter, Route} from 'react-router-dom';

function Public(props) {
 

    return(
    <main className="main">
  
     <BrowserRouter>
     <Header ></Header>
     <Route path="/" exact component={Home}></Route>
     <Route path="/Search" exact component={Search}></Route>
     <Route path="/Search/Detail" exact component={Detail}></Route>
     <Route path="/Registro" render={()=><Register setAuthentication={props.setAuthentication} />}></Route>
     <Route path="/Login" render={()=><Login setAuthentication={props.setAuthentication} />}></Route>
    <Route path="/RecuperarContraseña" exact component={RecuperarPass}></Route>
    <Route path="/About" exact component={About}></Route>
   

     </BrowserRouter>

    </main>);
  
}

export default Public;

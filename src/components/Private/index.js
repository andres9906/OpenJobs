import React,{useState, useEffect} from 'react';

import Header from './Header';
import Home from './../Home';
import Search from './../Search';
import Detail from './../Detalle';






import { BrowserRouter, Route} from 'react-router-dom';

function Private(props) {
 

    return(
    <main className="main">
  
     <BrowserRouter>

     <Header setAuthentication={props.setAuthentication} />



     <Route path="/" exact component={Home}></Route>
     
     <Route path="/Search/Detail" exact component={Detail}></Route>
     <Route path="/Search" exact component={Search}></Route>
     </BrowserRouter>

    </main>);
  
}

export default Private;

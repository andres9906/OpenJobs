import React from 'react';
import Home from './Home';
import Search from './Search';
import Detail from './Detalle'
import Register from './Registro';
import Login from './../Public/Login';
import Recuperar from './../Public/RecuperarPass';


import { BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
    <main className="main">
     
     <BrowserRouter>
     <Route path="/" exact component={Home}></Route>
     <Route path="/Search" exact component={Search}></Route>
     <Route path="/Search/Detail" exact component={Detail}></Route>
     <Route path="/Registro" exact component={Register}></Route>
     <Route path="/Login" component={Login}></Route>
     <Route path="/RecuperarContraseña" component={Recuperar}></Route>
     </BrowserRouter>

    </main>);
  }
}

export default App;

import React from 'react';
import Home from './Home';
import Search from './Search';
import Detail from './Detalle'
import Register from './Registro';

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
     </BrowserRouter>

    </main>);
  }
}

export default App;

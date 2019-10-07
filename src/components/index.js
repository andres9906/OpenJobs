import React, { useState, useEffect } from 'react';
import Public from './Public';
import Private from './Private';
import {signout} from './../config/firebase'





function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const uid = sessionStorage.getItem("user");
    uid !== null && setIsAuth(true);
  },[isAuth]);

  const setAuthentication = val => { 
    if(!val){
      signout();
      sessionStorage.clear();
    }  
    setIsAuth(val);
  }


  return (
    <main>     {
      isAuth ?
      
        <Private setAuthentication={setAuthentication} />
        :
        <Public setAuthentication={setAuthentication} />
    }
    </main>

  );

}

export default App;

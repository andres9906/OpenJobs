import React, {useState, useEffect} from 'react';
//import Public from './Public';
//import Private from './Private';

import theme from './theme';
import { signout } from './services/firebase';

function EstadoAuth() {
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
    <main>
        <MuiThemeProvider theme={theme}>
          {
            isAuth ?  
              <Private setAuthentication={setAuthentication} />
            :  
              <Public setAuthentication={setAuthentication} />
          }    
          
        </MuiThemeProvider>
    </main>
  );
}

export default EstadoAuth;
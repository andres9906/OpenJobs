import React from 'react';

import Content from './Content';

import 'bootstrap/dist/css/bootstrap.min.css';

function Detail (props){
   

    return(
    <div className="mai" style={{height: '100%'}}>
     
     <Content auth={props.auth}/>
    </div>);
  
}

export default Detail;

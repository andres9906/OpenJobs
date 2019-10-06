import React from 'react';



  function RegisterForm() {
    return( <div class="row #9e9e9e grey">
    <form id ="contacForm" class="col s12">
      <div class="row">
        <div class="input-field col s6 ">
          <input  id="first_name" type="text" class="validate "/>
          <label for="first_name" Style="font-size:20px; text-align:left" class="active white-text text-darken-2">First Name </label >
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name" Style="font-size:20px; text-align:left" class="active white-text text-darken-2">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input  id="ID" type="text" class="validate"/>
          <label for="ID" Style="font-size:20px; text-align:left" class="active white-text text-darken-2">ID</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate"/>
          <label for="password" Style="font-size:20px; text-align:left" class="active white-text text-darken-2">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email" Style="font-size:20px; text-align:left" class="active white-text text-darken-2">Email </label>
        </div>
      </div>
      <button id='submit'  class="btn waves-effect #03a9f4 light-blue "  name="action">Aceptar</button>
    </form>
  
  </div>);
  }

export default RegisterForm;
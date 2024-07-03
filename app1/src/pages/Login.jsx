// src/Login.js
import React from 'react';
import './Login.css';


const Login = () => {
  return (
    <div className="logpage">
      <br /><br /><br />
        <h1>Login Page</h1><br />
      <div className='container w-25 '>
        <label htmlFor="">Username :</label>
        <input type="text" className='form-control' /> <br />
        <label htmlFor="" >Password :</label>
        <input type="password" className='form-control' />
      </div>
      
    </div>
  );
};

export default Login;

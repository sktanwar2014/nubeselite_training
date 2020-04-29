import React, { useState, useEffect } from 'react';

import {Redirect } from 'react-router-dom';
import useSignUpForm from '../components/CustomHooks';
// API CALL
import LoginApi from '../api/LoginApi';

const RESET_VALUES = {
    email: '',
    password: '',
  };
function Login() {
	const [error, setError] = useState(false);
	const [loginn, setLogin] = useState(false);
    const login = async () => {
        const response = await LoginApi.login({
          email: inputs.email,
          password: inputs.password,
        });
        if(response.user.length===0){
            setError(true);
        }
        else{
            localStorage.setItem('user',response.user[0].email);
            setLogin(true);

        } 
      };
      const { inputs=null, handleInputChange, handleRandomInput, handleNumberInput, handleSubmit, handleReset, setInput,errors } = useSignUpForm(
          RESET_VALUES,
          login,
          // validate
        );
  return (
    <div className="pg-width">
        
      {loginn? (<Redirect to="/dashboard"/>) :''}
        <div class="login">
            <h1><a href="/">Admin Panel </a></h1>
            <div class="login-bottom">
                {error? <p className="error">Please check the credentials entered.</p>:''}
                <h2>Login</h2>
                <form>
                <div class="col-md-12">
                    <div class="login-mail">
                        <input type="email" placeholder="Email" name="email" id="email" required=""  onChange={handleInputChange}/>
                        <i class="fa fa-envelope"></i>
                    </div>
                    <div class="login-mail">
                        <input type="password" placeholder="Password" name="password" id="password" required=""  onChange={handleInputChange}/>
                        <i class="fa fa-lock"></i>
                    </div>
                    {/* <a class="news-letter " href="#">
                        <label class="checkbox1"><input type="checkbox" name="checkbox" /><i> </i>Forget Password</label>
                    </a> */}
                </div>
                <div class="col-md-12 login-do">
                    <label class="hvr-shutter-in-horizontal login-sub">
                            <input type="submit" onClick={handleSubmit} value="login"/>
                    </label>
                     
                </div>
                
                <div class="clearfix"> </div>
                </form>
            </div>
        </div>
    </div>
  );
}
export default Login;

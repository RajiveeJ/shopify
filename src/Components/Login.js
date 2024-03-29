import React, { useState } from "react";
import Home from '../Home'
import { Link } from "react-router-dom";
import "../styles.css";
// import Signup from "./Signup";

function Login(){

     // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    
        {
      username: "demo@gmail.com",
      password: "demo123"
    }  
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="LogIn" />
        </div>
          </form>
        
        Do not have account?&nbsp;&nbsp;&nbsp;<Link to="/signup">Signup</Link>


        <br />
        Demo username:demo@gmail.com pwd: demo123
        
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
       
        {isSubmitted ? <Home /> : renderForm}
      </div>
    </div>
  );
}

export default Login;

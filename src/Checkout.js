import React, { useState } from "react";
import Paid from "./Paid"



function Checkout(){

     // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  

  const errors = {
    cn: "Enter card number",
    ed: "Enter expiry date",
    cvv: "Enter cvv"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { cn, ed,cvv } = document.forms[0];

    

    // Compare user info
    
      if (cn == null) {
        // Invalid password
        setErrorMessages({ name: "cn", message: errors.cn });
      } 
      else if (ed == null) {
        // Invalid password
        setErrorMessages({ name: "ed", message: errors.ed });
      }
      else if (cvv == null) {
        // Invalid password
        setErrorMessages({ name: "cvv", message: errors.cvv });
      }
       else {
        setIsSubmitted(true);
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
          <label>Card number </label>
          <input type="text" name="cn" required />
          {renderErrorMessage("uname")}
        
        
          <label>Expiry date </label>
          <input type="text" name="ed" Placeholder="MM/YY" required />
          {renderErrorMessage("pass")}

          <label>CVV </label>
          <input type="text" name="cvv"  required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Pay" />
        </div>
          </form>
        
       
        
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
       
        {isSubmitted ? <Paid /> : renderForm}
      </div>
    </div>
  );
}

export default Checkout;
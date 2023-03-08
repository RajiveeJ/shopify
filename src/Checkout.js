import React from "react";

export default function Checkout() {
        
    return (
        <div>
            Card Number: <input type="text" required></input><br /><br />
            Expiry date: <input type="text" required placeholder="MM/YY"></input><br/><br />
            CVV        : <input type="text" required></input>
            <a class="nav-link" href="/paid" >Pay now </a> 
        </div>
     
    );
}

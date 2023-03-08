import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import ProductContext from "./Context";
function Navigation(args) {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const context = useContext(ProductContext);

  return (
    <div>
      <Navbar {...args}>
       <NavbarBrand href="/" style={{textAlign: "center"}}><b>Shopify</b></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          <NavItem>
              <li class="nav-item"><a class="nav-link" href="/products">Home</a></li>
            </NavItem>
            <NavItem>
              <li class="nav-item"><a class="nav-link" href="/products/smartphones">SmartPhones</a></li>
            </NavItem>
            <NavItem>
              <li class="nav-item"><a class="nav-link" href="/products/laptops">Laptops</a></li>
            </NavItem>
            <NavItem>
              <li class="nav-item"><a class="nav-link" href="/products/fragrances">Fragrances</a></li>
            </NavItem>
            <NavItem>
              <Link to="/mycart">Cart({context.cart.length})</Link>
              
            </NavItem>
            Total : {context.cartValue}
            <NavItem>
              <li class="nav-item"><a class="nav-link" href="/">Logout</a></li>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;

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
              <li class="nav-item"><Link class="nav-link" to="/products">Home</Link></li>
            </NavItem>
            <NavItem>
              <li class="nav-item"><Link class="nav-link" to="/products/smartphones">SmartPhones</Link></li>
            </NavItem>
            <NavItem>
              <li class="nav-item"><Link class="nav-link" to="/products/laptops">Laptops</Link></li>
            </NavItem>
            <NavItem>
              <li class="nav-item"><Link class="nav-link" to="/products/fragrances">Fragrances</Link></li>
            </NavItem>
            <NavItem>
              <Link class="nav-link" to="/mycart">Cart({context.cart.length})</Link>
              
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

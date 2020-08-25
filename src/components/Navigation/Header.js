import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <nav className="App sticky-top">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        position="sticky"
      >
        <Navbar.Brand href="#home" className="header__link">Coffney</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto "></Nav>
          <Nav>
            <Link  to="/">
              {/* <Nav.Link href="#home"> */}
                <li className="header__link p-2">Home</li>
              {/* </Nav.Link> */}
            </Link>
            {/* <Link exact to="/testimonials">
            <Nav.Link href="#testimonials">
              <li>Testimonials</li>
            </Nav.Link>
          </Link> */}
            <Link  to="/contact">
              {/* <Nav.Link href="#contact"> */}
                <li className="header__link p-2">Contact</li>
              {/* </Nav.Link> */}
            </Link>
            <Link  to="/checkout">
              {/* <Nav.Link href="#home"> */}
                <li className="header__link p-2">Checkout</li>
              {/* </Nav.Link> */}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Header;

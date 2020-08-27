import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useStateValue } from "../ContextAPI/StateProvider";

const Header = () => {
  const [{ basket }, user] = useStateValue();

  return (
    <nav className="App sticky-top">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        position="sticky"
      >
        <Navbar.Brand href="/" className="header__link">
          Coffney
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
         
        >
          <Nav className="mr-auto "></Nav>
          <Nav  className="header__nav__container">
            <Link to="/">
              <li className="header__link p-2">Home</li>
            </Link>

            <Link to="/contact">
              <li className="header__link p-2">Contact</li>
            </Link>

            <Link to="/login">
              <li className="header__link p-2">Login</li>
            </Link>


            <Link to="/checkout">
              <div className="header__checkout__visual p-2">
                <div className="header__checkout__number">
                  {basket?.length}
                </div>
                <FaShoppingCart className="header__cart" />
              </div>
            </Link>


          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Header;

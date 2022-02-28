import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../icon.png";
import { Collapse, Nav, NavbarBrand, NavbarToggler, Navbar } from "reactstrap";
import { Link } from "react-router-dom";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { useSelector } from "react-redux";

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartNumItems = useSelector((state) => state.store.cart.length);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavWrapper>
      <Navbar
        color="blue"
        dark
        expand="md"
        className="align-content-center my-0 py-0"
      >
        <Link to="/">
          <NavbarBrand>
            <img src={logo} alt="phone-store" />
            <span className="ml-3">Smart Store</span>
          </NavbarBrand>
        </Link>

        <NavbarToggler onClick={toggle}>
          {isOpen ? <ImMenu4 /> : <ImMenu3 />}
        </NavbarToggler>

        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="ml-auto align-items-center justify-content-center"
            navbar
          >
            <NavItem>
              <Link to="/">
                <span>Products</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/cart">
                <i className="fas fa-cart-plus" />
                <span className="ml-1">
                  <small className="cart-num-items">{cartNumItems}</small>
                </span>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  a {
    text-decoration: none;
  }

  top: 0;
  position: sticky;
  z-index: 10;
  background-color: var(--red);

  .navbar {
    width: 80%;
    margin: auto;
  }

  .navbar-toggler {
    padding: 0;
    border-radius: 5px;
    color: var(--white);
    font-size: 2rem;

    &:focus,
    &:visited {
      margin: none;
    }
  }

  .navbar-brand {
    font-size: 1.5rem;
    display: flex;
    align-items: center;

    & > img {
      height: 50px;
      background: linear-gradient(120deg, var(--green), var(--blue));
      border-radius: 8px;
      padding: 5px 0px;
      margin: 5px 0px;
    }
  }
`;

const NavItem = styled.div`
  margin: 0px 10px;
  font-size: 1.4rem;
  font-weight: 400;
  color: black;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 763px) {
    margin-bottom: 1rem;
  }

  & > a {
    color: var(--white);
    padding: 0 8px;
    &:hover {
      border-bottom: white 2px solid;
    }
  }
`;

export default MyNavbar;

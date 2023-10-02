import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavbarComponent = () => {
  const { carts } = useSelector((state) => state.allCart);
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary sticky-top"
        bg="tranparent"
        // fixed="top"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="lora d-flex justify-content-center fs-3"
          >
            Hunger Spot
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto franklin">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/menu"}>
                Menu
              </Nav.Link>
              <Nav.Link href="/login">LogIn</Nav.Link>
              <Nav.Link as={Link} to={"/contactus"}>
                Contact Us
              </Nav.Link>

              <Nav.Link as={Link} to={"/cart"}>
                <span type="button" className="  position-relative">
                  <AiOutlineShoppingCart className="fs-5" />
                  {carts.length > 0 ? (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
                      {carts.length}
                      <span className="visually-hidden ">unread messages</span>
                    </span>
                  ) : (
                    ""
                  )}
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

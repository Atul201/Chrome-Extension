import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "../assets/logo.svg";

const NavBar = () => {
  let navigate = useNavigate();

  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} href="/">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav
            style={{
              flex: 0.8,
              justifyContent: "space-between",
            }}
          >
            <Nav
              style={{
                alignItems: "center",
                gap: 15,
                fontWeight: "bold",
              }}
            >
              <NavDropdown title="Products"></NavDropdown>
              <Nav.Link onClick={() => navigate("/pricing")}>Pricing</Nav.Link>
              <Nav.Link>Privacy</Nav.Link>
              <Nav.Link>Support</Nav.Link>
              <NavDropdown title="Join Community"></NavDropdown>
            </Nav>
            <Nav
              style={{
                alignItems: "center",
              }}
            >
              <Button
                style={{
                  background: "rgba(0, 0, 0, 0.07)",
                  color: "black",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                Install Free Extension
              </Button>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

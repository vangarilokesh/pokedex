import React from "react";
import { Nav, Navbar, NavDropdown, Container, } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import "./Header.css";

export const Header = () => {
  const history=useNavigate();
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
      <div class="logo-image">
            <img src="./icons8-pokeball-bubbles-96.png" class="img-fluid"></img>
      </div>
        <Navbar.Brand
          href="/fs"
          style={{ fontWeight: "bold", color: "white", "font-size": "18px" }}
        >
          My_PokeDex
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {/* <Form inline>
              <FormControl type="text"
              placeholder="Search"
              className="mr-sm-2"`````
              />
            </Form> */}
          </Nav>
          <Nav>
            {/* <Nav.Link
              href="/predict"
              style={{
                fontWeight: "bold",
                color: "white",
                "font-size": "18px",
              }}
            >
              Image Upload
            </Nav.Link> */}
            {/* <Nav.Link
              href="/myCollections"
              style={{
                fontWeight: "bold",
                color: "white",
                "font-size": "18px",
              }}
            >
              My Collections
            </Nav.Link> */}
            <NavDropdown
              style={{
                fontWeight: "bold",
                color: "white",
                "font-size": "18px",
              }}
              title="Account"
              id="basic-nav-dropdown"
            >
              {/* <NavDropdown.Item
                href="#action/3.1"
                style={{ color: "black", "font-size": "18px" }}
              >
                My Profile
              </NavDropdown.Item> */}
              <NavDropdown.Item
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  history("/");
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;

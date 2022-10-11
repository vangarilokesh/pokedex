import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown, 
  Container, 
} from 'react-bootstrap';
//import myCollections from "../../screens/myCollections/myCollections"
export const Header = () => {
  return(
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/" style={{fontWeight: 'bold', color:"white",'font-size': '18px'}}>My_PokeDex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {/* <Form inline>
              <FormControl type="text"
              placeholder="Search"
              className="mr-sm-2"
              />
            </Form> */}
          </Nav>
          <Nav>
            <Nav.Link href="/myCollections" style={{fontWeight: 'bold', color:"white",'font-size': '18px'}}>My Collections</Nav.Link>
            <NavDropdown style={{fontWeight: 'bold', color:"white",'font-size': '18px'}} title="Lokesh" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" style={{color:"black",'font-size': '18px'}}>My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{color:"black",'font-size': '18px'}}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
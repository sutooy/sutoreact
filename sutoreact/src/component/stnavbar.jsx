import "../pages/suto.css"
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from "react-bootstrap/Nav";
 

const NavSuto = () => {
return (
<div>

    <Navbar className="nav-konten" collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Aulia Sutowijoyo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#profile">Profile</Nav.Link>
                <Nav.Link href="#portofolio">Portofolio</Nav.Link>
                <NavDropdown title="Other Excitment" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Achievment</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Colaboration</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Partner Page</NavDropdown.Item>
                </NavDropdown>
            </Nav>

        </Navbar.Collapse>
    </Navbar>
</div>
  );
};


export default NavSuto;
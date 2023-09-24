import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  "./NavBar.css"

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar" >
      <Container>
        <Navbar.Brand href="#home"><img src="/assets/img/icons/logo1.png" alt="" className='footer-img' />DepoFarma</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
        
          </Nav>
          <Nav>
            <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
            <Nav.Link href="#resources" className='nav-link'>Resources</Nav.Link>
            <Nav.Link href="#testimonials" className='nav-link'>Testimonials</Nav.Link>
             <Nav.Link href="#faq" className='nav-link'>FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
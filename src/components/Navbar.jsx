import { Navbar as RBNavbar, Container, Nav, Image, Form, InputGroup, Button, Badge, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/navbar.scss";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [savedCount, setSavedCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  
  useEffect(() => {
    const updateSavedCount = () => {
      try {
        const saved = JSON.parse(localStorage.getItem('findnest.saved') || '[]');
        setSavedCount(saved.length);
      } catch (e) {
        setSavedCount(0);
      }
    };
    
    updateSavedCount();
    window.addEventListener('storage', updateSavedCount);
    return () => window.removeEventListener('storage', updateSavedCount);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Search:', searchQuery);
  };

  return (
    <RBNavbar expand="lg" className="custom-navbar py-2 sticky-top">
      <Container>
        <LinkContainer to="/">
          <RBNavbar.Brand className="d-flex align-items-center">
            <Image 
              src={logo} 
              alt="FindNest Logo" 
              height="35" 
              className="d-inline-block align-top me-2 navbar-logo" 
            />
            <span className="brand-text">FindNest</span>
          </RBNavbar.Brand>
        </LinkContainer>
        <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
        <RBNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav className="nav-links">
              <LinkContainer to="/">
                <Nav.Link active={location.pathname === '/'}>
                  <i className="bi bi-house-door"></i>
                  <span className="d-lg-inline ms-1">Home</span>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link active={location.pathname === '/about'}>
                  <i className="bi bi-info-circle"></i>
                  <span className="d-lg-inline ms-1">About</span>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/collections">
                <Nav.Link active={location.pathname === '/collections'} className="collections-link">
                  <i className="bi bi-bookmark-heart"></i>
                  <span className="d-lg-inline ms-1">Collections</span>
                  {savedCount > 0 && (
                    <Badge bg="primary" pill className="saved-badge">
                      {savedCount}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link active={location.pathname === '/contact'}>
                  <i className="bi bi-envelope"></i>
                  <span className="d-lg-inline ms-1">Contact</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Form className="d-flex mx-lg-4 my-2 my-lg-0 flex-grow-1 max-width-500" onSubmit={handleSearch}>
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search for products..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant="outline-primary" type="submit" className="search-btn">
                  <i className="bi bi-search"></i>
                </Button>
              </InputGroup>
            </Form>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
};

export default Navbar;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3} sm={6} className="footer-section">
            <h5>FindNest</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-section">
            <h5>For Buyers</h5>
            <ul>
              <li><Link to="/search">Search Homes</Link></li>
              <li><Link to="/buyers-guide">Buyer's Guide</Link></li>
              <li><Link to="/mortgage-calculator">Mortgage Calculator</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-section">
            <h5>For Sellers</h5>
            <ul>
              <li><Link to="/list-property">List Your Property</Link></li>
              <li><Link to="/sellers-guide">Seller's Guide</Link></li>
              <li><Link to="/market-analysis">Market Analysis</Link></li>
              <li><Link to="/pricing-guide">Pricing Guide</Link></li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-section">
            <h5>Connect With Us</h5>
            <p>Stay updated with the latest property listings and real estate news.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>
        <div className="copyright">
          <p>© {new Date().getFullYear()} FindNest | All Rights Reserved | Privacy Policy | Terms of Service</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

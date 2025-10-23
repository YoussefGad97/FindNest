import { Container } from 'react-bootstrap';
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer bg-light py-3 mt-auto">
      <Container className="text-center">
        <p className="mb-0">© {new Date().getFullYear()} FindNest | All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;

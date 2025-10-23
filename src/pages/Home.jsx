import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import ProductMasonry from '../components/ProductMasonry';
import { useTheme } from '../context/ThemeContext';
import banner from '../assets/banner.jpg';
import "../styles/home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="landing-banner animated-fade" style={{ backgroundImage: `url(${banner})` }}>
        <div className="overlay">
          <Container>
            <h1 className="animated-slide-up">Discover the Best Finds on Amazon</h1>
            <p className="animated-slide-up delay">Curated collections, trending products, and must-have deals — all in one place.</p>
          </Container>
        </div>
      </div>

      <Container className="about-section">
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="about-image animated-slide-left">
              <div className="image-container">
                <img src={banner} alt="about" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-text animated-slide-right">
              <h2>About FindNest</h2>
              <div className="about-content">
                <p>
                  FindNest is your personal product discovery platform, making it effortless to find and save the best products from Amazon. Our curated collections are designed to help you make informed purchasing decisions.
                </p>
                <ul>
                  <li>Hand-picked quality products</li>
                  <li>Daily updated collections</li>
                  <li>Trusted by thousands of shoppers</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <ProductMasonry>
          {products.map(p => (
            <ProductCard key={p.id} id={p.id} title={p.title} image={p.image} price={p.price} affiliate={p.affiliate} />
          ))}
        </ProductMasonry>
      </Container>
    </section>
  );
};

export default Home;

import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const Collections = () => {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('findnest.saved') || '[]';
      const ids = JSON.parse(raw);
      setSaved(ids);
    } catch (e) {
      setSaved([]);
    }
  }, []);

  const savedProducts = products.filter(p => saved.includes(p.id));

  return (
    <Container className="py-4">
      <h2>Your Collections</h2>
      {savedProducts.length === 0 ? (
        <p>No saved items yet. Save items from the Home page.</p>
      ) : (
        <Row>
          {savedProducts.map(p => (
            <Col key={p.id} xs={12} md={6} lg={4} className="d-flex">
              <ProductCard id={p.id} title={p.title} image={p.image} price={p.price} affiliate={p.affiliate} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Collections;

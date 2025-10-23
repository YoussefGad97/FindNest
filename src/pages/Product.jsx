import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import products from '../data/products';

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <Container className="py-5">
        <h2>Product not found</h2>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.title} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p className="text-muted">${product.price}</p>
          <p>{product.description}</p>
          <div className="mt-3">
            <Button
              variant="primary"
              href={product.affiliate}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy on Amazon
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;

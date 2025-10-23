import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/product-card.scss';

const ProductCard = ({ id, title = 'Product', image, price, affiliate, onView }) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('findnest.saved') || '[]';
      const ids = JSON.parse(raw);
      setSaved(ids.includes(id));
    } catch (e) {
      setSaved(false);
    }
  }, [id]);

  const toggleSave = () => {
    try {
      const raw = localStorage.getItem('findnest.saved') || '[]';
      const ids = new Set(JSON.parse(raw));
      if (ids.has(id)) {
        ids.delete(id);
        setSaved(false);
      } else {
        ids.add(id);
        setSaved(true);
      }
      localStorage.setItem('findnest.saved', JSON.stringify(Array.from(ids)));
    } catch (e) {
      // ignore localStorage errors
    }
  };

  const handleClick = () => {
    if (affiliate) {
      window.open(affiliate, '_blank', 'noopener,noreferrer');
      return;
    }
    if (onView) onView();
  };

  return (
    <Card className="my-2 flex-fill product-card">
      {image && <Card.Img variant="top" src={image} alt={title} />}
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <Link to={`/product/${encodeURIComponent(id)}`}>{title}</Link>
        </Card.Title>
        {price && <Card.Text className="text-muted">${price}</Card.Text>}
        <div className="mt-auto">
          <Button variant="primary" onClick={handleClick} className="me-2">Buy on Amazon</Button>
          <Button variant={saved ? 'success' : 'outline-secondary'} size="sm" onClick={toggleSave}>
            {saved ? 'Saved' : 'Save'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

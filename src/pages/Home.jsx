import { motion } from "framer-motion";
import { Container } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import ProductMasonry from '../components/ProductMasonry';
import "../styles/home.scss";

const Home = () => {
  return (
    <section className="home">
      <motion.div className="landing-banner" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512446813052-6b1a6b87c1c7?q=80&w=1680&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a9e2b6ef8b1b1c7b6f5b3d8d8e9a2c0')" }}>
        <div className="overlay">
          <Container>
            <h1>Discover the Best Finds on Amazon</h1>
            <p>Curated collections, trending products, and must-have deals — all in one place.</p>
          </Container>
        </div>
      </motion.div>

      <Container className="about-section">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=1d6b5f6a0c3e4c2b3a6e8b7f9e5a1c2d" alt="about" style={{ width: '100%', borderRadius: 8 }} />
        </div>
        <div className="about-text">
          <h2>About FindNest</h2>
          <p>FindNest curates top products and deals from Amazon and makes it easy for you to discover, save, and purchase items. We pair curated lists with affiliate links so we can keep the lights on — please see our affiliate disclosure in the footer.</p>
        </div>
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

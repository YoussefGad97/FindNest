import './ProductGrid.scss';

const ProductGrid = ({ children }) => {
  return (
    <div className="product-masonry">
      {children}
    </div>
  );
};

export default ProductGrid;

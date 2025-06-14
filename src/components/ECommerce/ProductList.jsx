import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./ECommerce.css";
import PreviewPortal from "../../portals/PreviewPortal";

export default function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [previewProduct, setPreviewProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/product/${product.id}`} className="details-btn">Details</Link>
            <button onClick={() => setPreviewProduct(product)}>Quick Preview</button>
          </div>
        ))}
      </div>

      {previewProduct && (
        <PreviewPortal product={previewProduct} onClose={() => setPreviewProduct(null)} />
      )}
    </div>
  );
}

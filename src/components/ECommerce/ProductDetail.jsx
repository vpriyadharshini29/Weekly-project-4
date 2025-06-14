import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ECommerce.css";

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <h4>${product.price}</h4>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

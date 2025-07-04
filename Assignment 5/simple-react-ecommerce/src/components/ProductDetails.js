import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>
        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} className="details-image" />
      <h2 className="details-title">{product.title}</h2>
      <p className="details-desc">{product.description}</p>
      <p className="details-price">${product.price.toFixed(2)}</p>
      <button
        className="add-cart-btn"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

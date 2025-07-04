import React, { useState } from "react";
import productsData from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  let filtered = productsData.filter(
    p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  return (
    <div>
      <div className="product-filters">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={sort} onChange={e => setSort(e.target.value)} className="sort-select">
          <option value="">Sort By</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>
      <div className="product-grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filtered.length === 0 && <p>No products found.</p>}
      </div>
    </div>
  );
}

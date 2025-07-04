import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/" className="back-btn">Go Home</Link>
    </div>
  );
}

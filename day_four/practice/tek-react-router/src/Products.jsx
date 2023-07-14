import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./data";
import "./index.css";


function Products() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="app">
      <div className="grid-container">
        {data.map((vehicle, index) => {
          return (
          <Link
            to={`/product/${vehicle.id}`}
            key={vehicle.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`card ${index === hoveredIndex ? "active" : ""}`}>
              <div className="image-container">
                <img src={vehicle.img} alt={vehicle.trim} />
              </div>
            </div>
            <div className="details">
              <h2>
                {vehicle.make} {vehicle.model}
              </h2>
              <h3>{vehicle.trim}</h3>
            </div>
          </Link>
          )
        })}
      </div>
    </div>
  );
}

export default Products;
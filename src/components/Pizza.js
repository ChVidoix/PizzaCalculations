import React, { useState } from "react";
import "../styles/Pizza.css";
import pizzaImg from "../pizza.jpg";

const Pizza = () => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <div className="pizza">
      <label htmlFor="size" className="size">
        Rozmiar (średnica[cm]):
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          name="size"
          id="size"
        />
      </label>
      <label htmlFor="price" className="price">
        Cena [zł]:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          name="price"
          id="price"
        />
      </label>
      <div className="result">
        <img src={pizzaImg} alt="Pizza img" />
        <h3>XX.XX zł/m2</h3>
      </div>
    </div>
  );
};

export default Pizza;

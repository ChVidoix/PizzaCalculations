import React, { useState } from "react";
import "./Pizza.css";
import pizzaImg from "./pizza.jpg";

const Pizza = () => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <div>
      <label htmlFor="size" className="size">
        Rozmiar (średnica):
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          name="size"
          id="size"
        />{" "}
        cm
      </label>
      <label htmlFor="price" className="price">
        Cena:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          name="price"
          id="price"
        />
      </label>
      <div className="img">
        <img src={pizzaImg} alt="Pizza img" />
      </div>
    </div>
  );
};

export default Pizza;

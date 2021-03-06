import React, { useState, useEffect, useContext } from "react";
import "../styles/Pizza.css";
import pizzaImg from "../pizza.jpg";
import { AppContext } from "../AppContext";

const Pizza = ({ name, id }) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(0);
  const [result, setResult] = useState(0);
  const { deletePizza } = useContext(AppContext);

  const handleInputChange = (e) => {
    if (e.target.name === "price") {
      setPrice(e.target.value);
    } else {
      setSize(e.target.value);
    }
  };

  const calculateRasult = () => {
    const area = Math.PI * Math.pow(size / 200, 2);
    const value = Math.round((price / area) * 100) / 100;
    if (value) setResult(value);
    else setResult(0);
  };

  useEffect(calculateRasult, [size, price]);

  return (
    <div className="pizza">
      <div className="heading">
        <h2>{name}</h2>
        <button className="remove" onClick={() => deletePizza(id)}>
          Usuń
        </button>
      </div>
      <div className="size">
        <label htmlFor="size">Rozmiar (średnica[cm]):</label>
        <input
          type="number"
          value={size}
          min={0}
          onChange={(e) => handleInputChange(e)}
          name="size"
          id="size"
        />
      </div>
      <div className="price">
        <label htmlFor="price">Cena [zł]:</label>
        <input
          type="number"
          value={price}
          min={0}
          onChange={(e) => handleInputChange(e)}
          name="price"
          id="price"
        />
      </div>
      <div className="result">
        <img src={pizzaImg} alt="Pizza img" />
        <h3>{result} zł/m2</h3>
      </div>
    </div>
  );
};

export default Pizza;

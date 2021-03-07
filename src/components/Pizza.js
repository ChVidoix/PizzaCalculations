import React, { useState, useEffect, useContext } from "react";
import "../styles/Pizza.css";
import pizzaImg from "../pizza.jpg";
import { AppContext } from "../AppContext";

const Pizza = ({ name, id }) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(0);
  const [result, setResult] = useState(0);
  const { deletePizza, setIndicator, bestId } = useContext(AppContext);

  const imgStyle = {
    width: `${size * 6}px`,
    maxWidth: "300px",
  };

  const handleInputChange = (e) => {
    if (e.target.name === "price") {
      setPrice(e.target.value);
    } else {
      setSize(e.target.value);
    }
  };

  const calculateResult = () => {
    const area = Math.PI * Math.pow(size / 200, 2);
    const value = Math.round((price / area) * 100) / 100;
    if (value) {
      setResult(value);
    } else setResult(0);

    setIndicator(id, value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(calculateResult, [size, price]);

  return (
    <div className={bestId === id ? "best pizza" : "pizza"}>
      <div className="heading">
        <h2>{name}</h2>
        <button className="remove" onClick={() => deletePizza(id)}>
          Usuń
        </button>
      </div>
      <div className="size">
        <label htmlFor="size">Rozmiar (średnica)[cm]:</label>
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
        <div>
          <img src={pizzaImg} alt="Pizza img" style={imgStyle} />
        </div>
        <h3>{result} zł/m2</h3>
      </div>
    </div>
  );
};

export default Pizza;

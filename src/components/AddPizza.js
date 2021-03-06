import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import "../styles/AddPizza.css";

const AddPizza = () => {
  const [name, setName] = useState("");
  const { addPizza } = useContext(AppContext);

  const handleClick = () => {
    if (name.length > 0) {
      addPizza(name);
      setName("");
    } else {
      alert("Podaj nazwę pizzy!");
    }
  };

  return (
    <div className="add">
      <button onClick={handleClick}>Dodaj pizze</button>
      <input
        className="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={19}
        placeholder="podaj nazwę pizzy..."
      />
    </div>
  );
};

export default AddPizza;

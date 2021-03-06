import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import "../styles/AddPizza.css";

const AddPizza = () => {
  const [name, setName] = useState("");
  const addPizza = useContext(AppContext);
  return (
    <div className="add">
      <button onClick={addPizza}>Dodaj pizze</button>
      <input
        className="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="podaj nazwę pizzy..."
      />
    </div>
  );
};

export default AddPizza;

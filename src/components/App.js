import React, { useState } from "react";
import Pizza from "./Pizza";
import AddPizza from "./AddPizza";
import "../styles/App.css";
import { AppContext } from "../AppContext";

function App() {
  const [pizzaList, setPizzaList] = useState([]);
  const pizzas = (
    <ul>
      {pizzaList.map((pizza, index) => (
        <li key={index}>{pizza}</li>
      ))}
    </ul>
  );

  const addPizza = (name) => {
    setPizzaList([...pizzaList].concat(<Pizza name={name} />));
  };

  return (
    <div className="app">
      {pizzas}
      <AppContext.Provider value={addPizza}>
        <AddPizza />
      </AppContext.Provider>
    </div>
  );
}

export default App;

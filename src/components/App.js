import React, { useState } from "react";
import Pizza from "./Pizza";
import AddPizza from "./AddPizza";
import "../styles/App.css";
import { AppContext } from "../AppContext";

function App() {
  const [id, setId] = useState(0);
  const [pizzaList, setPizzaList] = useState([]);
  const pizzas = (
    <ul>
      {pizzaList.map((item) => (
        <li key={item.id}>{item.pizza}</li>
      ))}
    </ul>
  );

  const addPizza = (name) => {
    setPizzaList(
      [...pizzaList].concat({ id, pizza: <Pizza name={name} id={id} /> })
    );
    setId(id + 1);
  };

  const deletePizza = (id) => {
    console.log(id);
    console.log(pizzaList);
    setPizzaList([...pizzaList].filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <AppContext.Provider value={{ addPizza, deletePizza }}>
        {pizzas}
        <AddPizza />
      </AppContext.Provider>
    </div>
  );
}

export default App;

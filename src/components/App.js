import React, { useState, useEffect } from "react";
import Pizza from "./Pizza";
import AddPizza from "./AddPizza";
import "../styles/App.css";
import { AppContext } from "../AppContext";

function App() {
  const [id, setId] = useState(0);
  const [bestId, setBestId] = useState();
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
      [...pizzaList].concat({
        id,
        pizza: <Pizza name={name} id={id} />,
        indicator: 0,
      })
    );
    setId(id + 1);
  };

  const deletePizza = (id) => {
    console.log(id);
    console.log(pizzaList);
    setPizzaList([...pizzaList].filter((item) => item.id !== id));
  };

  const setIndicator = (id, value) => {
    let updatedList = [...pizzaList];
    updatedList = updatedList.map((item) => {
      if (item.id === id) {
        item.indicator = value;
        return item;
      } else {
        return item;
      }
    });
    setPizzaList(updatedList);
  };

  const checkBest = () => {
    const best = { id: -1, value: 999999 };
    pizzaList.forEach((item) => {
      if (item.indicator < best.value) best.id = item.id;
    });
    setBestId(best.id);
  };

  useEffect(checkBest, [pizzaList]);

  return (
    <div className="app">
      <AppContext.Provider
        value={{ addPizza, deletePizza, setIndicator, bestId }}
      >
        {pizzas}
        <AddPizza />
      </AppContext.Provider>
    </div>
  );
}

export default App;

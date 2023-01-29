import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Menu from "./FoodMenu";
import Item from "./FoodItem";
import Errors from "./Errors";
import NewItemForm from "./NewItemForm";
import RouteList from "./RouteList.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getItems() {
      try {
        let snacks = await SnackOrBoozeApi.getSnacks();
        let drinks = await SnackOrBoozeApi.getDrinks();
        console.log(snacks);
        console.log(drinks);
        setSnacks(snacks);
        setDrinks(drinks);
        setIsLoading(false);
      }
      catch (err) { //TODO: error causing infinite loop
        setErrors(err);
        setIsLoading(false);
      }

    }
    getItems();
  }, []);


  async function addItem(data, type) {
    let response = await SnackOrBoozeApi.setItem(data, type);
    debugger;
    return response;
  }


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          {errors.length !== 0 && <Errors errors={errors} />}

          <RouteList snacks={snacks}
            drinks={drinks}
            addItem={addItem}
            setDrinks={setDrinks}
            setSnacks={setSnacks} />

        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

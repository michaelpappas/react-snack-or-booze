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
import HomeMenu from "./HomeMenu";
import NewItemForm from "./NewItemForm";

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

  async function addItem(data) {
    let response = await SnackOrBoozeApi.setItem(data);
    console.log("success", response);
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
          <Routes>
            <Route path="/" element={<Home snacks={snacks} drinks={drinks} />} />
            <Route path="/snacks" element={<Menu items={snacks} title="Snacks" handle="snacks" />} />
            <Route path="/snacks/:id" element={<Item items={snacks} cantFind="/snacks" />} />
            <Route path="/drinks" element={<Menu items={drinks} title="Drinks" handle="drinks" />} />
            <Route path="/drinks/:id" element={<Item items={drinks} cantFind="/drinks" />} />
            <Route path="/additem" element={<NewItemForm addItem={addItem} />} />

            <Route path="*" element={<p>Hmmm. I can't seem to find what you want.</p>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

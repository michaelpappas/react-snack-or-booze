import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Errors from "./Errors";
import RouteList from "./RouteList.js";

/**
 * App: Renders Navbar and Routelist
 *
 * state:
 * - drinks - an array of drink objects like (id, name, description, serve)
 * - snacks - an array of snack objects like (id, name, description, serve)
 * - errors - array of errors from API to display
 *
 * App -> {NavBar, RouteList}
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const [snacks, setSnacks] = useState({
    data: [],
    handle: "snacks",
    title: "Snacks",
    text: "Here is a list of the tasty snack we are currently offering."
  });
  const [drinks, setDrinks] = useState({
    data: [],
    handle: "drinks",
    title: "Drinks",
    text: "You can enjoy any of the following refreshing beverages while visiting the Snack or Booze Cafe."
  });

  /** fetches items from the api on render and sets them to drinks or snacks
   * sets isLoading to false upon api response
   * sets errors if they are caught
   */
  useEffect(() => {
    async function getItems() {
      try {
        let snacks = await SnackOrBoozeApi.getSnacks();
        let drinks = await SnackOrBoozeApi.getDrinks();
        setSnacks(curr => ({ ...curr, data: snacks }));
        setDrinks(curr => ({ ...curr, data: drinks }));
        setIsLoading(false);
      }
      catch (err) {
        setErrors(err);
        setIsLoading(false);
      }

    }
    getItems();
  }, []);

  /** adds data from form component to the api and returns api response*/
  async function addItem(data, type) {
    let response = await SnackOrBoozeApi.postItem(data, type);
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

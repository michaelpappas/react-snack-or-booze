import Home from "./Home";
import Item from "./FoodItem";
import NewItemForm from "./NewItemForm";
import { Route, Routes } from "react-router-dom";
import CategoryMenu from "./CategoryMenu";
import NotFound from "./NotFound";


/**
 * Routes for Snack or Booze
 *
 * Props:
 * -snacks - an array of snack objects
 * -drinks - an array of drink objects
 *
 * State: none
 *
 *  App -> RouteList -> {Home, Menu (drinks), Menu (snacks), Item, NewItemForm}
 */
function RouteList({ snacks, drinks, addItem, setDrinks, setSnacks }) {

  return (
    <Routes>
      <Route path="/" element={<Home snacks={snacks} drinks={drinks} />} />
      <Route path="/snacks" element={<CategoryMenu items={snacks} title="Snacks" handle="snacks" />} />
      <Route path="/snacks/:id" element={<Item items={snacks} cantFind="/snacks" />} />
      <Route path="/drinks" element={<CategoryMenu items={drinks} />} />
      <Route path="/drinks/:id" element={<Item items={drinks} cantFind="/drinks" />} />
      <Route path="/additem" element={<NewItemForm addItem={addItem} setDrinks={setDrinks} setSnacks={setSnacks} />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default RouteList;
import { render } from "@testing-library/react";
import FoodItem from "./FoodItem";

it("renders without crashing", function () {
  const items = [{
    id: "nachos",
    name: "Nachos",
    description: "An American classic!",
    recipe: "Cover expensive, organic tortilla chips with Cheez Whiz.",
    serve: "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
  }, {
    id: "nachos",
    name: "Nachos",
    description: "An American classic!",
    recipe: "Cover expensive, organic tortilla chips with Cheez Whiz.",
    serve: "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
  }];

  render(<FoodItem items={items} cantFind="/snacks" />);
});
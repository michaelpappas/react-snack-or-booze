import { render } from "@testing-library/react";
import Home from "./Home";

it("renders without crashing", function () {
  const snacks = {
    handle: "snacks",
    title: "Snacks",
    text: "Here is a list of the tasty snack we are currently offering.",
    data:
      [{
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
      }]
  };
  const drinks = {
    handle: "drinks",
    title: "Drinks",
    text: "drinks",
    data: [{
      id: "martini",
      name: "Martini",
      description: "An ice-cold, refreshing classic.",
      recipe: "Mix 3 parts vodka & 1 part dry vermouth.",
      serve: "Serve very cold, straight up."
    },
    {
      id: "negroni",
      name: "Negroni",
      description: "A nice drink for a late night conversation.",
      recipe: "Mix equal parts of gin, Campari, and sweet vermouth.",
      serve: "Serve cold, either on the rocks or straight up."
    }]
  };

  render(<Home snacks={snacks} drinks={drinks} />);
});
import { render } from "@testing-library/react";
import CategoryMenu from "./CategoryMenu";

it("renders CategoryMenu without crashing", function () {
  let items = {
    data: [],
    handle: "snacks",
    title: "Snacks",
    text: "Here is a list of the tasty snack we are currently offering."
  };
  render(<CategoryMenu items={items} />);
});
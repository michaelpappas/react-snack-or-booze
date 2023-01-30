import { render } from "@testing-library/react";
import NewItemForm from "./NewItemForm";
import { MemoryRouter } from 'react-router-dom';

it("renders without crashing", function () {

  render(<NewItemForm />, { wrapper: MemoryRouter });
});


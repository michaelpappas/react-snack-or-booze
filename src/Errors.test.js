import { render } from "@testing-library/react";
import Errors from "./Errors";

it("renders CategoryMenu without crashing", function () {
  let errors = [];
  render(<Errors errors={errors} />);
});
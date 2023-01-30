import { Alert } from "reactstrap";

/**
 * Errors component
 * Props:
 * - errors - an array of strings to display error msgs
 *
 * State: none
 */
function Errors({ errors }) {
  return (
    <div> {errors.map((error, i) => <Alert color="danger" key={i}>{error}</Alert>)}</div>
  );
}

export default Errors;
import { Form, FormGroup, Input, Label, Button, CardBody, Card, CardTitle, CardText } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


/** component for rendering a form to add a new item
 * input: {id, name, description, recipe, serve}
 */
function NewItemForm({ addItem, setSnacks, setDrinks }) {

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    recipe: "",
    serve: "",
    type: "snacks"
  });

  // const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  /** Handles form input changes */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  }
  /** On submit, calls parent function and redirects to home*/
  async function handleSubmit(evt) {
    evt.preventDefault();

    const type = formData.type;
    delete formData.type;

    let response;
    try {
      response = await addItem(formData, type);

    } catch (err) {
      // setErrors(err);
    }
    if (type === "snacks") {
      setSnacks(curr => [...curr, response]);
    } else { setDrinks(curr => [...curr, response]); }
    navigate("/");
  }


  return (
    <Card className="w-50">
      <CardTitle className="fw-bold text-center">
        Add an Item
      </CardTitle>
      <CardText className="ps-3">Fill in the following fields to add an item.</CardText>
      <CardBody>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="id">
              Id
            </Label>
            <Input
              id="id"
              name="id"
              placeholder="id"
              type="id"
              onChange={handleChange}
              value={formData.value}
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Name"
              type="name"
              onChange={handleChange}
              value={formData.value}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">
              Description
            </Label>
            <Input
              id="description"
              name="description"
              placeholder="Description"
              type="description"
              onChange={handleChange}
              value={formData.value}
            />
          </FormGroup>
          <FormGroup>
            <Label for="recipe">
              Recipe
            </Label>
            <Input
              id="recipe"
              name="recipe"
              placeholder="Recipe"
              type="recipe"
              onChange={handleChange}
              value={formData.value}
            />
          </FormGroup>
          <FormGroup>
            <Label for="serve">
              Serve
            </Label>
            <Input
              id="serve"
              name="serve"
              placeholder="Serve"
              type="serve"
              onChange={handleChange}
              value={formData.value}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">
              Select snack or drink:
            </Label>
            <Input
              id="type"
              name="type"
              type="select"
              onChange={handleChange}
              value={formData.value}
            >
              <option>
                snacks
              </option>
              <option>
                drinks
              </option>
            </Input>
          </FormGroup>
          <Button>
            Add Item
          </Button>
        </Form>
      </CardBody >
    </Card>

  );
}
export default NewItemForm;

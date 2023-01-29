import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

/**
 * Card for individual items
 *
 * Props:
 * -item - an object with data about the item (id, name, description, ingredients, serve)
 * -cantFind - string that is the endpoint to reroute to if the url is invalid
 *
 * State: none
 *
 *  App -> RouteList -> Item
 */
function FoodMenu({ items, handle, title }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="fw-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${handle}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;

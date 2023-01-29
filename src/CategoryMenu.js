import React from "react";
import { Link } from "react-router-dom";
import "./CategoryMenu.css";
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
function CategoryMenu({ items }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="fw-bold text-center">
            {items.title} Menu
          </CardTitle>
          <CardText>
            {items.text}
          </CardText>
          <ListGroup>
            {items.data.map(item => (
              <Link to={`/${items.handle}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default CategoryMenu;

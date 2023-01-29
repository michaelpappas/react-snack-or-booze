import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/**
 * Card for individual items, displays the name, recipe, and serving directions
 *
 * Props:
 * -item - an object with data about the item (id, name, description, serve)
 * -cantFind - string that is the endpoint to reroute to if the url is invalid
 *
 * State: none
 *
 *  App -> RouteList -> Item
 */
function FoodItem({ items, cantFind }) {
  const { id } = useParams();

  let item = items.find(item => item.id === id);
  if (!item) return <Navigate to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="fw-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;

import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";


/**
 * Card homepage, displays the welcome message and the number of snacks and drinks
 *
* Props:
 * -snacks - an array of snack objects
 * -drinks - an array of drink objects
 *
 * State: none
 *
 *  App -> RouteList -> Home
 */
function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="fw-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
        <div>Snacks - {snacks.data.length}</div>
        <div>Drinks - {drinks.data.length}</div>
      </Card>
    </section>
  );
}

export default Home;

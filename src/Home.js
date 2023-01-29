import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import HomeMenu from "./HomeMenu";

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
        <div>Snacks - {snacks.length}</div>
        <div>Drinks - {drinks.length}</div>
      </Card>
    </section>
  );
}

export default Home;

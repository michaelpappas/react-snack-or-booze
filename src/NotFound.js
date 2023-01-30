import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function NotFound() {
  return (
    <Card>
      <CardBody className="text-center">
        <CardTitle>
          <h3 className="fw-bold">
            It looks like you're lost!
          </h3>
        </CardTitle>
        <CardText>Click one of the links above to navigate to the Homepage, Snacks, or Drinks.</CardText>
      </CardBody>
    </Card>
  );
}

export default NotFound;
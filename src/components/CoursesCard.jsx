import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CoursesCard({ title, rating, price, views, id, author }) {
  return (
    <Card
      style={{
        position: "relative",
        width: "18rem",
        height: "30rem",
        margin: "10px auto",
      }}
    >
      <Card.Img variant="top" src="https://placehold.co/400" />
      <Card.Body>
        <Card.Title style={{ fontSize: "18px" }}>
          {" "}
          {title} - {views} views
        </Card.Title>
        <Card.Text>
          {" "}
          {author}
          <br />
          Rating: {rating}
          <br />
          Price: {price} USD
        </Card.Text>
        <Button
          variant="primary"
          style={{ position: "absolute", bottom: "20px" }}
          as={Link}
          to={`/courses/${id}`}
        >
          Course Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CoursesCard;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CoursesCard({ title, rating, price, views, id, author, createdAt }) {
  return (
    <Card
      style={{
        position: "relative",
        width: "18rem",
        height: "31rem",
        margin: "10px auto",
      }}
    >
      <Card.Img
        variant="top"
        src="https://placehold.co/300"
      />
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
          {price? `Price: ${price}` : "Free"}
          <br />
          {createdAt && (
            <small className="text-muted">Added in: {createdAt}</small>
          )}
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

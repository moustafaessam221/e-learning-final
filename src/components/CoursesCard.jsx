import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CoursesCard({
  title,
  rating,
  price,
  views,
  id,
  author,
  createdAt,
  description,
  category,
}) {
  const renderStars = (rating) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        color={index < rating ? "gold" : "lightgray"}
      />
    ));
  };
  return (
    <Card
      style={{
        position: "relative",
        width: "18rem",
        height: "31rem",
        margin: "10px auto",
      }}
    >
      <Card.Img variant="top" src="https://placehold.co/300" />
      <Card.Body>
        <Card.Title style={{ fontSize: "18px" }}>
          {" "}
          {title} - {views} views
        </Card.Title>
        <Card.Text>
          {" "}
          {author}
          <br />
          Rating: {rating} {renderStars(rating)}
          <br />
          {price ? `Price: ${price}` : "Free"}
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

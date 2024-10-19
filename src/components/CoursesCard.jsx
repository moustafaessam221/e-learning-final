import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./CoursesCard.css";

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
  // function to import all images from the folder
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  // import all images
  const images = importAll(
    require.context("../coursesImages", false, /\.(png|jpe?g|svg)$/)
  );

  // convers the images object to an array
  const imageArray = Object.values(images);

  // get random image

  let randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];

  // function date

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  return (
    <Card className="custom-card">
      <Card.Img
        variant="top"
        className="h-50 mt-1 cover card-img "
        src={randomImage}
      />
      <Card.Body>
        <Card.Title
          className="custom-card-title fw-bold"
          style={{ fontSize: "18px" }}
        >
          {title}
        </Card.Title>
        <Card.Text>
          <span className="fw-bold fs-5">
            {price ? `Price: ${price}` : "Free"}
          </span>
          <br />
          Rating: {rating} {renderStars(rating)}
          <br />
          views: {views}
          <br />
          by: <span className="course-author">{author}</span>
          <br />
          {createdAt && (
            <small className="text-muted">
              Added in: {formatDate(createdAt)}
            </small>
          )}
        </Card.Text>

        <Button
          variant="primary"
          as={Link}
          className="custom-card-btn"
          to={`/courses/${id}`}
        >
          Course Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CoursesCard;

import {
  faBagShopping,
  faCertificate,
  faCheck,
  faCircleCheck,
  faClock,
  faDiamond,
  faNetworkWired,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons/faBarsProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";
import { UsersContext } from "../store/UsersContext";
import toast from "react-hot-toast";
import "./CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();
  const { user } = useContext(UsersContext);
  const navigate = useNavigate();
  const userIdShortened = user ? user.id.slice(0, 5) : null;

  const [fetchError, setFetchError] = useState(null);
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [views, setViews] = useState("");
  const [courseHours, setCourseHours] = useState("");
  const [author, setAuthor] = useState("");
  const [categories, setCategories] = useState([]);
  const [enrolled, setEnrolled] = useState(false);

  let buttonText;
  if (enrolled) {
    buttonText = "Enrolled";
  } else if (price) {
    buttonText = `Enroll for ${price} $`;
  } else {
    buttonText = "Free";
  }

  useEffect(() => {
    const fetchCourse = async () => {
      const { data, error } = await supabase
        .from("courses")
        .select()
        .eq("id", id)
        .limit(1)
        .single();

      if (error) {
        setFetchError("Could not fetch course");
        console.log(error);
      }
      if (data) {
        setTitle(data.title);
        setDescription(data.description);
        setShortDescription(data.short_description);
        setRating(data.rating);
        setPrice(data.price);
        setViews(data.views);
        setAuthor(data.author);
        setCategory(data.category);
        setCourseHours(data.course_hours);
        if (courseHours == null) {
          setCourseHours(0);
        }
        setCategories(data.category);
      }
    };

    const checkEnrollment = async () => {
      if (user?.id === undefined) {
        setEnrolled(false);
        return;
      }

      const { data, error } = await supabase
        .from("profile")
        .select("courses")
        .eq("id", user.id)
        .single();

      if (error) {
        console.log(error);
      } else if (data?.courses) {
        if (data.courses.includes(id)) {
          setEnrolled(true);
        }
      }
    };

    fetchCourse();
    checkEnrollment();
  }, [id]);

  // enroll function
  const handleEnroll = async () => {
    let course_content = [];
    let final_quiz;

    if (!user) {
      toast.error("Please login to enroll");
      navigate("/login");
      return;
    }

    const { data, error } = await supabase
      .from("profile")
      .select("courses")
      .eq("id", user.id)
      .single();
    if (error) {
      console.log(error);
    }

    if (data) {
      const currentCourses = data.courses || [];
      if (currentCourses.includes(id)) {
        toast.error("You are already enrolled in this course");
        navigate(`/${userIdShortened}/${id}`);
        return;
      }

      // add enrolled course to enrolled_courses table
      const { data: courseData, error: courseFetchingError } = await supabase
        .from("courses")
        .select("content, quiz")
        .eq("id", id)
        .single();
      if (courseFetchingError) {
        console.log(courseFetchingError);
      } else {
        course_content = courseData.content;
        final_quiz = courseData.quiz;
      }

      // add course to user profile
      const updatedCourses = [...currentCourses, id];
      const { error } = await supabase
        .from("profile")
        .update({ courses: updatedCourses })
        .eq("id", user.id);
      if (error) {
        console.log(error);
      } else {
        toast.success("Course enrolled successfully");
        setEnrolled(true);
        const { data, error } = await supabase
          .from("enrolled_courses")
          .insert({
            user_id: user.id,
            course_id: id,
            course_content: course_content,
            final_quiz: final_quiz,
          })
          .single();

        if (error) {
          console.log(error);
        } else {
          console.log("Course enrolled successfully");
          navigate(`/${userIdShortened}/${id}`);
        }
      }
    }
  };

  // stars function
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
    <>
      {/* Course name and details */}
      <Container className="my-5 border border-dark p-5">
        <Row className="g-4">
          <Col lg={7}>
            <h1 className="">{title}</h1>
            <p className="mt-4 fs-5 w-75">{shortDescription || description}</p>
            <div
              style={{ width: "200px" }}
              className="d-flex flex-wrap align-items-center justify-content-between gap-3"
            >
              <h3>{price ? `Price: ${price} $` : "Free"}</h3>
              <h4 className="fs-5">
                {rating} {renderStars(rating)}
              </h4>
            </div>
            <p className="mt-3 fs-5">Categories: {categories.join(", ")}</p>
            <Container className="d-flex flex-wrap justify-content-start gap-5 p-0">
              <Button
                className="btn-lg"
                variant="primary"
                style={{ width: "200px", height: "63px" }}
                onClick={handleEnroll}
                disabled={enrolled}
              >
                {buttonText}
              </Button>
              <p className="mt-3 fs-5">Enrolled students: {views}</p>
            </Container>
          </Col>
          <Col lg={5} className="border border-dark pt-4 px-0">
            <Container className="p-0 text-start">
              <h3 className="text-start mx-3 px-3">This course includes:</h3>
              <div className="mt-4">
                <p
                  style={{ fontSize: "1.5rem" }}
                  className="border-bottom border-dark pb-2 d-flex align-items-center  px-3"
                >
                  <FontAwesomeIcon
                    icon={faDiamond}
                    className="m-3 custom-inc"
                  />
                  AI assistance for guided help
                </p>
                <p
                  style={{ fontSize: "1.5rem" }}
                  className="border-bottom border-dark pb-2 d-flex align-items-center px-3"
                >
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    className="m-3 custom-inc"
                  />
                  Projects to apply new skills
                </p>
                <p
                  style={{ fontSize: "1.5rem" }}
                  className="border-bottom border-dark pb-2 d-flex align-items-center  px-3"
                >
                  <FontAwesomeIcon
                    icon={faBarsProgress}
                    className="m-3 custom-inc"
                  />
                  Quizzes to test your knowledge
                </p>
                <p
                  style={{ fontSize: "1.5rem" }}
                  className="d-flex align-items-center  px-3"
                >
                  <FontAwesomeIcon
                    icon={faCertificate}
                    className="m-3 custom-inc"
                  />
                  a certificate of completion
                </p>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>

      {/* Course info  */}
      <Container className="my-5 border border-dark p-5 ">
        <Row className="text-start px-3 g-4">
          <Col lg={3} className="d-flex align-items-center">
            <FontAwesomeIcon
              icon={faNetworkWired}
              className="me-3 custom-inc"
              size="3x"
            />
            <div>
              <h6>Skill Level</h6>
              <h3>Beginner</h3>
            </div>
          </Col>
          <Col lg={3} className="d-flex align-items-center">
            <FontAwesomeIcon
              icon={faClock}
              className="me-3 custom-inc"
              size="3x"
            />
            <div>
              <h6>Time to complete</h6>
              <h3>{courseHours} hours</h3>
            </div>
          </Col>
          <Col lg={3} className="d-flex align-items-center">
            <FontAwesomeIcon
              icon={faStar}
              className="me-3 custom-inc"
              size="3x"
            />
            <div>
              <h6>Projects</h6>
              <h3>2</h3>
            </div>
          </Col>
          <Col lg={3} className="d-flex align-items-center">
            <FontAwesomeIcon
              icon={faBarsProgress}
              className="me-3 custom-inc"
              size="3x"
            />
            <div>
              <h6>Perequisites</h6>
              <h3>None</h3>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Course content */}
      <Container className="my-5">
        <Row className="g-4">
          <Col lg={8}>
            <h2>About this course</h2>
            <p className="fs-5 mt-3">{description}</p>
          </Col>
          <Col lg={4}>
            <h2>Skills you'll gain</h2>
            <p className="fs-5 mt-3 mx-2">
              <FontAwesomeIcon icon={faCheck} className="custom-check" /> Lorem,
              ipsum dolor.
            </p>
            <p className="fs-5 mx-2">
              <FontAwesomeIcon icon={faCheck} className="custom-check" /> Lorem,
              ipsum dolor.
            </p>
            <p className="fs-5 mx-2">
              <FontAwesomeIcon icon={faCheck} className="custom-check" /> Lorem,
              ipsum dolor.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Syllabus */}
      <Container className="my-5 border border-dark py-3 px-0">
        <h2 className="border-bottom border-dark pb-3 px-5">Syllabus</h2>
        {/* Course syllabus */}
        <div className="d-flex align-items-center px-5  my-3">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="me-3 custom-check"
            size="2x"
          />
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <h6>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae nemo tempore explicabo ea harum laboriosam.
            </h6>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-center px-5  my-3">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="me-3 custom-check"
            size="2x"
          />
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <h6>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae nemo tempore explicabo ea harum laboriosam.
            </h6>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-center px-5 my-3">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="me-3 custom-check"
            size="2x"
          />
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <h6>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae nemo tempore explicabo ea harum laboriosam.
            </h6>
          </div>
        </div>
        <hr />
        {/* ceritiface part */}
        <div className="d-flex align-items-center px-5 mt-2">
          <FontAwesomeIcon
            icon={faCertificate}
            className="me-3 custom-cert"
            size="2x"
          />
          <div>
            <h4>Certificate of Completion available with Plus or Pro</h4>
            <h6>
              Earn a certificate of completion and showcase your accomplishment
              on your resume or LinkedIn.
            </h6>
          </div>
        </div>
      </Container>

      {/* Button */}
      <Container className="text-center mt-5">
        <Button
          className="btn-lg"
          variant="primary"
          style={{ width: "200px", height: "63px" }}
          onClick={handleEnroll}
          disabled={enrolled}
        >
          {buttonText}
        </Button>
      </Container>

      {/* Author */}
      <Container className="my-5 py-3">
        <div className="d-flex align-items-center gap-4">
          <div>
            <Image
              src="https://via.placeholder.com/100"
              roundedCircle
              fluid
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <h3>{author}</h3>
            <p className="fs-5">{"{AUTHOR TITLE}"}</p>
          </div>
        </div>
        <div>
          <p className="fs-5 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            consectetur numquam. Numquam, aperiam. Omnis, rerum rem nulla
            distinctio reiciendis necessitatibus officiis? Neque aliquid et
            libero, nemo laborum ratione deserunt corporis perferendis, suscipit
            fugit laudantium distinctio quas ad nihil. Natus iure earum nulla
            qui magnam omnis? Commodi esse facere cumque maxime?
          </p>
        </div>
      </Container>

      {/* Comments */}
      <Container className="mt-5">
        <h2 className="text-start mb-4">Students Reviews</h2>
        <Row className="">
          <Col className="mb-3">
            <Card className="text-start p-3 shadow">
              <Card.Body>
                <Card.Text>
                  "This course helped me understand the fundamentals of coding
                  and {title}"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card className="text-start p-3 shadow">
              <Card.Body>
                <Card.Text>
                  "The interactive features and resources available make
                  learning fun and engaging!"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CourseDetails;

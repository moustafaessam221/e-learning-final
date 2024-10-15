import React, { useState, useEffect, useContext } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { UsersContext } from "../store/UsersContext";
import supabase from "../config/supabaseClient";
import "../Style.css";

function AddCourses() {
  const { user } = useContext(UsersContext);
  const [title, setTitle] = useState("");
  const [short_description, setShortDescription] = useState("");

  const [description, setLongDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [price, setPrice] = useState(0);
  const [course_hours, setHours] = useState(0);
  const [videoFile, setVideoFile] = useState(null);
  const [quiz, setQuiz] = useState("");
  const author = user.user_metadata.full_name;
  useEffect(() => {
    async function fetchCategories() {
      const { data: courses, error } = await supabase
        .from("courses")
        .select("category");
      if (error) {
        console.error("Error fetching categories:", error);
        return;
      }
      const categories = courses.map((course) => course.category).flat();
      const uniqueCategories = [...new Set(categories)];
      setAvailableCategories(uniqueCategories);
    }

    fetchCategories();
  }, []);

  const handleCategoryChange = (selectedCategory) => {
    setCategory((prevCategories) => {
      if (prevCategories.includes(selectedCategory)) {
        return prevCategories.filter((cat) => cat !== selectedCategory);
      } else if (prevCategories.length < 3) {
        return [...prevCategories, selectedCategory];
      } else {
        alert("You can only select up to 3 categories.");
        return prevCategories;
      }
    });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();

    try {
      const randomRating = Math.floor(Math.random() * 5) + 1;
      const randomViews = Math.floor(Math.random() * 1000) + 1;

      const { data, error } = await supabase.from("courses").insert([
        {
          title,
          price,
          course_hours,
          category,
          description,
          short_description,
          author,
          quiz,
          rating: randomRating,
          views: randomViews,
        },
      ]);

      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully:", data);
        // Reset form
        setCategory([]);
        setHours(0);
        setLongDescription("");
        setPrice(0);
        setShortDescription("");
        setTitle("");
        setQuiz("");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <>
      <Container>
        <h2 className="my-5" sm={12}>
          Hello {user.user_metadata.full_name}, <br />
          What courses would you like to add today?
        </h2>
      </Container>

      <Container>
        <Form onSubmit={handlesubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Title</Form.Label>
                <Form.Control
                  className="border-1 border border-secondary"
                  type="text"
                  placeholder="Enter course title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Category</Form.Label>
                <DropdownButton
                  title={
                    category.length > 0
                      ? category.join(", ")
                      : "Select Category"
                  }
                  variant="light"
                >
                  {availableCategories.map((cat, index) => (
                    <Dropdown.Item
                      key={index}
                      as="button"
                      onClick={() => handleCategoryChange(cat)}
                      active={category.includes(cat)}
                    >
                      {cat}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Short Description</Form.Label>
                <Form.Control
                  className="border-1 border border-secondary"
                  as="textarea"
                  rows={3}
                  placeholder="Enter short description"
                  value={short_description}
                  onChange={(e) => setShortDescription(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Long Description</Form.Label>
                <Form.Control
                  className="border-1 border border-secondary"
                  as="textarea"
                  rows={5}
                  placeholder="Enter long description"
                  value={description}
                  onChange={(e) => setLongDescription(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Video File</Form.Label>
                <Form.Control
                  className="border-1 border border-secondary"
                  type="file"
                  onChange={(e) => setVideoFile(e.target.files[0])}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Hours</Form.Label>
                <Form.Control
                  className="border-1 border border-secondary"
                  type="number"
                  placeholder="Enter course hours"
                  value={course_hours}
                  onChange={(e) => setHours(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Price</Form.Label>
                <Form.Control
                  className="border-1 border border-secondary"
                  type="number"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Quiz URL</Form.Label>
                <Form.Control
                  className="border-1 border border-secondary"
                  type="text"
                  placeholder="Enter quiz URL"
                  value={quiz}
                  onChange={(e) => setQuiz(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Button
            variant="primary"
            type="submit"
            className="mt-3 p-3 px-5 button-height"
          >
            Add Course
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default AddCourses;

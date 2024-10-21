import React, { useContext, useEffect, useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  Modal,
  Form,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import supabase from "../config/supabaseClient";
import { UsersContext } from "../store/UsersContext";
import Skills from "../FixedComponent/Skills";
import { Link, useNavigate } from "react-router-dom";
import "../Style.css";

const ProfilePage = () => {
  const { user } = useContext(UsersContext);
  const imgInputRef = useRef(null);
  const userIdShortened = user?.id ? user.id.slice(0, 5) : "";

  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [LinkedIn, setLinkedIn] = useState("");
  const [GitHub, setGitHub] = useState("");
  const [Twitter, setTwitter] = useState("");
  const [courses, setCourses] = useState([]);
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentField, setCurrentField] = useState("");
  const [fieldValue, setFieldValue] = useState("");
  const [fieldTitle, setFieldTitle] = useState("");
  const [userSkills, setUserSkills] = useState([]);
  const [workHistory, setWorkHistory] = useState([]);
  const [userEducation, setUserEducation] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [image, setImage] = useState("https://via.placeholder.com/150");

  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.id) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("profile")
        .select("*")
        .eq("id", user.id)
        .single();
      if (error) {
        console.log(error);
      } else {
        // console.log(user)
        setName(user.user_metadata.full_name);
        setEmail(user.email);
        setUserData({
          ...data,
          skills: data.skills || [],
          experience: data.experience || [],
          education: data.education || [],
          workHistory: data.workHistory || [],
          projects: data.projects || [],
        });
        setProjects(data.projects || []);
        setUserSkills(data.skills || []);
        setUserEducation(data.education || []);
        setWorkHistory(data.workHistory || []);
        setCourses(data.courses || []);
        setImage(data.avatar_url || "https://via.placeholder.com/150");
      }
    };
    fetchProfile();
  }, [user, navigate, userData]);

  const handleShowModal = (field, title, currentValue) => {
    setCurrentField(field);
    setFieldTitle(title);
    setFieldValue(currentValue || "");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFieldValue("");
  };

  // delete function
  const handleDeleteItem = async (field, skill) => {
    console.log("This function is working fine!");
    const updatedArray = userData[field].filter((item) => item !== skill);

    const updates = { [field]: updatedArray };

    const { error } = await supabase
      .from("profile")
      .update(updates)
      .eq("id", user.id);

    if (error) {
      console.log(error);
    } else {
      setUserData((prevData) => ({ ...prevData, [field]: updatedArray }));
    }
  };

  const handleSubmit = async () => {
    const updates = {};
    if (Array.isArray(userData[currentField])) {
      updates[currentField] = [...userData[currentField], fieldValue];
    } else {
      updates[currentField] = fieldValue;
    }

    const { error } = await supabase
      .from("profile")
      .update(updates)
      .eq("id", user.id);

    if (error) {
      console.log(error);
    } else {
      setUserData({ ...userData, ...updates });
      handleCloseModal();
    }
  };

  // enrolled courses
  useEffect(() => {
    const fetchCourses = async () => {
      if (courses.length > 0) {
        const { data, error } = await supabase
          .from("courses")
          .select("*")
          .in("id", courses);
        if (error) console.log(error);
        else setEnrolledCourses(data);
      }
    };
    fetchCourses();
  }, [courses]);

  // image upload
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const filePath = `public/${user.id}/${file.name}`;

    // upload the image into storage
    const { error } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, { upsert: true });

    if (error) {
      console.log(error);
      return;
    } else {
      console.log("File uploaded successfully");
    }

    // get the image URL
    const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);

    const publicUrl = data.publicUrl;
    if (!publicUrl) {
      console.log("Error: public URL not found");
      return;
    } else {
      // change the image in the database with the new URL
      const { error } = await supabase
        .from("profile")
        .update({ avatar_url: publicUrl })
        .eq("id", user.id);
      if (error) {
        console.log(error);
      } else {
        setImage(publicUrl);
      }
    }
  };

  return (
    <Container className="my-5">
      <Row>
        <Col lg={4} className="mb-4">
          <Card>
            <Card.Body className="text-center">
              <Form.Control
                type="file"
                hidden
                ref={imgInputRef}
                onChange={handleImageUpload}
              />
              <Image
                src={image}
                roundedCircle
                className="mb-3 profile-img"
                onClick={() => imgInputRef.current.click()}
              />
              <h2 style={{ cursor: "pointer" }}>{name}</h2>
              <p style={{ cursor: "pointer" }} className="text-muted fs-5">
                {email}
              </p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => handleShowModal("bio", "Short Bio", bio)}
              >
                {userData?.bio || "Add Short Bio"}
              </p>
              <div className="d-flex justify-content-center">
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="mx-1"
                  onClick={() =>
                    handleShowModal("LinkedIn", "LinkedIn", LinkedIn)
                  }
                >
                  {!LinkedIn ? "Add LinkedIn" : "Edit LinkedIn"}
                </Button>
                <Button
                  variant="outline-dark"
                  size="sm"
                  className="mx-1"
                  onClick={() => handleShowModal("GitHub", "GitHub", GitHub)}
                >
                  {!GitHub ? "Add GitHub" : "Edit GitHub"}
                </Button>
                <Button
                  variant="outline-info"
                  size="sm"
                  className="mx-1"
                  onClick={() => handleShowModal("Twitter", "Twitter", Twitter)}
                >
                  {!Twitter ? "Add Twitter" : "Edit Twitter"}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={8}>
          <Card className="mb-4">
            <Card.Header
              as="h5"
              className="d-flex justify-content-between align-items-center"
            >
              Courses in Progress
            </Card.Header>
            <Card.Body>
              {enrolledCourses.length === 0 ? (
                <p className="text-muted">
                  No courses added yet. Add courses to track your progress!
                </p>
              ) : (
                <ListGroup>
                  {enrolledCourses.map((course, index) => (
                    <ListGroupItem
                      key={index}
                      as={Link}
                      to={`/${userIdShortened}/${course.id}`}
                    >
                      {course.title}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header
              as="h5"
              className="d-flex justify-content-between align-items-center"
            >
              Projects
              <Button
                variant="primary"
                size="sm"
                onClick={() =>
                  handleShowModal("projects", "Projects", projects)
                }
              >
                Add Project
              </Button>
            </Card.Header>
            <Card.Body>
              {projects.length === 0 ? (
                <p className="text-muted">
                  No projects added yet. Showcase your work by adding projects!
                </p>
              ) : (
                <div>
                  {projects.map((project, index) => (
                    <Skills
                      key={index}
                      skill={project}
                      deleteItem={() => handleDeleteItem("projects", project)}
                    />
                  ))}
                </div>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header
              as="h5"
              className="d-flex justify-content-between align-items-center"
            >
              Work History
              <Button
                variant="primary"
                size="sm"
                onClick={() =>
                  handleShowModal(
                    "workHistory",
                    "Work History",
                    userData.workHistory
                  )
                }
              >
                Add Work Experience
              </Button>
            </Card.Header>
            <Card.Body>
              {workHistory.length === 0 ? (
                <p className="text-muted">
                  No work experience added yet. Add your work experience!
                </p>
              ) : (
                <div>
                  {workHistory.map((exp, index) => (
                    <Skills
                      key={index}
                      skill={exp}
                      deleteItem={() => handleDeleteItem("workHistory", exp)}
                    />
                  ))}
                </div>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header
              as="h5"
              className="d-flex justify-content-between align-items-center"
            >
              Education
              <Button
                variant="primary"
                size="sm"
                onClick={() =>
                  handleShowModal("education", "Education", userData.education)
                }
              >
                Add Education
              </Button>
            </Card.Header>
            <Card.Body>
              {userEducation.length === 0 ? (
                <p className="text-muted">
                  No education added yet. Add your education!
                </p>
              ) : (
                <div>
                  {userEducation.map((edu, index) => (
                    <Skills
                      key={index}
                      skill={edu}
                      deleteItem={() => handleDeleteItem("education", edu)}
                    />
                  ))}
                </div>
              )}
            </Card.Body>
          </Card>

          <Card>
            <Card.Header
              as="h5"
              className="d-flex justify-content-between align-items-center"
            >
              Skills
              <Button
                variant="primary"
                size="sm"
                onClick={() =>
                  handleShowModal("skills", "Skills", userData.skills)
                }
              >
                Add Skill
              </Button>
            </Card.Header>
            <Card.Body>
              {userSkills.length === 0 ? (
                <p className="text-muted">
                  No skills added yet. Add your skills!
                </p>
              ) : (
                <div>
                  {userSkills.map((skill, index) => (
                    <Skills
                      key={index}
                      skill={skill}
                      deleteItem={() => handleDeleteItem("skills", skill)}
                    />
                  ))}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {fieldTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Enter {fieldTitle}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter ${fieldTitle}`}
                value={fieldValue}
                onChange={(e) => setFieldValue(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProfilePage;

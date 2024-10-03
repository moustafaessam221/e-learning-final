import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../store/UsersContext";
import Skills from "../FixedComponent/Skills";

const ProfilePage = () => {
  const { user } = useContext(UsersContext);
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
  const [userExperince, setUserExperince] = useState([]);
  const [userEducation, setUserEducation] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !user.id) {
      navigate("/login");
      return;
    }

    async function fetchProfile() {
      const { data, error } = await supabase
        .from("profile")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        console.log(error);
      } else {
        setUserData(data);
        setName(user.identities[0].identity_data.full_name);
        setUserSkills(data.skills || []);
        setUserEducation(data.education || []);
        setUserExperince(data.workHistory || []);
      }
    }

    fetchProfile();
  }, [user]);

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
    const updatedArray = userData[field].filter((item) => item !== skill);

    const updates = { [field]: updatedArray };

    const { error } = await supabase
      .from("profile")
      .update(updates)
      .eq("id", user.id);

    if (error) {
      console.log(error);
    } else {
      setUserData({ ...userData, ...updates });
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

  return (
    <Container className="my-5">
      <Row>
        <Col lg={4} className="mb-4">
          <Card>
            <Card.Body className="text-center">
              <Image
                src="https://via.placeholder.com/150"
                roundedCircle
                fluid
                className="mb-3"
                style={{ cursor: "pointer" }}
              />
              <h2 style={{ cursor: "pointer" }}>{name}</h2>
              <p style={{ cursor: "pointer" }}>{email}</p>
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
              {courses.length === 0 ? (
                <p className="text-muted">
                  No courses added yet. Start adding your courses!
                </p>
              ) : (
                <ul>
                  {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
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
                <ul>
                  {projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
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
              {userExperince.length === 0 ? (
                <p className="text-muted">
                  No work experience added yet. Add your work experience!
                </p>
              ) : (
                <div>
                  {userExperince.map((exp, index) => (
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

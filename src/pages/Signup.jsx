import React from "react";
import { Card, Form, Alert, Button, Row, Col } from "react-bootstrap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import AuthCardButton from "../FixedComponent/AuthCardButton";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Signup() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !passwordRef.current?.value ||
      !emailRef.current?.value ||
      !confirmPasswordRef.current?.value
    ) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match");
      return;
    }
  };
  return (
    <>
      <Row className="flex justify-content-center  my-5">
        <Col className="align-items-center" lg={4}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Signup</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mt-2" id="name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    placeholder="Enter your full name"
                    type="text"
                    ref={nameRef}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-2" id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    placeholder="name@email.com"
                    type="email"
                    ref={emailRef}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-2" id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    placeholder="Create Password"
                    type="password"
                    ref={passwordRef}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-2" id="confirm-password">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={confirmPasswordRef}
                    placeholder="Re-enter Password"
                    required
                  />
                </Form.Group>
                {errorMsg && (
                  <Alert
                    className="text-center mt-2"
                    variant="danger"
                    onClose={() => setErrorMsg("")}
                    dismissible
                  >
                    {errorMsg}
                  </Alert>
                )}
                {msg && (
                  <Alert
                    className="text-center mt-2"
                    variant="success"
                    onClose={() => setMsg("")}
                    dismissible
                  >
                    {msg}
                  </Alert>
                )}
                <div className="text-center mt-3">
                  <Button disabled={loading} type="submit" className="w-100 ">
                    Signup
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          <hr />
          <Row>
            <AuthCardButton
              callback={() => {}}
              backgroundColor="primary"
              icon={faFacebookF}
              description="Continue with Facebook"
            />
            <AuthCardButton
              callback={() => {}}
              backgroundColor="danger"
              icon={faGoogle}
              description="Continue with Google"
            />
          </Row>

          <div className="w-100 text-center mt-2">
            Already on EduSpace ? <Link to={"/login"}>Login</Link>
          </div>
        </Col>
      </Row>
    </>
  );
}

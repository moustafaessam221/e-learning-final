import React, { useContext } from "react";
import { Card, Form, Alert, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import AuthCardButton from "../FixedComponent/AuthCardButton";
import supabase from "../config/supabaseClient";
import { UsersContext } from "../store/UsersContext";

export default function Login() {
  const Navigate = useNavigate();

  const { setUser } = useContext(UsersContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMsg("Please fill all the fields");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setMsg("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMsg(error.message);
        setLoading(false);
        return;
      }

      if (data.user) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      setMsg("Login successful!");
      setLoading(false);
      setEmail("");
      setPassword("");
      Navigate("/profile");
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <Row className="flex justify-content-center align-items-center my-5">
        <Col lg={4} className="">
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    placeholder="name@email.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-3" id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    placeholder="Enter Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                <div className="text-center mt-4">
                  <Button disabled={loading} type="submit" className="w-100">
                    Login
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
            New to EduSpace ? <Link to={"/signup"}>Signup</Link>
          </div>
        </Col>
      </Row>
    </>
  );
}

import React from "react";
import { Card, Form, Alert, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthCardButton from "../FixedComponent/AuthCardButton";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import supabase from "../config/supabaseClient";
import toast from "react-hot-toast";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword || !name) {
      setErrorMsg("Please fill all the fields");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setMsg("");

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name },
        },
      });

      if (error) {
        setErrorMsg(error.message);
        setLoading(false);
        return;
      }

      if (data.user) {
        await supabase.from("profile").insert([
          {
            full_name: name,
            id: data.user.id,
            email: email,
            role: "student",
          },
        ]);

        setMsg("Signup successful!");
        toast.success("Please login!");
        setLoading(false);
        setEmail("");
        setName("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-2" id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    placeholder="name@email.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-2" id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    placeholder="Create Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-2" id="confirm-password">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
  );
}

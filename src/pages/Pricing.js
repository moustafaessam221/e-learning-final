import React, { useContext, useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faDollarSign,
  faStar,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import "../Style.css";
import { UsersContext } from "../store/UsersContext";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";
import toast from "react-hot-toast";

const PricingCard = () => {
  const { user } = useContext(UsersContext);
  const navigate = useNavigate();
  const [subscription, setSubscription] = useState("free");

  // fetch user subscription
  useEffect(() => {
    if (!user?.id) {
      setSubscription("free");
      return;
    }

    const fetchSubscription = async () => {
      const { data, error } = await supabase
        .from("profile")
        .select("subscription")
        .eq("id", user.id)
        .single();
      if (error) {
        console.log(error);
      } else {
        setSubscription(data.subscription);
      }
    };
    fetchSubscription();
  }, [user, subscription]);

  // subscription function
  const subscripeFunction = async (type) => {
    if (!user?.id) {
      toast.error("Please login to subscribe");
      navigate("/login");
    } else {
      const { error } = await supabase
        .from("profile")
        .update({ subscription: type })
        .eq("id", user.id);

      if (error) {
        console.log(error);
      } else {
        setSubscription(type);
        toast.success("You are now a " + type + " subscriber");
      }
    }
  };

  return (
    <Container className="mt-5 pricing-container">
      <Row className="text-center mb-5 d-flex flex-row justify-content-center">
        <Card.Title as="h3" className="pricing-title p-5 fw-bold">
          Choose Your Plan
        </Card.Title>

        {/* Free Access */}

        <Col lg={4} md={6} sm={10} className="mb-4">
          <Card className="h-100 mb-2 px-3">
            <Card.Body>
              <div className="mb-4 custom-pricing-card">
                <div className="pricing-icon mb-3">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    className="pricing-icon-large custom-pricing-dollar mt-3"
                  />
                </div>
                <h5 className="plan-title fs-4">Free Access</h5>
                <p className="fs-1 fw-bold">Free</p>
                <p className="fs-5 mb-3 mt-3">
                  Explore our courses with a limited, free plan. Ideal for
                  getting a feel for our content.
                </p>
                <ul className="list-unstyled feature-list">
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />{" "}
                    Access to introductory lessons
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />{" "}
                    Limited course topics
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />{" "}
                    Community support
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faTimes} className="times-icon" />{" "}
                    Certificate
                  </li>
                </ul>
                <Button
                  className="mt-4 px-5 py-2 w-75"
                  onClick={() => subscripeFunction("free")}
                  disabled={subscription === "free"}
                >
                  {subscription === "free" ? "Subscribed" : "Subscribe"}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Monthly Access */}

        <Col lg={4} md={6} sm={10} className="mb-4">
          <Card className="h-100 mb-2  px-3">
            <Card.Body>
              <div className="mb-4 custom-pricing-card">
                <div className="pricing-icon mb-3 mt-3">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="pricing-icon-large"
                  />
                </div>
                <h5 className="plan-title fs-4">Monthly Access</h5>
                <p className="fs-1 fw-bold">$50/month</p>
                <p className="fs-5 mb-3 mt-3">
                  Enjoy full access to all of our courses on a flexible monthly
                  basis and get a certificate of completion.
                </p>
                <ul className="list-unstyled feature-list">
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />{" "}
                    Access to all courses
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />{" "}
                    Regularly updated content
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />{" "}
                    Premium support
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />{" "}
                    Certificate
                  </li>
                </ul>
                <Button
                  onClick={() => subscripeFunction("monthly")}
                  className="mt-4 px-5 py-2 w-75"
                  disabled={subscription === "monthly"}
                >
                  {subscription === "monthly" ? "Activated" : "Enroll Monthly"}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Yearly Access */}
        <Col lg={4} md={6} sm={10} className="mb-4 subscription-card">
          <Card className="h-100 mb-2 px-3">
            <Card.Body>
              <div className="mb-4 custom-pricing-card">
                <div className="pricing-icon mb-3">
                  <FontAwesomeIcon
                    icon={faCrown}
                    className="pricing-icon-large mt-3"
                  />
                </div>
                <h5 className="plan-title fs-4">Yearly Access</h5>
                <p className="fs-1 fw-bold">$250/year</p>
                <p className="fs-5 mb-3 mt-3">
                  Get the best value with yearly access to all courses.
                  Recommended for committed learners.
                </p>
                <ul className="list-unstyled feature-list">
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />{" "}
                    Access to all courses
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />{" "}
                    Save more with yearly billing
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />{" "}
                    Priority support and exclusive resources
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />{" "}
                    Certificate
                  </li>
                </ul>
                <Button
                  className="mt-4 px-5 py-2 w-75"
                  disabled={subscription === "yearly"}
                  onClick={() => subscripeFunction("yearly")}
                >
                  {subscription === "yearly" ? "Activated" : "Enroll Yearly"}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingCard;

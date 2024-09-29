import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Card, Col } from "react-bootstrap";
import { useMediaQuery } from "usehooks-ts";

export default function AuthCardButton({
  callback,
  backgroundColor,
  icon,
  description,
}) {
  const mediaQuery = useMediaQuery("(min-width: 768px)");

  return mediaQuery ? (
    <Col lg={12}>
      <Card
        role="button"
        onClick={callback}
        bg={backgroundColor}
        className="text-white my-2 mx-3"
        border="light"
      >
        <Card.Body>
          <h6 className="text-center">
            {" "}
            <FontAwesomeIcon size="lg" icon={icon} className="mx-2" />{" "}
            {description}
          </h6>
        </Card.Body>
      </Card>
    </Col>
  ) : (
    <Col>
      <Badge
        onClick={callback}
        role="button"
        bg={backgroundColor}
        style={{ margin: "auto" }}
        className=" d-flex justify-content-center align-items-center p-3 mx-3 text-white fs-5"
      >
        <FontAwesomeIcon size="lg" icon={icon} className="mx-2" />
      </Badge>
    </Col>
  );
}

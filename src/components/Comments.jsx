import React from "react";
import { Row, Col } from "react-bootstrap";

function Comments({ courseComments }) {
  return (
    <Row>
      <Col>
        <h2 className="my-4">Comments:</h2>
        {courseComments ? (
          courseComments.map((comment, index) => (
            <div key={index}>
              <h6>{comment.userName}</h6>
              <h5>{comment.comment}</h5>
              <br />
            </div>
          ))
        ) : (
          <h5 className="text-muted">No comments yet</h5>
        )}
      </Col>
    </Row>
  );
}

export default Comments;

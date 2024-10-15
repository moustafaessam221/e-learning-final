import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Comments.css";

function Comments({ courseComments }) {
  return (
    <Row>
      <Col>
        <h2 className="my-4">Comments:</h2>
        {courseComments ? (
          courseComments.map((comment, index) => (
            <div key={index} className="comment">
              <p className="comment-user">{comment.userName}</p>
              <h5 className="comment-text">{comment.comment}</h5>
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

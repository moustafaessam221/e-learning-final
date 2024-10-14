import React, { useContext, useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { UsersContext } from "../store/UsersContext";
import supabase from "../config/supabaseClient";
import { useParams } from "react-router-dom";

function AddComments() {
  const { user } = useContext(UsersContext);

  const { courseId } = useParams();

  const userId = user.id;
  const userName = user.user_metadata.full_name;

  const [comment, setUserComment] = useState("");

  async function addComment() {
    // get all comments
    const { data, error } = await supabase
      .from("courses")
      .select("comments")
      .eq("id", courseId)
      .single();

    if (error) {
      console.log(error);
    }
    const existingComments = data.comments || [];

    const newComment = {
      comment,
      userName,
    };
    // spread the comments and add the new comment
    const updatedComments = [...existingComments, newComment];
    console.log(updatedComments);

    const { error: updateError } = await supabase
      .from("courses")
      .update({ comments: updatedComments })
      .eq("id", courseId);
    if (updateError) {
      console.log(updateError);
    } else {
      console.log("Comment added successfully");
      
    }
  }

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Add Comment</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addComment();
        }}
      >
        <Form.Group controlId="commentTextarea">
          <Form.Control
            as="textarea"
            rows={7}
            placeholder="Enter your comment"
            className="p-3"
            onChange={(e) => setUserComment(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Add Comment
        </Button>
      </Form>
    </Container>
  );
}

export default AddComments;

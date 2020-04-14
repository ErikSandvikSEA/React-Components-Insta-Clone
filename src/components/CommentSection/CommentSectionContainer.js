// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = ({ comments }) => {
  // Add state for the comments
console.log(comments)
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      <CommentInput />
      {
       comments.map(comment => {
          return <Comment comment={comment}/>
        })
      }
    </div>
  );
};

export default CommentSection;

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
      {
       comments.map(comment => {
          return <Comment comment={comment}/>
        })
      }
      <div className='comment-input-container'>
      <CommentInput />
      <img src="https://c7.uihere.com/files/961/674/357/computer-icons-hamburger-button-menu-ellipsis-button-thumb.jpg" />
      </div>
      
    </div>
  );
};

export default CommentSection;

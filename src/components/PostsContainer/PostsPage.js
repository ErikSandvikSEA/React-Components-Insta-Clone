//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";



const PostsPage = ({ posts }) => {
  debugger
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {
       posts.map(post => {
         return <Post key={post.thumbnailURL} post={post}/>
      })
    }
    </div>
  );
};

export default PostsPage;

//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";



const PostsPage = ({ posts }) => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {
       posts.map(post=> {
         return <Post key={post.imageUrl} post={post}/>
      })
    }
    </div>
  );
};

export default PostsPage;

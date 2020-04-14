/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
// import the PostsPage and SearchBar and add them to the App
import PostsPage from './components/PostsContainer/PostsPage'
import SearchBar from './components/SearchBar/SearchBarContainer'
import DummyData from './dummy-data'
import "./App.css";




const App = () => {
  const [posts, setPosts] = useState(DummyData)
  const [searchTerm, setSearchTerm] = useState('')

  const getFilteredPosts = () => {
    const term = searchTerm.trim()
    return posts.filter(post => {
      if(!term){
        return post
      } else if (post.username.toLowerCase().includes(term.toLowerCase())){
        return post
      }
    })
  }

  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBar setSearchTerm={setSearchTerm}/>
      <PostsPage posts={getFilteredPosts()} />
    </div>
  );
};

export default App;

import Home from './components/Home';
import Navbar from './components/Navbar';
import useFetch from './hooks/useFetch';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
  var [blogs, setBlogs] = useFetch("http://localhost:8000/blogs");

  var [searchedArticle, setSearchArticle] = useState("");

  function deleteBlog(id){  
    fetch("http://localhost:8000/blogs/"+id, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((_) => {
      blogs = setBlogs(blogs.filter((blog) => blog.id !== id));
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
            <SearchBar setSearchArticle={setSearchArticle} searchedArticle={searchedArticle}/>
            <Switch >
              <Route exact path="/">
              {blogs !== null ? <Home blogs={blogs} deleteBlog={deleteBlog} searchedArticle={searchedArticle}/> : <div></div>}
              </Route>
              <Route path="/blog/:id"> 
                <BlogDetails blogs={blogs}/>
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

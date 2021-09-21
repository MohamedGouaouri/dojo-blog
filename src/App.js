import Home from './components/Home';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';

function App() {
  var [blogs, setBlogs] = useState(null);
  function deleteBlog(id){
    // API call to delete
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

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      // setBlogs(data);
      setBlogs(data);
    });
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        {blogs !== null ? <Home blogs={blogs} deleteBlog={deleteBlog}/> : <div></div>}
      </div>
    </div>
  );
}

export default App;

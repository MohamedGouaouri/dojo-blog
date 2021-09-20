import Home from './components/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  var [blogs, setBlogs] = useState([
    {id: 1, title: 'Introduction to React', desc:'', content: ''},
    {id: 2, title: 'Introduction to Django', desc:'', content: ''},
    {id: 3, title: 'Introduction to Flutter', desc:'', content: ''},
    {id: 4, title: 'Introduction to moder cryptography', desc:'', content: ''},
  ]);
  function deleteBlog(id){
    blogs = setBlogs(blogs.filter((blog) => blog.id !== id));
  }
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home blogs={blogs} deleteBlog={deleteBlog}/>
      </div>
    </div>
  );
}

export default App;

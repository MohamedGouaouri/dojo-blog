import Home from './components/Home';
import Navbar from './components/Navbar';
import useFetch from './hooks/useFetch';

function App() {
  var [blogs, setBlogs] = useFetch("http://localhost:8000/blogs");


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
    <div className="App">
      <Navbar/>
      <div className="content">
        {blogs !== null ? <Home blogs={blogs} deleteBlog={deleteBlog}/> : <div></div>}
      </div>
    </div>
  );
}

export default App;

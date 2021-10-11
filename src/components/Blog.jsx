import { Link } from "react-router-dom";


function Blog(props){
    function handleDelete(id){
        props.deleteBlog(id)
    }
    return (
        <div className="blog-preview">
                <button 
                    className="delete-btn" 
                    onClick={() => handleDelete(props.id)}>
                    Delete
                </button>
            <div>
                <h3>{props.title}</h3>
                <p>By {props.author}</p>
            </div>
            <Link to={"/blog/"+props.id}>Read more</Link>
        </div>
    );
}


export default Blog;
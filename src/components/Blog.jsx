

function Blog(props){
    function handleDelete(id){
        props.deleteBlog(id)
    }
    return (
        <div className="blog-review">
                <button 
                    className="delete-btn" 
                    onClick={() => handleDelete(props.id)}>
                    Delete
                </button>
            <div>
                <h3>{props.title}</h3>
                <p>By {props.author}</p>
            </div>
            <a href={"/blog/"+props.id}>Read more</a>
            
        </div>
    );
}


export default Blog;
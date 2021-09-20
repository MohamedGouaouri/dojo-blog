

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
                <p>{props.desc}</p>
            </div>
            <a href="/post/id">Read more</a>
            
        </div>
    );
}


export default Blog;
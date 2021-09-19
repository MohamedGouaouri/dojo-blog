

function Blog(props){
    return (
        <div className="blog-post">
            <div>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
            <a href="/post/id">Read more</a>
        </div>
    );
}


export default Blog;
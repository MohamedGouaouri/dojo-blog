import { useParams } from "react-router";


function BlogDetails({blogs}) {
    const {id} = useParams();
    return (
        <div className="blog-details">
            <h1>Blogs details {id}</h1>
            <div>
                {blogs[id-1].content}
            </div>
        </div>
    );
}

export default BlogDetails;
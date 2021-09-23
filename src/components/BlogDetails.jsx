import { useParams } from "react-router";


function BlogDetails() {
    const {id} = useParams();
    return (
        <div>
            <h1>Blogs details {id}</h1>
        </div>
    );
}

export default BlogDetails;
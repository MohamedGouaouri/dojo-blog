import Blog from "./Blog";

function Home(props){

    return (
        <div>
            {props.blogs.map((blog) => (
                <Blog 
                    key={blog.id} 
                    id={blog.id}
                    title={blog.title}
                    desc={blog.desc}
                    deleteBlog={props.deleteBlog} 
                />
            ))}
        </div>
    );
}


export default Home;
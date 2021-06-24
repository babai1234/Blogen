import { Link } from "react-router-dom"

const Bloglist = (props) => {
    return (
        <div>
            {props.items.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default Bloglist;
import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog , isPending , error } = useFetch('http://localhost:8000/blogs/' + id );

    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id , {
            method: 'DELETE'
        } )
        .then(() => {
            history.push("/")
        } )
    }
    return(
        <div className="blog-details">
            <h1>Blog Details </h1>
            { isPending && "Loading....." }
            { error &&  <div> { error } </div>  }
            { blog && 
                <article>
                    <h2> { blog.title } </h2>
                    <p> Written by  { blog.author } </p>
                    <p> { blog.body } </p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
                
            }
        </div>
    );
}


export default BlogDetails;
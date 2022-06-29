import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  
//    const handleDelete = (id) =>{
//         const newBlogs = blogs.filter( (blog) => ( blog.id !== id ) );
//         setBlogs(newBlogs);
//    }

    const { data: blogs , isPending , error  } = useFetch('http://localhost:8000/blogs')
  
    return (
        <div className="home">
          {/* { blogs && <BlogList blogs={blogs} handleDelete={ handleDelete } title="All Blogs"/>  } */}
          { error && <p> { error } </p> }
          { isPending && <p>Loading....</p> }
          { blogs && <BlogList blogs={blogs} title="All Blogs"/>  }
        </div>
    );
}

export default Home;

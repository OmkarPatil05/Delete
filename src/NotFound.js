import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="not-found">
            <h1>404 Page Not Found</h1>
            <Link to="/"> <p>Go back to the homepage</p></Link>
        </div>
    );
}

export default NotFound;
import { Link } from "react-router-dom";

function Blog(props) {
  return (
    <div className="w-100 h-100 flex justify-center">
      <Link to="/admin">
        <button className="cms-button">Admin console</button>
      </Link>
    </div>
  );
}

export default Blog;

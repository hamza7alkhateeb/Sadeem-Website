import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="container mt-5 bg-dark text-light p-5">
        <div className="container bg-dark p-5">
          <h1 className="display-4">Welcome to my Blog</h1>
          <p className="lead">
            Welcome below to check kinds of awesome blog about various topics.
          </p>
          <hr className="my-4" />
          <p>Click the button below to check out our awesome blog.</p>
          <Link to={"/blog"} className="btn btn-primary btn-lg">
            Check out our awesome blog
          </Link>
        </div>
      </div>
    );
}
export default Home;

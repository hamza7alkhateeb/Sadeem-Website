import React, { useState ,useEffect} from "react";
import { Link} from "react-router-dom";

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);

    useEffect(() => {
        fetch("api/blog")
          .then((res) => res.json())
            .then((data) => {
                setBlogs(data)
          });
    },[])
    useEffect(() => {
        fetch("api/blog/featured")
          .then((res) => res.json())
          .then((data) => {
              setFeaturedBlog(data[0]);
          });
    }, [])
    

    const capitalizeFirstLetter = (word) => {
        if (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return ""
    }
    const getBlogs = () => {
        const list = []
        const result = []
        blogs.map(blogPost => {
            return list.push(
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary">
                    {capitalizeFirstLetter(blogPost.category)}
                  </strong>
                  <h3 className="mb-0">{blogPost.title}</h3>
                  <div className="mb-1 text-muted">
                    {blogPost.month} {blogPost.day}
                  </div>
                  <p className="card-text mb-auto">{blogPost.excerpt}</p>
                  <Link to={`/${blogPost.slug}`} className="stretched-link">
                    Continue reading
                  </Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                 <img width='200' height='200' src={blogPost.thumbnail} alt={blogPost.title} />
                </div>
              </div>
            );
        })
        for (let i = 0; i < list.length; i += 2){
            result.push(
              <div key={i} className="row mb-2">
                <div className="col-md-6">{list[i]}</div>
                <div className="col-md-6">{list[i+1] ?list[i+1]:null}</div>
              </div>
            );
        }
        return result;
    }
    return (
      <>
        <div className="container">
          <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
              <Link
                className="p-2 link-secondary"
                to="/category"
                state={{ category: "world" }}
              >
                World
              </Link>
              <Link
                className="p-2 link-secondary"
                to={"/category"}
                state={{ category: "environment" }}
              >
                Environment
              </Link>
              <Link
                className="p-2 link-secondary"
                to={"/category"}
                state={{ category: "technology" }}
              >
                Technology
              </Link>
              <Link
                className="p-2 link-secondary"
                to={"/category"}
                state={{ category: "design" }}
              >
                Design
              </Link>
              <Link
                className="p-2 link-secondary"
                to={"/category"}
                state={{ category: "culture" }}
              >
                Culture
              </Link>
              <Link
                className="p-2 link-secondary"
                to={"/category"}
                state={{ category: "business" }}
              >
                Business
              </Link>
              <Link
                className="p-2 link-secondary"
                to={"/category"}
                state={{ category: "politics" }}
              >
                Politics
              </Link>
              <Link
                className="p-2 link-secondary"
                to={"/category"}
                state={{ category: "opinion" }}
              >
                Opinion
              </Link>
              <Link
                className="p-2 link-secondary"
                to={"/category"}
                state={{ category: "science" }}
              >
                Science
              </Link>
              <Link
                className="p-2 link-secondary"
                to={"/category"}
                state={{ category: "health" }}
              >
                Health
              </Link>
              <Link
                className="p-2 link-secondary"
                to={"/category"}
                state={{ category: "style" }}
              >
                Style
              </Link>
              <Link
                className="p-2 link-secondary"
                to={"/category"}
                state={{ category: "travel" }}
              >
                Travel
              </Link>
            </nav>
          </div>

          <div className="container">
            <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
              <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic">{featuredBlog.title}</h1>
                <p className="lead my-3">{featuredBlog.excerpt}</p>
                <p className="lead mb-0">
                  <Link
                    to={`/${featuredBlog.slug}`}
                    className="text-white fw-bold"
                  >
                    Continue reading...
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {getBlogs()}
        </div>
      </>
    );
}
export default Blog;

import React, { useState ,useEffect} from "react";
import { Link, useLocation } from "react-router-dom";

function Category() {
    const location = useLocation();
    const currentCategory = location.state.category;
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      fetch("api/blog/category", {
        method: "POST",
        body: JSON.stringify({
          category: `${currentCategory}`,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data);
        });
    }, [currentCategory]);

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
          <h3 className="display-4">Category : {currentCategory}</h3>
          <div className="nav-scroller py-1 mb-3">
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

          {getBlogs()}
        </div>
      </>
    );
}


export default Category;

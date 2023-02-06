import React, { useEffect, useState } from "react";
import { Link ,useParams } from "react-router-dom";

function BlogDetail() {

    const [blog, setBlog] = useState({})
    const { slug } = useParams();

    useEffect(() => {
      fetch(`api/blog/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data);
        });
    }, []);

    
     const capitalizeFirstLetter = (word) => {
       if (word) {
         return word.charAt(0).toUpperCase() + word.slice(1);
       }
       return "";
     };
    return (
      
        <div className="container mt-3  ">
          <h1 className="display-2">{capitalizeFirstLetter(blog.title)}</h1>
          <h2 className="text-muted mt-3">
            Category : {capitalizeFirstLetter(blog.category)}
          </h2>
          <h4>
            {blog.month} {blog.day}
          </h4>
          <div
            className="mt-5 mb-5"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <p className="lead mb-5">
            <Link className="fw-bold" to={"/blog"}>
              Back to Blog
            </Link>
          </p>
        </div>
      
    );
}
export default BlogDetail;

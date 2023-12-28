import React, { useEffect, useState } from "react";
import "./BlogPreview.css";

const BlogPreview = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://sgl-be.onrender.com/getblogs");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <h1 className="ourblogs">OUR BLOGS</h1>
      <div className="home-blogs-section">
        {blogs.map((blog, index) => (
          <div className="home-blogs-sub-section" key={index}>
            <div className="card" style={{ width: '18.2rem' }}>
                <img src={`data:image/png;base64,${blog.image}`} className="card-img-top" alt="..." style={{ height: '12rem', width: "18rem" }} />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.subtitle}</p>
                <p className="card-text">{blog.content}</p>
                <a href="#" className="btn btn-primary" id="readmore-btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPreview;

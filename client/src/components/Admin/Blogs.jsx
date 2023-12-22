import React, { useState, useEffect } from "react";
import "./Blogs.css";
import AdminSideNav from "./AdminSide";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { Box } from "@mui/system";

const Blogs = () => {
  const navigate = useNavigate();
  const [editIndex, setEditIndex] = useState(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [file, setFile] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:4000/getblogs");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCreateBlog = async () => {
    if (!file || !content || !title || !subtitle) {
      console.error("Please fill in all fields and select an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("content", content);
    formData.append("title", title);
    formData.append("subtitle", subtitle);

    try {
      const response = await fetch("http://localhost:4000/postblogs", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Blog created successfully:", data);
        await Swal.fire({
          icon: "success",
          title: "Blog added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setContent("");
        setTitle("");
        setSubtitle("");
        setFile(null);
        // Refresh blogs after creating a new one
        fetchBlogs();
      } else {
        console.error("Failed to create blog:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating blog:", error.message);
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const handleDeleteBlog = async (blogId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `http://localhost:4000/deleteblogs/${blogId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          await Swal.fire({
            icon: "success",
            title: "Blog deleted successfully!",
            showConfirmButton: false,
            timer: 1500,
          });

          // Refresh blogs after deleting one
          fetchBlogs();
        } else {
          console.error("Failed to delete blog:", response.statusText);
        }
      } catch (error) {
        console.error("Error deleting blog:", error);

        // Show error message
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    }
  };

  return (
    <div className="admin-layout">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ marginTop: 0 }}
      >
        <div
          className="container d-flex justify-content-center align-items-center text-center"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <h1
            className="admin-dashboard ms-4 ms-sm-3 mx-auto"
            style={{ maxWidth: "fit-content" }}
          >
            Admin Dashboard
          </h1>
          <div
            onClick={() => {
              navigate("/admin-login");
            }}
            className="logout-button ms-auto"
          >
            <span className="d-none d-sm-inline">Logout </span>
            <FaSignOutAlt style={{ marginLeft: "8px", fontSize: "1rem" }} />
          </div>
        </div>
      </nav>

      <div className="admin-content-grid">
        <div className="admin-content">
          <div className="blogs-layout">
            <div className="admin-sidenav">
              <AdminSideNav />
            </div>

            <div className="blog-container border-0">
              <div className="card">
                <h1 className="text-dark mb-4 ps-0">Blogs</h1>
                <hr
                  style={{
                    color: "orange",
                    borderTop: "2px solid orange",
                    width: "50%",
                    margin: "0",
                  }}
                />

                <div className="blogs-layout">
                  <div className="image-section">
                    <label htmlFor="image" className="image-upload-label">
                      Images:
                    </label>
                    <div className="image-preview">
                      {file ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt="Blog Preview"
                        />
                      ) : (
                        <div className="empty-preview-box">
                          No Image Selected
                        </div>
                      )}
                    </div>
                    {file && (
                      <button
                        className="clear-image-button"
                        onClick={() => setFile(null)}
                      >
                        Clear Image
                      </button>
                    )}
                    <label htmlFor="imageUpload" className="upload">
                      Upload Image:
                    </label>
                    <input
                      type="file"
                      id="imageUpload"
                      name="image"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>

                  <div className="form-section">
                    <form
                      className="blog-form mb-4"
                      style={{ textAlign: "left" }}
                    >
                      <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          name="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subtitle">Subtitle</label>
                        <textarea
                          className="form-control"
                          id="subtitle"
                          name="subtitle"
                          value={subtitle}
                          onChange={(e) => setSubtitle(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="description">Content</label>
                        <textarea
                          className="form-control"
                          id="description"
                          name="description"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                      </div>
                      {editIndex === null ? (
                        <button
                          type="button"
                          className="btn btn-success"
                          style={{ padding: "5px 8px", fontSize: "14px" }}
                          onClick={handleCreateBlog}
                        >
                          Add Blog
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-warning ms-2"
                          onClick={handleEditBlog}
                        >
                          Update Blog
                        </button>
                      )}
                    </form>
                  </div>
                </div>

                <div className="posted-blogs"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Box>
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-card mb-3">
            <img
              src={`data:image/png;base64,${blog.image}`}
              alt="Blog"
              width="40%"
              height="40%"
              className="img-fluid"
            />
            <p>Title: {blog.title}</p>
            <p>Subtitle: {blog.subtitle}</p>
            <p>Content: {blog.content}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteBlog(blog._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default Blogs;

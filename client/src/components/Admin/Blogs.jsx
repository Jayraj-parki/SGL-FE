import { useState, useEffect } from "react";
import "./Blogs.css";
import AdminSideNav from "./AdminSide";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Blogs = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogData, setBlogData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setMobileMenuOpen(isMobileView);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/http://localhost:4000/getblogs");
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const handleEditBlog = async () => {
    try {
      // Your existing logic for editing a blog
      // ...

      // Show success message
      await Swal.fire({
        icon: "success",
        title: "Blog updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error updating blog:", error);

      // Show error message
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const handleDeleteBlog = async (index) => {
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
        // Your existing logic for deleting a blog
        // ...

        // Show success message
        await Swal.fire({
          icon: "success",
          title: "Blog deleted successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        // Refresh blogs after deleting one
        fetchBlogs();
      } catch (error) {
        console.error("Error deleting blog:", error);

        // Show error message
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    }
  };

  return (
    <div className="admin-layout">
      <div className="admin-content-grid">
        <div className="admin-content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="pagetitle">
                  <h1>Admin Dashboard</h1>
                  <div
                    onClick={() => {
                      navigate("/admin-login");
                    }}
                    className="logout-button"
                  >
                    Logout <FaSignOutAlt style={{ marginLeft: "5px" }} />
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="blogs-layout">
            {!isMobileMenuOpen && (
              <div className="admin-sidenav">
                <AdminSideNav />
              </div>
            )}

            <div className="blog-container">
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
                        <img src={URL.createObjectURL(file)} alt="Blog Preview" />
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
                    <form className="blog-form mb-4" style={{ textAlign: "left" }}>
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

                <div className="posted-blogs">
                  {blogData.map((blog, index) => (
                    <div key={index} className="blog-card mb-3">
                      <h3>{blog.title}</h3>
                      <p>{blog.subtitle}</p>
                      <p>{blog.content}</p>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="img-fluid"
                      />
                      <div className="blog-actions">
                        <button
                          className="btn btn-warning me-2"
                          onClick={() => setEditIndex(index)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDeleteBlog(index)}
                        >
                          Delete
                        </button>
                        <button className="btn btn-primary ms-2">Like</button>
                        <button className="btn btn-secondary">Share</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

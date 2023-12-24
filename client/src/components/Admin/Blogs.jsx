import { useState, useEffect } from "react";
import "./Blogs.css";
import AdminSideNav from "./AdminSide";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import RecentBlogs from "./RecentBlogs";

const Blogs = () => {
  const navigate = useNavigate();
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
      const response = await fetch("https://sgl-be.onrender.com/getblogs");
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
      const response = await fetch("https://sgl-be.onrender.com/postblogs", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Blog created successfully:", data);

        // Update the state in RecentBlogs.jsx immediately
        setBlogs((prevBlogs) => [data, ...prevBlogs]);

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

            <div
              className="blog-container border-0 col-md-6 col-lg-8 col-xl-9 col-sm-6 ms-auto me-0"
              style={{
                transition: "width 0.5s ease",
                maxWidth: "80%", // Initial width
                marginLeft: "auto",
                marginRight: 0,
              }}
            >
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

                      <button
                        type="button"
                        className="btn btn-success"
                        style={{ padding: "5px 8px", fontSize: "14px" }}
                        onClick={handleCreateBlog}
                      >
                        Add Blog
                      </button>
                    </form>
                  </div>
                </div>

                <div className="posted-blogs"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        className="text-center mt-2"
        style={{
          fontSize: "0.6rem",
          color: "#999",
          maxHeight: "150px",
          overflowY: "auto",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <RecentBlogs
          blogs={blogs}
          title={title}
          subtitle={subtitle}
          content={content}
          file={file}
        />
      </footer>
    </div>
  );
};

export default Blogs;

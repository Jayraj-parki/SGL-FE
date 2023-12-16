import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const SortOptions = () => {
  const buttonStyle = {
    fontSize: "10px", // Decreased font size
    border: "1px solid #FFD699", // Light orange border
    borderRadius: "5px", // Rounded corners
    marginRight: "5px", // Adjust spacing as needed
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-orange me-0"
              style={buttonStyle}
            >
              Sort by Type
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-orange dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={buttonStyle}
            >
              <i className="bi bi-caret-down-fill"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Sort by Type
                </a>
              </li>
              {/* Add other sorting options if needed */}
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-orange me-0"
              style={buttonStyle}
            >
              Sort by Color
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-orange dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={buttonStyle}
            >
              <i className="bi bi-caret-down-fill"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Sort by Color
                </a>
              </li>
              {/* Add other sorting options if needed */}
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-orange me-0"
              style={buttonStyle}
            >
              Sort by Name
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-orange dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={buttonStyle}
            >
              <i className="bi bi-caret-down-fill"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Sort by Name
                </a>
              </li>
              {/* Add other sorting options if needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortOptions;

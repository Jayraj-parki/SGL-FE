import React, { useState } from "react";
import "./gems.css";

const Beads = () => {
  const [data, setData] = useState({
    name: "",
    subtype: "Precious",
    price: "",
    weight: "",
    units: "Carat",
    shape: "",
    colour: "",
    value: "",
    dimenensions: "",
    transparency: "",
    hardness: "",
    microscopicexamination: "",
    image: null,
  });

  const [inventoryData, setInventoryData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setData((prevData) => ({
      ...prevData,
      image: selectedImage,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("subtype", data.subtype);
      formData.append("name", data.name);
      formData.append("weight", data.weight);
      formData.append("units", data.units);
      formData.append("shape", data.shape);
      formData.append("price", data.price);
      formData.append("colour", data.colour);
      formData.append("value", data.value);
      formData.append("dimenensions", data.dimenensions);
      formData.append("transparency", data.transparency);
      formData.append("hardness", data.hardness);
      formData.append("microscopicexamination", data.microscopicexamination);
      formData.append("image", data.image);

      // Assuming 'inventoryData' is an array to store the form data
      setInventoryData([...inventoryData, data]);

      const response = await fetch("https://sgl-be.onrender.com/postbeads", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        // Clear the form after submission
        alert("Successfully added the data");
        setData({
          name: "",
          subtype: "Precious",
          price: "",
          weight: "",
          units: "Carat",
          shape: "",
          colour: "",
          value: "",
          dimenensions: "",
          transparency: "",
          hardness: "",
          image: null,
          microscopicexamination: "",
        });
      } else {
        console.error("Form submission failed. Status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  const handleDelete = (index) => {
    const updatedInventory = [...inventoryData];
    updatedInventory.splice(index, 1);
    setInventoryData(updatedInventory);
  };

  const renderTableRows = () => {
    return inventoryData.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.subtype}</td>
        <td>{item.weight}</td>
        <td>{item.shape}</td>
        <td>{item.price}</td>
        <td>{item.colour}</td>
        <td>{item.value}</td>
        <td>{item.dimenensions}</td>
        <td>{item.transparency}</td>
        <td>{item.hardness}</td>
        <td>{item.microscopicexamination}</td>
        <td>
          {item.image ? (
            <img
              src={URL.createObjectURL(item.image)}
              alt="item"
              style={{
                maxWidth: "50px",
                maxHeight: "50px",
              }}
            />
          ) : (
            "No Image"
          )}
        </td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <form className="form-123">
        <div className="card-123">
          <h2>Beads</h2>

          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="input"
            placeholder="Name"
          />

          <select
            style={{ width: "100%", height: "45px", borderRadius: "5px" }}
            name="subtype"
            value={data.subtype}
            onChange={handleChange}
          >
            <option value="Precious">Precious</option>
            <option value="Semi-Precious">Semi-Precious</option>
          </select>

          <input
            type="text"
            placeholder="Weight"
            name="weight"
            value={data.weight}
            onChange={handleChange}
            className="input"
          />

          <select
            style={{ width: "100%", height: "45px", borderRadius: "5px" }}
            name="units"
            value={data.units}
            onChange={handleChange}
          >
            <option value="Carat">Carat (metric; 1 carat=0.2gm)</option>
          </select>

          <input
            type="text"
            name="shape"
            value={data.shape}
            onChange={handleChange}
            className="input"
            placeholder="Shape"
          />

          <input
            type="number"
            name="price"
            value={data.price}
            onChange={handleChange}
            className="input"
            placeholder="Price"
          />

          <input
            type="text"
            name="colour"
            value={data.colour}
            onChange={handleChange}
            className="input"
            placeholder="Colour"
          />

          <input
            type="text"
            name="value"
            value={data.value}
            onChange={handleChange}
            className="input"
            placeholder="Value"
          />

          <input
            type="text"
            name="dimenensions"
            value={data.dimenensions}
            onChange={handleChange}
            className="input"
            placeholder="Dimenensions"
          />
          <input
            type="text"
            name="transparency"
            value={data.transparency}
            onChange={handleChange}
            className="input"
            placeholder="Transparency"
          />
          <input
            type="number"
            name="hardness"
            value={data.hardness}
            onChange={handleChange}
            className="input"
            placeholder="Hardness"
          />

          <input
            type="text"
            name="microscopicexamination"
            value={data.microscopicexamination}
            onChange={handleChange}
            className="input"
            placeholder="Microscopic Examination"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          <button
            type="submit"
            style={{ background: "green", color: "white" }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>

      <div className="card p-4 mb-4">
        <h2 className="mb-4">Current Inventory</h2>
        <div className="table-responsive">
          <table className="table mt-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Subtype</th>
                <th>Weight</th>
                <th>Shape</th>
                <th>Price</th>
                <th>Colour</th>
                <th>Value</th>
                <th>Dimensions</th>
                <th>Transparency</th>
                <th>Hardness</th>
                <th>Microscopic Examination</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Beads;

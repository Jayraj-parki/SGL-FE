import React, { useState } from "react";
import "./gems.css";
import Swal from "sweetalert2";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const Pearls = () => {
  const navigate =useNavigate()
  const [data, setData] = useState({
    name: "",
    subtype: "SouthSea",
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

      const response = await fetch("https://sgl-be.onrender.com/postpearls", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        // Clear the form after submission
        alert("Successfully added the data");
        setData({
          name: "",
          subtype: "SouthSea",
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
        await Swal.fire({
          icon: "success",
          title: "Item added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error("Item addition failed")
        console.error("Form submission failed. Status:", response.status);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
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
<ArrowBackIcon onClick={()=>navigate("/admin/inventoryitem")} style={{width:"100px",height:"50px",marginTop:"10px"}} />
            <center>
      <form className="form-123" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <div className="card-123" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{borderBottom:"2px",borderStyle:"solid",borderColor:"gold",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Perals Inventory</h2>
        <label htmlFor="name" className="form-label mb-0"> Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
            className="input"
            placeholder="Name"
          />

          <label htmlFor="subtype" className="form-label mb-0 mt-2"> Subtype</label>
          <select
            style={{ width: "100%", height: "45px", borderRadius: "5px" }}
            name="subtype"
            value={data.subtype}
            onChange={handleChange}
          >
            <option value="SouthSea">SouthSea</option>
            <option value="KcPerals">KcPerals</option>
            <option value="Freshwater">Freshwater</option>
            <option value="Cultured">Cultured</option>
          </select>
          <label htmlFor="weight" className="form-label  mt-4"> Weight</label>

          <input
            type="text"
            placeholder="Weight"
            name="weight"
            value={data.weight}
            onChange={handleChange}
            className="input"
          />
          <label htmlFor="weight" className="form-label  mt-4"> Units</label>

          <select
            style={{ width: "100%", height: "45px", borderRadius: "5px" }}
            name="units"
            value={data.units}
            onChange={handleChange}
          >
            <option value="Carat">Carat (metric; 1 carat=0.2gm)</option>
          </select>
          <label htmlFor="weight" className="form-label  mt-4"> Shape</label>

          <input
            type="text"
            name="shape"
            value={data.shape}
            onChange={handleChange}
            className="input"
            placeholder="Shape"
          />
          <label htmlFor="weight" className="form-label  mt-4"> Price</label>

          <input
            type="number"
            name="price"
            value={data.price}
            onChange={handleChange}
            className="input"
            placeholder="Price"
          />
          <label htmlFor="weight" className="form-label  mt-4"> Colour</label>

          <input
            type="text"
            name="colour"
            value={data.colour}
            onChange={handleChange}
            className="input"
            placeholder="Colour"
          />
          <label htmlFor="weight" className="form-label  mt-4"> Value</label>

          <input
            type="text"
            name="value"
            value={data.value}
            onChange={handleChange}
            className="input"
            placeholder="Value"
          />
          <label htmlFor="weight" className="form-label  mt-4"> Dimensions</label>

          <input
            type="text"
            name="dimenensions"
            value={data.dimenensions}
            onChange={handleChange}
            className="input"
            placeholder="Dimenensions"
          />
                    <label htmlFor="weight" className="form-label  mt-4"> Trnasperency</label>

          <input
            type="text"
            name="transparency"
            value={data.transparency}
            onChange={handleChange}
            className="input"
            placeholder="Transparency"
          />
                    <label htmlFor="weight" className="form-label  mt-4"> Harness</label>

          <input
            type="number"
            name="hardness"
            value={data.hardness}
            onChange={handleChange}
            className="input"
            placeholder="Hardness"
          />
          <label htmlFor="weight" className="form-label  mt-4"> Microscopical Examination</label>

          <input
            type="text"
            name="microscopicexamination"
            value={data.microscopicexamination}
            onChange={handleChange}
            className="input"
            placeholder="Microscopic Examination"
          />
<label htmlFor="weight" className="form-label mb-0 mt-4"> Upload File</label>
          <div className="input-group">
            <label className="input-group-text" htmlFor="fileInput">
              Choose File
            </label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
          {/* <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          /> */}

          <button
            type="submit"
            style={{ background: "green", color: "white" }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      </center>

      <div className="card  p-4 mb-4 mt-3" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <h2 className="mb-2">Current Inventory</h2>
        <div className="table-responsive" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",borderRadius:"7px" }}>
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

export default Pearls;

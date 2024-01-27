import React, { useState } from "react";
import "./gems.css";

const Diamonds = () => {
  const [data, setData] = useState({
    name: "",
    subtype: "",
    price: "",
    weight: "",
    colour: "",
    units: "",
    value: "",
    shape: "",
    size: "",
    clarity: "",
    dimensions: "",
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
      formData.append("name", data.name);
      formData.append("subtype", data.subtype);
      formData.append("price", data.price);
      formData.append("weight", data.weight);
      formData.append("colour", data.colour);
      formData.append("units", data.units);
      formData.append("value", data.value);
      formData.append("shape", data.shape);
      formData.append("size", data.size);
      formData.append("clarity", data.clarity);
      formData.append("dimensions", data.dimensions);
      formData.append("transparency", data.transparency);
      formData.append("hardness", data.hardness);
      formData.append("microscopicexamination", data.microscopicexamination);
      formData.append("image", data.image);

      const response = await fetch("http://localhost:4000/postdiamonds", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        alert("Successfully added the data");
        setData({
          name: "",
          subtype: "",
          price: "",
          weight: "",
          colour: "",
          units: "",
          value: "",
          shape: "",
          size: "",
          clarity: "",
          dimensions: "",
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
        {/* ... (unchanged) */}
      </tr>
    ));
  };

  return (
    <div>
      <form className="form-123">
        <div className="card-123">
          <h2>Diamonds</h2>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="subtype"
            value={data.subtype}
            onChange={handleChange}
            placeholder="Subtype"
          />
          <input
            type="text"
            name="price"
            value={data.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <input
            type="text"
            name="weight"
            value={data.weight}
            onChange={handleChange}
            placeholder="Weight"
          />
          <input
            type="text"
            name="colour"
            value={data.colour}
            onChange={handleChange}
            placeholder="Colour"
          />
          <input
            type="text"
            name="units"
            value={data.units}
            onChange={handleChange}
            placeholder="Units"
          />
          <input
            type="text"
            name="value"
            value={data.value}
            onChange={handleChange}
            placeholder="Value"
          />
          <input
            type="text"
            name="shape"
            value={data.shape}
            onChange={handleChange}
            placeholder="Shape"
          />
          <input
            type="text"
            name="size"
            value={data.size}
            onChange={handleChange}
            placeholder="Size"
          />
          <input
            type="text"
            name="clarity"
            value={data.clarity}
            onChange={handleChange}
            placeholder="Clarity"
          />
          <input
            type="text"
            name="dimensions"
            value={data.dimensions}
            onChange={handleChange}
            placeholder="Dimensions"
          />
          <input
            type="text"
            name="transparency"
            value={data.transparency}
            onChange={handleChange}
            placeholder="Transparency"
          />
         <input
          type="number"
           name="hardness"
           value={data.hardness}
            onChange={handleChange}
            placeholder="Hardness"
          />

          <input
            type="text"
            name="microscopicexamination"
            value={data.microscopicexamination}
            onChange={handleChange}
            placeholder="Microscopic Examination"
          />
          <input type="file" onChange={handleImageChange} />

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
                {/* ... (unchanged) */}
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Diamonds;

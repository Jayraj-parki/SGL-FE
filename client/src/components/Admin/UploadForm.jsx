import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./Inventory.css";

const UploadForm = ({ onUpload }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: "",
    subtype: "",
    name: "",
    weight: 0,
    shape: "",
    price: 0,
    colour: "",
    value: "", // Set this to an empty string
    image: null,
  });

  const [imageFile, setImageFile] = useState(null);

  // ... (previous code)

  const jewelryTypes = [
    "Gems",
    "Beads",
    "Diamonds",
    "Jewelry",
    "Astrology Gems",
    "Pearls",
    "Corals",
    "Zodiac Stones",
  ];

  const jewelrySubtypes = {
    Gems: ["Precious", "Semi-precious"],
    Beads: ["Gemstone", "Glass", "Metal", "Wood", "Plastic", "Ceramic"],
    Diamonds: ["White", "Yellow", "Pink", "Blue", "Green", "Black"],
    Jewelry: [
      "Rings",
      "Necklaces",
      "Bracelets",
      "Earrings",
      "Pendants",
      "Brooches",
      "Anklets",
      "Cufflinks",
      "Body jewelry",
    ],
    "Astrology Gems": [
      "Ruby",
      "Pearl",
      "Coral",
      "Emerald",
      "Yellow Sapphire",
      "Diamond",
      "Blue Sapphire",
      "Hessonite",
      "Cat's Eye",
    ],
    Pearls: ["Natural (Freshwater, Akoya)", "Cultured (South Sea, Tahitian)"],
    Corals: ["Precious (Red Coral)", "Organic (Black Coral, White Coral)"],
    "Zodiac Stones": [
      "Aries: Bloodstone",
      "Taurus: Sapphire",
      "Gemini: Agate",
      "Cancer: Moonstone",
      "Leo: Onyx",
      "Virgo: Carnelian",
      "Libra: Peridot",
      "Scorpio: Topaz",
      "Sagittarius: Turquoise",
      "Capricorn: Garnet",
      "Aquarius: Amethyst",
      "Pisces: Aquamarine",
    ],
  };

  const jewelryShapes = {
    Gems: [
      "Round",
      "Brilliant",
      "Oval",
      "Marquise",
      "Pear",
      "Cabochon",
      "Square",
      "Emerald cut",
      "Asscher",
      "Baguette",
    ],
    Beads: [
      "Round",
      "Cylindrical",
      "Square",
      "Faceted",
      "Bicone",
      "Tricone",
      "Heishi",
      "Barrel",
      "Oval",
      "Donut",
    ],
    Diamonds: [
      "Round",
      "Brilliant",
      "Oval",
      "Marquise",
      "Pear",
      "Cabochon",
      "Square",
      "Emerald cut",
      "Asscher",
      "Baguette",
    ],
    Jewelry: [
      "Styles: Vintage",
      "Modern",
      "Minimalist",
      "Statement",
      "Classic",
      "Trendy",
    ],
    "Astrology Gems": [
      "Often cabochons or beads, based on traditional practices",
    ],
    Pearls: ["Shapes: Round", "Button", "Oval", "Baroque", "Keshi"],
    Corals: ["Shapes: Cabochons", "Beads", "Carvings"],
    "Zodiac Stones": ["Varies based on stone type"],
  };

  const units = {
    Gems: ["Carat (metric; 1 carat = 0.2 grams)"],
    Beads: ["Sold by strand", "Weight (grams)", "Individual bead"],
    Diamonds: ["Carat (metric)"],
    Jewelry: ["Individual piece or set"],
    "Astrology Gems": ["Carats or grams"],
    Pearls: ["Grain (0.775 carats)", "Strand", "Individual pearl"],
    Corals: ["Grams or individual piece"],
    "Zodiac Stones": ["Varies based on stone type"],
  };

  const values = {
    Gems: [
      "Varies widely based on size, clarity, color, cut, and gemstone type. Prices can range from a few dollars per carat for lower-quality gemstones to millions for flawless diamonds.",
    ],
    Beads: [
      "Varies greatly based on material, size, and design. Can range from a few cents per bead to hundreds of dollars for rare or custom-made beads.",
    ],
    Diamonds: [
      "Extremely high, especially for larger, colorless diamonds of good clarity. Prices can soar into the millions for exceptional stones.",
    ],
    Jewelry: [
      "Enormous range based on materials, design, brand, and historical significance. Some pieces can be priceless antiques, while others are affordable everyday wear.",
    ],
    "Astrology Gems": [
      "Can vary based on quality and astrological significance, but generally not as high as purely ornamental gems.",
    ],
    Pearls: [
      "Can be high for large, round, white pearls, but vary based on size, luster, color, and origin.",
    ],
    Corals: [
      "Red coral is most valuable, with prices varying based on size and color. Organic corals are generally less expensive.",
    ],
    "Zodiac Stones": [
      "The value of Zodiac Stones varies based on the type of stone and its astrological significance.",
      "Bloodstone (Aries): Known for promoting courage and vitality.",
      "Sapphire (Taurus): Symbolizing wisdom and royalty.",
      "Agate (Gemini): Believed to enhance mental clarity and balance.",
      "Moonstone (Cancer): Associated with intuition and emotional healing.",
      "Onyx (Leo): A protective stone believed to bring strength and stamina.",
      "Carnelian (Virgo): Linked to creativity and boosting energy.",
      "Peridot (Libra): Representing good fortune and positive energy.",
      "Topaz (Scorpio): Thought to bring strength and protection.",
      "Turquoise (Sagittarius): Symbolizing wisdom and spiritual growth.",
      "Garnet (Capricorn): Associated with protection and strength.",
      "Amethyst (Aquarius): Believed to enhance intuition and spiritual awareness.",
      "Aquamarine (Pisces): Representing tranquility and emotional balance.",
    ],
  };

  const [subtypeOptions, setSubtypeOptions] = useState([]);
  const [shapeOptions, setShapeOptions] = useState([]);

  // Effect to update subtype and shape options based on selected type
  useEffect(() => {
    // Set subtype options based on selected type
    if (formData.type && jewelrySubtypes[formData.type]) {
      setSubtypeOptions(jewelrySubtypes[formData.type]);
    } else {
      setSubtypeOptions([]);
    }

    // Set shape options based on selected type
    if (formData.type && jewelryShapes[formData.type]) {
      setShapeOptions(jewelryShapes[formData.type]);
    } else {
      setShapeOptions([]);
    }
  }, [formData.type]);

  const AdditionalInfo = () => {
    if (formData.type !== "text") {
      return (
        <div>
          <p className="text-muted mt-2">
            <strong>Units:</strong> {units[formData.type]}
          </p>
          <div className="text-muted">
            <strong>Values:</strong>
            <br />
            {values[formData.type] &&
              values[formData.type].map((item, index) => (
                <p key={index} className="mb-2">
                  {item}
                </p>
              ))}
          </div>
        </div>
      );
    }
    return null;
  };

  const renderInput = (label, name, type = "text") => {
    const inputProps = {
      id: name,
      name: name,
      value: formData[name],
      onChange: handleChange,
      required: true,
    };

    return (
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        {type === "dropdown" ? (
          <select className="form-select" {...inputProps}>
            <option value="">{`Select ${label}`}</option>
            {jewelryTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : type === "textarea" || type === "text" ? (
          <div>
            <textarea className="form-control" {...inputProps}></textarea>
          </div>
        ) : (
          <input type={type} className="form-control" {...inputProps} />
        )}
      </div>
    );
  };

  // Function to render textarea input fields
  const renderTextarea = (name, value) => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <div>
        <textarea
          className="form-control"
          id={name}
          name={name} // Use the correct name attribute
          value={formData[name]} // Use the correct property in formData
          onChange={handleChange}
          required
        ></textarea>
      </div>
    </div>
  );

  // Function to render dropdown select fields
  const renderDropdown = (label, name, options) => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className="form-select"
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required
      >
        <option value="">{`Select ${label}`}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  //   const getValuesForType = (type) => {
  //     if (values[type]) {
  //       return values[type].map((item, index) => (
  //         <div key={index} className="mb-2">
  //           {item}
  //         </div>
  //       ));
  //     }
  //     return (
  //       <div className="text-muted">
  //         No specific values available for the selected type.
  //       </div>
  //     );
  //   };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      setImageFile(e.target.files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = "https://sgl-be.onrender.com/inventorypost";

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, key === "image" ? imageFile : value);
      });

      const response = await fetch(apiUrl, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const newItem = { ...formData, image: imageFile, id: Date.now() };
        onUpload(newItem);

        setFormData({
          type: "",
          subtype: "",
          name: "",
          weight: 0,
          shape: "",
          price: 0,
          colour: "",
          value: "",
          image: null,
        });

        await Swal.fire({
          icon: "success",
          title: "Item added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.error("Failed to add item:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div id="uploadForm" className="card p-3 mb-4">
      <form onSubmit={handleSubmit} className="row g-3">
        <h1 className="text-dark mb-4 ps-0">Upload</h1>
        <hr
          style={{
            color: "orange",
            borderTop: "2px solid orange",
            width: "50%",
            margin: "0",
          }}
        />
        <h6>Add items to inventory</h6>

        {/* Render dropdown select for jewelryTypes */}
        {renderDropdown("Type", "type", jewelryTypes)}

        {/* Render subtype dropdown based on selected type */}
        {formData.type && renderDropdown("Subtype", "subtype", subtypeOptions)}

        {/* Render input fields for other attributes */}
        {renderInput("Name", "name")}
        {renderInput("Weight", "weight", "number")}
        {formData.type &&
          renderDropdown("Units", "units", units[formData.type])}
        {formData.type && renderDropdown("Shape", "shape", shapeOptions)}
        {renderInput("Price", "price", "number")}
        {renderInput("Colour", "colour")}
        {formData.type && renderTextarea("Value", "value")}
        <AdditionalInfo />

        {/* Render input field for image */}
        {renderInput("Image", "image", "file")}

        {/* Render submit button */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary mt-3">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;

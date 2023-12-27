import React, { useState } from "react";
import PropTypes from "prop-types";
import jewelryData from "./jewelryData";
import "./beadssidebar.css";

const SidebarSection = ({
  title,
  options,
  activeSection,
  onToggleVisibility,
  onSelectOption,
  selectedShape,
  selectedType,
  selectedSubtype,
}) => (
  <div className="sidebar-section">
    <div className="select-main" onClick={() => onToggleVisibility(title)}>
      {title}
      <span>
        <i className="fa-solid fa-caret-down"></i>
      </span>
    </div>
    <div
      className="options-main"
      style={{ display: activeSection === title ? "block" : "none" }}
    >
      {options.map((option) => (
        <div key={option} onClick={() => onSelectOption(title, option)}>
          <input
            type="checkbox"
            id={`${title}-${option}`}
            checked={
              title === "Shapes"
                ? selectedShape === option
                : (title === activeSection &&
                    (title === "Type" || title === "Prices") &&
                    selectedType === option) ||
                  (title === "Subtypes" && selectedSubtype === option)
            }
            readOnly
          />
          <label
            htmlFor={`${title}-${option}`}
            className={`option-label ${
              title === "Shapes" && selectedShape === option
                ? "selected-option"
                : ""
            }`}
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  </div>
);

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  activeSection: PropTypes.string.isRequired,
  onToggleVisibility: PropTypes.func.isRequired,
  onSelectOption: PropTypes.func.isRequired,
  selectedShape: PropTypes.string,
  selectedType: PropTypes.string,
  selectedSubtype: PropTypes.string,
};

const Beadssidebar = () => {
  const [activeSection, setActiveSection] = useState("Type");
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSubtype, setSelectedSubtype] = useState(null);
  const [selectedShape, setSelectedShape] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const toggleVisibility = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const onSelectOption = (section, option) => {
    if (section === "Type") {
      setSelectedType(option);
      setSelectedSubtype(null);
      setSelectedShape(null);
      setSelectedPrice(null);
    } else if (section === "Subtypes") {
      setSelectedSubtype(option);
      setSelectedShape(null);
      setSelectedPrice(null);
    } else if (section === "Shapes") {
      setSelectedShape((prevShape) => (prevShape === option ? null : option));
      setSelectedPrice(null);
    } else if (section === "Prices") {
      setSelectedPrice(option);
    }
  };

  const getOptions = () => {
    switch (activeSection) {
      case "Type":
        return jewelryData.types;
      case "Subtypes":
        return jewelryData.subtypes[selectedType] || [];
      case "Shapes":
        return jewelryData.shapes[selectedType] || [];
      case "Prices":
        return jewelryData.prices;
      default:
        return [];
    }
  };

  const sections = [
    { title: "Type", options: jewelryData.types },
    { title: "Subtypes", options: jewelryData.subtypes[selectedType] || [] },
    { title: "Shapes", options: getOptions() },
    { title: "Prices", options: jewelryData.prices },
  ];

  return (
    <div className="beadssidebar-container">
      <div className="sidenav-beads">
        {sections.map((section) => (
          <SidebarSection
            key={section.title}
            {...section}
            activeSection={activeSection}
            onToggleVisibility={toggleVisibility}
            onSelectOption={onSelectOption}
            selectedShape={selectedShape}
            selectedType={selectedType}
            selectedSubtype={selectedSubtype}
          />
        ))}
      </div>
      {/* <div className="selected-options">
        <p>Selected Type: {selectedType}</p>
        <p>Selected Subtype: {selectedSubtype}</p>
        <p>Selected Shape: {selectedShape}</p>
        <p>Selected Price: {selectedPrice}</p>
      </div> */}
    </div>
  );
};

export default Beadssidebar;

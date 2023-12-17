import { useState, useEffect } from "react";
import "./beadssub.css";
import { useLocation } from "react-router-dom";
import sampleData from "./beadsdata/beadsdata";
import wodenbeads from "./beadsdata/wodenbeads";
import Glassbeads from "./beadsdata/glassbeads";
import Naturalwoodenbeads from "./beadsdata/naturalwoodenbeads";
import Beadssidebar from "../Filterssidebar/beadssidebar";
import Acyrelibeads from "./beadsdata/acrylicdata";
import Beadsmicer from "./beadsdata/beadsmixer";
import Bonebreads from "./beadsdata/bonebeads";
import Cereamicbeads from "./beadsdata/ceramicbeads";
import Coconutbeads from "./beadsdata/coconutbeads";
import CartSidebar from "../CartSideNav"; // Import the CartSidebar component
const Beadssub = () => {
  const location = useLocation();
  const itemName = location.state && location.state.itemName;
  const [datafinal, setDataFinal] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCartSidebarOpen, setCartSidebarOpen] = useState(false);
  const calculateQuantity = () => {
    // Example logic: Quantity is the length of the item's name
    return 1;
  };

  useEffect(() => {
    function beadfilter(itemName) {
      // Use a switch statement for cleaner code
      switch (itemName) {
        case "Natural wooden beads":
          setDataFinal(Naturalwoodenbeads);
          break;
        case "Wooden beads":
          setDataFinal(wodenbeads);
          break;
        case "Glass beads":
          setDataFinal(Glassbeads);
          break;
        case "Acyreli beads":
          setDataFinal(Acyrelibeads);
          break;
        case "Bead smicer":
          setDataFinal(Beadsmicer);
          break;
        case "Bone breads":
          setDataFinal(Bonebreads);
          break;
        case "Cereamic beads":
          setDataFinal(Cereamicbeads);
          break;
        case "coconut beads":
          setDataFinal(Coconutbeads);
          break;
        default:
          setDataFinal(sampleData);
          break;
      }
    }
    beadfilter(itemName);
  }, [itemName]);

  const handleCardClick = (clickedItem) => {
    setSelectedItem(clickedItem);
    setCartSidebarOpen(true);
  };

  return (
    <>
      <h2>{itemName}</h2>
      <div className="beads-subage-maincon">
        <div>
          <Beadssidebar />
        </div>
        <div className="beadsmain-con">
          {datafinal.map((item, index) => (
            <div key={index} onClick={() => handleCardClick(item)}>
              <div className={`box ${selectedItem === item ? "selected" : ""}`}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="beads-image"
                />
                <p className="beadsname">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedItem && (
        <CartSidebar
          isOpen={isCartSidebarOpen}
          onClose={() => {
            setSelectedItem(null);
            setCartSidebarOpen(false);
          }}
          selectedItem={selectedItem.name} // Pass the name property
          quantity={calculateQuantity(selectedItem)}
        />
      )}
    </>
  );
};

export default Beadssub;

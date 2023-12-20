import "./navbar.css";
import { useState } from "react";
import Mainheader from "./headermain";
import Productheader from "./productsheader";
import Navmobile from "./mobileview";

const Navbar = () => {
  const [selectedProductType, setSelectedProductType] = useState("");

  const handleSelectProductType = (productType) => {
    setSelectedProductType(productType);
  };
  return (
    <>
      <div className="desk-head">
        <Mainheader selectedProductType={selectedProductType} />
      </div>
      <div className="mobile-head">
        <Navmobile />
      </div>

      <div className="hrline"></div>
      <div className="desk-product">
        <Productheader onSelectProductType={handleSelectProductType} />
      </div>
    </>
  );
};
export default Navbar;

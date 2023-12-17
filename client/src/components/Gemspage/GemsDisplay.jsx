// GemsDisplay.js

import GemsSearch from "./GemsSort";
import SideNav from "./SideNav";
import GemGrid from "./GemGrid";
import "./Gemsstyle.css";

const GemsDisplay = () => {
  return (
    <div className="gems-display-container">
      <SideNav />
      <div className="gems-display-content">
        <GemsSearch />
        <div className="main-content">
          <GemGrid />
        </div>
      </div>
    </div>
  );
};

export default GemsDisplay;

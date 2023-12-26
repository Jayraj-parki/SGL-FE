// diamondDisplay.js
// Assuming the correct file name
import ProductFullView from "./ProductFullView"; // Assuming the correct file name
import FooterWithImages from "./FooterWithImages"; // Assuming the correct file name
// import "./Style.css";

const ProductDetails = () => {
  return (
    <div className="diamond-display-container">
      <div className="diamond-display-content">
        <ProductFullView />
        <div className="main-content">
          <FooterWithImages />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

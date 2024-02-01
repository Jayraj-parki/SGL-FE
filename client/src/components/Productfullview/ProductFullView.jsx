import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Carousel, Row, Col, Card } from "react-bootstrap";
import AddCart from "../CartButtons";
import CartSidebar from "../CartSideNav";
import Swal from "sweetalert2";
import "./ProductFullView.css";
import zodiacStonesData from "./zodiacStonesData";

const ProductFullView = ({ selectedItem }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [matchingStone, setMatchingStone] = useState(null);
  const [showScrollAnimation, setShowScrollAnimation] = useState(true);

  const handleQuantityChange = (newQuantity) => {
    setQuantity((prevQuantity) => newQuantity);
    updateCalculatedPrice(newQuantity);
  };

  const updateCalculatedPrice = (newQuantity) => {
    if (selectedItem) {
      setCalculatedPrice((prevPrice) => {
        const itemPrice = parseFloat(selectedItem.price);
        let totalPrice;

        if (newQuantity > 0) {
          totalPrice = (newQuantity * itemPrice).toFixed(2);
        } else if (newQuantity < 0) {
          totalPrice = (itemPrice / Math.abs(newQuantity)).toFixed(2);
        } else {
          totalPrice = 0;
        }

        return totalPrice;
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const shouldShowScrollAnimation = scrollPosition < 100;

      setShowScrollAnimation(shouldShowScrollAnimation);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (selectedItem) {
      if (selectedItem.image) {
        setSelectedImage(selectedItem.image);
      } else {
        const stone = zodiacStonesData.find(
          (stone) =>
            stone.name.toLowerCase() === selectedItem.name.toLowerCase()
        );

        if (stone) {
          setMatchingStone(stone);
          setSelectedImage(stone.image);
        } else {
          Swal.fire({
            icon: "warning",
            title: "No Image",
            text:
              "The selected item is not a zodiac stone and has no image.",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      }

      const parsedPrice = parseFloat(selectedItem.price);
      if (!isNaN(parsedPrice)) {
        selectedItem.price = parsedPrice;
      }

      updateCalculatedPrice(quantity);
    }
  }, [selectedItem, quantity]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleAddToCart = async () => {
    try {
      if (!selectedItem) {
        console.error("Error: No selected item");
        return;
      }
  
      const userId = sessionStorage.getItem("userData") ? JSON.parse(sessionStorage.getItem("userData"))._id : null;
  
      if (!userId) {
        console.error("Error: No userId found in session storage");
        return;
      }
  
      console.log("Adding to cart:", selectedItem);
  
      const response = await fetch(`http://localhost:4000/addToCart/${selectedItem._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          itemId: selectedItem._id,
          quantity: quantity,
        }),
      });
  
      console.log(response.status);  // Log the HTTP status code
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unknown error");
      }
  
      // Assuming that you receive some data from the server after adding to the cart
      const responseData = await response.json();
  
      // Display a success message if the item is added to the cart
      Swal.fire({
        icon: "success",
        title: "Added to Cart!",
        text: `${quantity} ${selectedItem.name}(s) added to your cart. Total Price: $${calculatedPrice}`,
        showConfirmButton: false,
        timer: 2000,
      });
  
      // Open the cart sidebar
      setCartOpen(true);
    } catch (error) {
      console.error("Error adding to cart:", error);
  
      // Display an error message if there's an issue adding to the cart
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Unable to add item to cart. Please try again.",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };
  

  return (
    <div className="card" id="ProductViewContainer">
      <Row className="mb-4">
        <Col md={5} xs={12}>
          <Carousel interval={null} className="product-carousel">
            <Carousel.Item>
              {selectedItem ? (
                <>
                  {selectedItem.image ? (
                    <img
                      className="d-block w-100"
                      src={
                        selectedItem.image.startsWith("/")
                          ? `data:image/png;base64,${selectedItem.image}`
                          : selectedItem.image
                      }
                      alt={`Thumbnail`}
                      onClick={() => handleImageClick(selectedItem.image)}
                    />
                  ) : (
                    <>
                      {matchingStone ? (
                        <img
                          className="d-block w-100"
                          src={matchingStone.image}
                          alt={`Thumbnail`}
                          onClick={() => handleImageClick(matchingStone.image)}
                        />
                      ) : (
                        <p>No image available</p>
                      )}
                    </>
                  )}
                </>
              ) : (
                <p>No item selected</p>
              )}
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6} xs={12}>
          {selectedItem && (
            <Card className="product-details-card">
              <Card.Body>
                <div>
                  <div className="product-detail">
                    <span className="detail-label">Name</span>
                    <span className="detail-value" style={{paddingLeft:"25%"}}>: {selectedItem.name}</span>
                  </div>
                  <div className="product-detail">
                    <span className="detail-label">Price</span>
                    <span className="detail-value" style={{paddingLeft:"26%"}}>: ${calculatedPrice}</span>
                  </div>
                  <div className="product-detail">
                    <span className="detail-label">Dimestions</span>
                    <span className="detail-value" style={{paddingLeft:"18.4%"}}>: {selectedItem.dimenensions}</span>
                  </div>
                  <div className="product-detail">
                    <span className="detail-label">Weight</span>
                    <span className="detail-value" style={{paddingLeft:"23.5%"}}>: {selectedItem.weight}</span>
                  </div>
                  <div className="product-detail">
                    <span className="detail-label">Colour</span>
                    <span className="detail-value" style={{paddingLeft:"24%"}}>: {selectedItem.colour}</span>
                  </div>
                  <div className="product-detail">
                    <span className="detail-label">Subtype</span>
                    <span className="detail-value" style={{paddingLeft:"22%"}}>: {selectedItem.subtype}</span>
                  </div>
                  <div className="product-detail">
                    <span className="detail-label">Units</span>
                    <span className="detail-value" style={{paddingLeft:"26%"}}>: {selectedItem.units}</span>
                  </div>
                  <div className="product-detail">
                    <span className="detail-label">Value</span>
                    <span className="detail-value" style={{paddingLeft:"25.5%"}}>: {selectedItem.value}</span>
                  </div>
                  <div className="product-detail">
                    <span className="detail-label">Shape</span>
                    <span className="detail-value" style={{paddingLeft:"24%"}}>: {selectedItem.shape}</span>
                  </div>
                  <div className="product-detail">
                    <span className="detail-label">Trnasperency</span>
                    <span className="detail-value" style={{paddingLeft:"15%"}}>: {selectedItem.transparency}</span>
                  </div>
                  <div className="product-detail">
                    <span className="detail-label">Hardness</span>
                    <span className="detail-value" style={{paddingLeft:"20%"}}>: {selectedItem.hardness}</span>
                  </div>
                  <div className="product-detail">
                    <span className="detail-label">Microscopic Examination</span>
                    <span className="detail-value" style={{paddingLeft:"0.5%"}}>: {selectedItem.microscopicexamination}</span>
                  </div>
                  
                </div>

                {/* Add your description here */}
                <div
                  className={`add-cart-wrapper ${
                    showScrollAnimation ? "scroll-animation" : ""
                  }`}
                  style={{ overflowX: "auto", minWidth: "150px" }}
                >
                  <AddCart
                    onAddToCart={handleAddToCart}
                    onQuantityChange={handleQuantityChange}
                    buttonStyle={{
                      backgroundColor: "#FFA500",
                      color: "#FFFFFF",
                      padding: "0",
                      borderRadius: "0.25rem",
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                      width: "50%",
                    }}
                    badgeStyle={{
                      backgroundColor: "#4CAF50",
                      fontSize: "0.8rem",
                    }}
                  />
                </div>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
      {isCartOpen && (
        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setCartOpen(false)}
          selectedItem={selectedItem.name}
          quantity={quantity}
          itemData={selectedItem}
        />
      )}
    </div>
  );
};

ProductFullView.propTypes = {
  selectedItem: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    // Add more properties as needed
  }),
};

export default ProductFullView;

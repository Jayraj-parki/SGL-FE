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

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    updateCalculatedPrice(newQuantity);
  };

  const updateCalculatedPrice = (newQuantity) => {
    if (selectedItem) {
      const itemPrice = parseFloat(selectedItem.price);

      // Calculate total price based on quantity
      let totalPrice;
      if (newQuantity > 0) {
        totalPrice = (newQuantity * itemPrice).toFixed(2);
      } else if (newQuantity < 0) {
        // Divide the price by the absolute quantity if it's less than 0
        totalPrice = (itemPrice / Math.abs(newQuantity)).toFixed(2);
      } else {
        // Quantity is 0
        totalPrice = 0;
      }

      setCalculatedPrice(totalPrice);
    }
  };

  useEffect(() => {
    if (selectedItem) {
      if (selectedItem.image) {
        setSelectedImage(selectedItem.image);
      } else {
        // Find the zodiac stone in the imported data (case-insensitive)
        const stone = zodiacStonesData.find(
          (stone) =>
            stone.name.toLowerCase() === selectedItem.name.toLowerCase()
        );

        if (stone) {
          setMatchingStone(stone); // Set matchingStone if found
          setSelectedImage(stone.image);
        } else {
          // Display a warning message if the item is not a zodiac stone and has no image
          Swal.fire({
            icon: "warning",
            title: "No Image",
            text: "The selected item is not a zodiac stone and has no image.",
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

  const handleAddToCart = () => {
    if (!selectedItem) {
      // Display an error message if there is no selected item
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Unable to add item to cart. Please select a valid item.",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

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
                    <span className="detail-label">Name:</span>
                    <span className="detail-value">{selectedItem.name}</span>
                  </div>
                  <div className="product-detail">
                    <span className="detail-label">Price:</span>
                    <span className="detail-value">${calculatedPrice}</span>
                  </div>
                </div>

                {/* Add your description here */}

                <AddCart
                  onAddToCart={handleAddToCart}
                  onQuantityChange={handleQuantityChange}
                  buttonStyle={{
                    backgroundColor: "#FFA500",
                    color: "#FFFFFF",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.25rem",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    width: "100%",
                  }}
                  badgeStyle={{
                    backgroundColor: "#4CAF50",
                    fontSize: "0.8rem",
                  }}
                />
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

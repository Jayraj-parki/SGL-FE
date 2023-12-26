import { useState } from "react";
import { Carousel, Button, Row, Col } from "react-bootstrap";
import AddCart from "../../CartButtons";
import CartSidebar from "../../CartSideNav"; // Import the CartSidebar component
import Swal from "sweetalert2";

const ProductFullView = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    RoundDiamondData[0].imageUrl
  );

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const selectedDiamond = RoundDiamondData.find(
    (diamond) => diamond.imageUrl === selectedImage
  );

  const handleAddToCart = (quantity) => {
    // Add logic to update cart state or perform other actions
    // For example, you might want to update the cart items in a global state
    // or make an API request to add the item to the server-side cart.

    // Display a SweetAlert success message
    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: `${quantity} ${selectedDiamond.description}(s) added to your cart.`,
      showConfirmButton: false,
      timer: 2000,
    });

    // Open the cart sidebar
    setCartOpen(true);
  };

  const renderCarousel = () => (
    <div>
      <p className="home-diamonds-round">
        <span className="span">
          Home / Diamonds / {selectedDiamond?.description}
        </span>
      </p>
      <Carousel>
        {RoundDiamondData.map((diamond, index) => (
          <Carousel.Item key={index}>
            <img
              className={`d-block w-75 mx-auto ${
                selectedImage === diamond.imageUrl ? "focused" : ""
              }`}
              src={diamond.imageUrl}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleImageClick(diamond.imageUrl)}
              style={{ cursor: "pointer" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );

  const renderTinyImages = () => (
    <Row className="mt-3">
      {RoundDiamondData.slice(0, 3).map((diamond, index) => (
        <Col xs={4} key={index}>
          <img
            className={`d-block w-100 tiny-image ${
              selectedImage === diamond.imageUrl ? "focused" : ""
            }`}
            src={diamond}
            alt={`Tiny Thumbnail ${index + 1}`}
            onClick={() => handleImageClick(diamond.imageUrl)}
            style={{ cursor: "pointer" }}
          />
        </Col>
      ))}
    </Row>
  );

  return (
    <div className="container mt-5">
      <Row>
        <Col md={6}>
          <Row className="mb-3">
            <Col md={12}>{renderCarousel()}</Col>
          </Row>
          <Row>{renderTinyImages()}</Row>
        </Col>

        <Col md={6}>
          {selectedDiamond && (
            <div className="p-3 bg-light border position-relative d-flex flex-column h-100">
              <div className="text-wrapper-15 text-orange mb-3">
                <strong>{selectedDiamond.description}</strong>
              </div>
              <div className="text-wrapper-16 text-orange mb-3">
                <strong>Price: {selectedDiamond.price}</strong>
              </div>
              <div className="text-wrapper-17 text-orange mb-3">
                <strong>Cut: {selectedDiamond.cut}</strong>
              </div>
              <div className="text-wrapper-18 text-orange mb-3">
                <strong>Carat: {selectedDiamond.carat}</strong>
              </div>
              <div className="text-wrapper-19 text-orange mb-3">
                <strong>Fluorescence: {selectedDiamond.fluorescence}</strong>
              </div>
              <div className="text-wrapper-20 text-orange mb-3">
                <strong>Shape: {selectedDiamond.shape}</strong>
              </div>

              <div className="mt-auto">
                <AddCart
                  onAddToCart={handleAddToCart}
                  buttonStyle={{
                    backgroundColor: "#FFA500",
                    color: "#FFFFFF",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.25rem",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  // Customize the number badge style
                  badgeStyle={{
                    backgroundColor: "#4CAF50",
                    fontSize: "0.8rem",
                  }}
                />
                {/* Display the cart sidebar if it's open */}
                {isCartOpen && (
                  <CartSidebar
                    isOpen={isCartOpen}
                    onClose={() => setCartOpen(false)}
                    selectedItem={selectedDiamond.description}
                    quantity={1}
                  />
                )}
              </div>
            </div>
          )}
        </Col>
      </Row>

      {/* Previous and Next Buttons */}
      <Row className="mt-3">
        <Col xs={6} className="text-end">
          <Button
            variant="secondary"
            onClick={() => handleImageClick(RoundDiamondData[0].imageUrl)}
            style={{ zIndex: "" }}
          >
            Previous
          </Button>
        </Col>
        <Col xs={6} className="text-start">
          <Button
            variant="secondary"
            onClick={() =>
              handleImageClick(
                RoundDiamondData[RoundDiamondData.length - 1].imageUrl
              )
            }
            style={{ zIndex: "1" }}
          >
            Next
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductFullView;

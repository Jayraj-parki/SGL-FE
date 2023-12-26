import React, { useState, useEffect } from "react";
import { Carousel, Row, Col, Card } from "react-bootstrap";
import AddCart from "../../CartButtons";
import CartSidebar from "../../CartSideNav";
import Swal from "sweetalert2";
import "./ProductFullView.css"; // Import a CSS file for additional styles

const ProductFullView = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [coralData, setCoralData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://sgl-be.onrender.com/getcorals");
        const data = await response.json();
        setCoralData(data);
        setSelectedImage(data[0]?.image || null);
      } catch (error) {
        console.error("Error fetching coral data:", error);
      }
    };

    fetchData();
  }, []); // Run this effect only once on mount

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const selectedCoral = coralData.find(
    (coral) => coral.image === selectedImage
  );

  const handleAddToCart = (quantity) => {
    // Display a SweetAlert success message
    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: `${quantity} ${selectedCoral.name}(s) added to your cart.`,
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
            {coralData.map((coral, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={`data:image/png;base64,${coral.image}`}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleImageClick(coral.image)}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        <Col md={6} xs={12}>
          {selectedCoral && (
            <Card className="product-details-card">
              <Card.Body
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "auto", // Add this line
                }}
              >
                <div>
                  <Card.Title>{selectedCoral.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    ${selectedCoral.price.toFixed(2)}
                  </Card.Subtitle>
                  <Card.Text>{selectedCoral.description}</Card.Text>
                </div>

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
                    width: "100%", // Set the width to 100%
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
      <Row className="mt-3">
        {coralData.slice(0, 4).map((coral, index) => (
          <Col md={2} xs={6} key={index} className="mb-3">
            <img
              className={`d-block w-100 thumbnail-image ${
                selectedImage === coral.image ? "focused" : ""
              }`}
              src={`data:image/png;base64,${coral.image}`}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleImageClick(coral.image)}
            />
          </Col>
        ))}
      </Row>
      {isCartOpen && (
        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setCartOpen(false)}
          selectedItem={selectedCoral.name}
          quantity={1}
          itemData={selectedCoral}
        />
      )}
    </div>
  );
};

export default ProductFullView;

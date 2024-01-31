// import { useEffect, useState } from "react";
// import "./CartButton.css";
// import PropTypes from "prop-types";
// import Swal from "sweetalert2";

// const AddCart = ({ onAddToCart, onQuantityChange,isCartOpen }) => {
//   console.log(isCartOpen)
//   const [userData, setUserData] = useState(null);
//   useEffect(() => {
//     const storedUserData = sessionStorage.getItem("userData");
//     if (storedUserData) {
//       setUserData(JSON.parse(storedUserData));
//     }
//   }, []);
//   const addToWishlist = () => {
//     // Add your logic for adding to the wishlist here
//     Swal.fire({
//       icon: "success",
//       title: "Added to Wishlist!",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   const [cartQuantity, setCartQuantity] = useState(1);

//   const incrementCart = () => {
//     setCartQuantity(cartQuantity + 1);
//     animateButton();
//     onQuantityChange(cartQuantity + 1); 
//   };

//   const decrementCart = () => {
//     if (cartQuantity > 0) {
//       setCartQuantity(cartQuantity - 1);
//       animateButton();
//       onQuantityChange(cartQuantity - 1); 
//     }
//   };

//   // const handleAddToCart = () => {
   
//   //   onAddToCart(cartQuantity);
//   //   Swal.fire({
//   //     icon: "success",
//   //     title: "Added to Cart!",
//   //     showConfirmButton: false,
//   //     timer: 1500,
//   //   });
//   // };

//   const handleAddToCart = () => {
//     // Check if user data is available in session storage
//     if (userData) {
//       onAddToCart(cartQuantity);
//       Swal.fire({
//         icon: "success",
//         title: "Added to Cart!",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     } else {
//       // Handle the case where user is not found in session storage
//       Swal.fire({
//         icon: "error",
//         title: "Login First",
//         text: "Unable to add item to cart. Please login first ",
//       });

//       // Redirect to the login page
//       window.location.href = "/login";
//     }
//   };


//   const animateButton = () => {
   
//     const buttonElement = document.getElementById("add-to-cart-button");

//     if (buttonElement) {
//       buttonElement.style.backgroundColor = "#FF6347"; 
//       setTimeout(() => {
//         buttonElement.style.backgroundColor = "#FFA500"; 
//       }, 300); 
//     }
//   };

//   const buttonStyle = {
//     backgroundColor: "#FFA500", // Orange
//     color: "#FFFFFF", // Text color
//     padding: "0.5rem 1rem", // Improved padding for better accessibility
//     borderRadius: "0.25rem", // Add border radius for rounded corners
//     border: "none", // Remove border
//     marginRight: "0.5rem", // Adjust as needed
//     cursor: "pointer", // Change cursor on hover
//     fontSize: "1rem", // Font size for better readability
//     // transition: "background-color 0.3s, transform 0.3s", // Add smooth transitions
//     display: "inline-flex", // Ensures constant button size regardless of content
//     alignItems: "center", // Center content vertically
//   };

//   const wishlistButtonStyle = {
//     backgroundColor: "#FFD700", // Gold
//     color: "#FFFFFF", // Text color
//     padding: "0.5rem 1rem", // Improved padding for better accessibility
//     borderRadius: "0.25rem", // Add border radius for rounded corners
//     border: "none", // Remove border
//     marginRight: "0.5rem", // Adjust as needed
//     cursor: "pointer", // Change cursor on hover
//     fontSize: "1rem", // Font size for better readability
//     transition: "background-color 0.3s, transform 0.3s", // Add smooth transitions
//     display: "inline-flex", // Ensures constant button size regardless of content
//     alignItems: "center", // Center content vertically
//   };

//   // Add hover effects
//   buttonStyle[":hover"] = {
//     backgroundColor: "#FF8000", // Lighter Orange on hover
//     transform: "scale(1.05)", // Scale up on hover
//   };

//   wishlistButtonStyle[":hover"] = {
//     backgroundColor: "#FFEC8B", // Lighter Gold on hover
//     transform: "scale(1.05)", // Scale up on hover
//   };

//   return (
//     <div className="container mt-3">
//       <div
//         className="p-3 add-cart-container"
//         style={{
//           backgroundColor: "#FFC777",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           padding: "1rem",
//         }}
//       >
//         <div className="text-wrapper-40 m-1 d-flex justify-content-between align-items-center">
//           <button
//             style={{
//               ...wishlistButtonStyle,
//               margin: "0.2rem 0",
//               padding: "0.3rem 0.5rem",
//               fontSize: "0.9rem",
//             }}
//             onClick={addToWishlist}
//           >
//             <i className="fas fa-heart"></i> Wishlist
//           </button>
//           <button
//             style={{
//               ...buttonStyle,
//               margin: "0.2rem 0",
//               padding: "0.3rem 0.5rem",
//               fontSize: "0.9rem",
//             }}
//             onClick={handleAddToCart}
//           >
//             <i className="fas fa-cart-plus"></i> Add{" "}
//             <span
//               className="badge bg-secondary mx-1"
//               style={{ fontSize: "0.8rem" }}
//             >
//               {cartQuantity}
//             </span>
//           </button>
//           <button
//             style={{
//               ...buttonStyle,
//               margin: "0.2rem 0",
//               padding: "0.3rem 0.5rem",
//               fontSize: "0.9rem",
//             }}
//             onClick={incrementCart}
//           >
//             <i className="fas fa-plus"></i>
//           </button>
//           <button
//             style={{
//               ...buttonStyle,
//               margin: "0.2rem 0",
//               padding: "0.3rem 0.5rem",
//               fontSize: "0.9rem",
//             }}
//             onClick={decrementCart}
//           >
//             <i className="fas fa-minus"></i>
//           </button>
//         </div>
//       </div>
//       <hr />
//     </div>
//   );
// };


// AddCart.propTypes = {
//   onAddToCart: PropTypes.func.isRequired,
//   onQuantityChange: PropTypes.func.isRequired,
//   isCartOpen:PropTypes.func.isRequired
// };

// export default AddCart;



// import { useEffect, useState } from "react";
// import "./CartButton.css";
// import PropTypes from "prop-types";
// import Swal from "sweetalert2";

// const AddCart = ({ onAddToCart, onQuantityChange, isCartOpen }) => {
//   console.log(isCartOpen);
//   const [userData, setUserData] = useState(null);
//   useEffect(() => {
//     const storedUserData = sessionStorage.getItem("userData");
//     if (storedUserData) {
//       setUserData(JSON.parse(storedUserData));
//     }
//   }, []);

//   const addToWishlist = () => {
//     Swal.fire({
//       icon: "success",
//       title: "Added to Wishlist!",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   const [cartQuantity, setCartQuantity] = useState(1);

//   const incrementCart = () => {
//     setCartQuantity(cartQuantity + 1);
//     animateButton();
//     onQuantityChange(cartQuantity + 1);
//   };

//   const decrementCart = () => {
//     if (cartQuantity > 0) {
//       setCartQuantity(cartQuantity - 1);
//       animateButton();
//       onQuantityChange(cartQuantity - 1);
//     }
//   };

//   const handleAddToCart = async () => {
//     if (userData) {
//       const selectedItem = JSON.parse(sessionStorage.getItem("selectedItem"));

//       if (selectedItem) {
//         const requestData = {
//           itemId: selectedItem.id, // Adjust the key based on your API requirements
//           quantity: cartQuantity,
//           // Add any other required data from the selectedItem
//         };

//         try {
//           const response = await fetch(
//             "https://sgl-be.onrender.com/addToCart",
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 // Add any other required headers
//               },
//               body: JSON.stringify(requestData),
//             }
//           );

//           if (response.ok) {
//             Swal.fire({
//               icon: "success",
//               title: "Added to Cart!",
//               showConfirmButton: false,
//               timer: 1500,
//             });
//           } else {
//             Swal.fire({
//               icon: "error",
//               title: "Error Adding to Cart",
//               text:
//                 "There was an issue adding the item to the cart. Please try again later.",
//             });
//           }
//         } catch (error) {
//           console.error("Error adding to cart:", error);
//           Swal.fire({
//             icon: "error",
//             title: "Error Adding to Cart",
//             text:
//               "There was an unexpected error. Please try again later.",
//           });
//         }
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Item Not Found",
//           text: "Unable to add item to cart. Please select an item first.",
//         });
//       }
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Login First",
//         text: "Unable to add item to cart. Please login first.",
//       });
//       window.location.href = "/login";
//     }
//   };

//   const animateButton = () => {
//     const buttonElement = document.getElementById("add-to-cart-button");

//     if (buttonElement) {
//       buttonElement.style.backgroundColor = "#FF6347";
//       setTimeout(() => {
//         buttonElement.style.backgroundColor = "#FFA500";
//       }, 300);
//     }
//   };

//   const buttonStyle = {
//     backgroundColor: "#FFA500",
//     color: "#FFFFFF",
//     padding: "0.5rem 1rem",
//     borderRadius: "0.25rem",
//     border: "none",
//     marginRight: "0.5rem",
//     cursor: "pointer",
//     fontSize: "1rem",
//     display: "inline-flex",
//     alignItems: "center",
//   };

//   const wishlistButtonStyle = {
//     backgroundColor: "#FFD700",
//     color: "#FFFFFF",
//     padding: "0.5rem 1rem",
//     borderRadius: "0.25rem",
//     border: "none",
//     marginRight: "0.5rem",
//     cursor: "pointer",
//     fontSize: "1rem",
//     transition: "background-color 0.3s, transform 0.3s",
//     display: "inline-flex",
//     alignItems: "center",
//   };

//   wishlistButtonStyle[":hover"] = {
//     backgroundColor: "#FFEC8B",
//     transform: "scale(1.05)",
//   };

//   buttonStyle[":hover"] = {
//     backgroundColor: "#FF8000",
//     transform: "scale(1.05)",
//   };

//   return (
//     <div className="container mt-3">
//       <div
//         className="p-3 add-cart-container"
//         style={{
//           backgroundColor: "#FFC777",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           padding: "1rem",
//         }}
//       >
//         <div className="text-wrapper-40 m-1 d-flex justify-content-between align-items-center">
//           <button
//             style={{
//               ...wishlistButtonStyle,
//               margin: "0.2rem 0",
//               padding: "0.3rem 0.5rem",
//               fontSize: "0.9rem",
//             }}
//             onClick={addToWishlist}
//           >
//             <i className="fas fa-heart"></i> Wishlist
//           </button>
//           <button
//             style={{
//               ...buttonStyle,
//               margin: "0.2rem 0",
//               padding: "0.3rem 0.5rem",
//               fontSize: "0.9rem",
//             }}
//             onClick={handleAddToCart}
//           >
//             <i className="fas fa-cart-plus"></i> Add{" "}
//             <span
//               className="badge bg-secondary mx-1"
//               style={{ fontSize: "0.8rem" }}
//             >
//               {cartQuantity}
//             </span>
//           </button>
//           <button
//             style={{
//               ...buttonStyle,
//               margin: "0.2rem 0",
//               padding: "0.3rem 0.5rem",
//               fontSize: "0.9rem",
//             }}
//             onClick={incrementCart}
//           >
//             <i className="fas fa-plus"></i>
//           </button>
//           <button
//             style={{
//               ...buttonStyle,
//               margin: "0.2rem 0",
//               padding: "0.3rem 0.5rem",
//               fontSize: "0.9rem",
//             }}
//             onClick={decrementCart}
//           >
//             <i className="fas fa-minus"></i>
//           </button>
//         </div>
//       </div>
//       <hr />
//     </div>
//   );
// };

// AddCart.propTypes = {
//   onAddToCart: PropTypes.func.isRequired,
//   onQuantityChange: PropTypes.func.isRequired,
//   isCartOpen: PropTypes.func.isRequired,
// };

// export default AddCart;


import { useEffect, useState } from "react";
import "./CartButton.css";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const AddCart = ({ onAddToCart, onQuantityChange }) => {
  // console.log(isCartOpen);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const addToWishlist = () => {
    Swal.fire({
      icon: "success",
      title: "Added to Wishlist!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const [cartQuantity, setCartQuantity] = useState(1);

  const incrementCart = () => {
    setCartQuantity(cartQuantity + 1);
    animateButton();
    onQuantityChange(cartQuantity + 1);
  };

  const decrementCart = () => {
    if (cartQuantity > 0) {
      setCartQuantity(cartQuantity - 1);
      animateButton();
      onQuantityChange(cartQuantity - 1);
    }
  };

  // const handleAddToCart = async () => {
  //   if (userData) {
  //     const selectedItem = JSON.parse(sessionStorage.getItem("selectedItem"));
  //     const seletedeid=selectedItem._id
  //     console.log(seletedeid,"selectedid")

  //     if (selectedItem) {
  //       const requestData = {
  //         id: selectedItem._id,
  //         quantity: cartQuantity,
  //         image: selectedItem.image,
  //         name: selectedItem.name,
  //         price: selectedItem.price,
  //         weight: selectedItem.weight,
  //         colour: selectedItem.colour,
  //         units: selectedItem.units,
  //         value: selectedItem.value,
  //         shape: selectedItem.shape,
  //         dimensions: selectedItem.dimenensions,
  //         transparency: selectedItem.transparency,
  //         hardness: selectedItem.hardness,
  //         microscopicexamination: selectedItem.microscopicexamination,
  //         size: selectedItem.size || 0,
  //         clarity: selectedItem.clarity || "No Data",
  //         subtype: selectedItem.subtype || "No Data",
  //       };

  //       try {
  //         console.log(requestData,"requested data")
  //         const response = await fetch(
  //           "https://sgl-be.onrender.com/addToCart",
  //           {
  //             method: "POST",
  //             body: JSON.stringify(requestData),
  //           }
  //         );

  //         if (response.ok) {
  //           onAddToCart(cartQuantity);
  //           Swal.fire({
  //             icon: "success",
  //             title: "Added to Cart!",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         } else {
  //           Swal.fire({
  //             icon: "error",
  //             title: "Error Adding to Cart",
  //             text:
  //               "There was an issue adding the item to the cart. Please try again later.",
  //           });
  //         }
  //       } catch (error) {
  //         console.error("Error adding to cart:", error);
  //         Swal.fire({
  //           icon: "error",
  //           title: "Error Adding to Cart",
  //           text:
  //             "There was an unexpected error. Please try again later.",
  //         });
  //       }
  //     } else {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Item Not Found",
  //         text: "Unable to add item to cart. Please select an item first.",
  //       });
  //     }
  //   } else {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Login First",
  //       text: "Unable to add item to cart. Please login first.",
  //     });
  //     window.location.href = "/login";
  //   }
  // };

  // const handleAddToCart = async () => {
  //   if (userData) {
  //     const selectedItem = JSON.parse(sessionStorage.getItem("selectedItem"));
  //     const selectedId = selectedItem._id;
  //     console.log(selectedId, "selectedId");
  
  //     if (selectedItem) {
  //       setLoading(true);
  //       const formData = new FormData();
  //       formData.append("id", selectedId);
  //       formData.append("quantity", cartQuantity);
  
  //       // Convert base64 image data to Blob
  //       const imageBlob = base64toBlob(selectedItem.image);
  
  //       // Create a File object from the Blob
  //       const imageFile = new File([imageBlob], "selectedItemImage.jpg", { type: "image/jpeg" });
  
  //       formData.append("image", imageFile);
  //       formData.append("name", selectedItem.name);
  //       formData.append("price", selectedItem.price);
  //       formData.append("weight", selectedItem.weight);
  //       formData.append("colour", selectedItem.colour);
  //       formData.append("units", selectedItem.units);
  //       formData.append("value", selectedItem.value);
  //       formData.append("shape", selectedItem.shape);
  //       formData.append("dimensions", selectedItem.dimenensions);
  //       formData.append("transparency", selectedItem.transparency);
  //       formData.append("hardness", selectedItem.hardness);
  //       formData.append("microscopicexamination", selectedItem.microscopicexamination);
  //       formData.append("size", selectedItem.size || 0);
  //       formData.append("clarity", selectedItem.clarity || "No Data");
  //       formData.append("subtype", selectedItem.subtype || "No Data");
  
  //       try {
  //         console.log(formData, "formData");
  //         const response = await fetch("https://sgl-be.onrender.com/addToCart", {
  //           method: "POST",
  //           body: formData,
  //         });
  
  //         if (response.ok) {
  //           onAddToCart(cartQuantity);
  //           Swal.fire({
  //             icon: "success",
  //             title: "Added to Cart!",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         } else {
  //           Swal.fire({
  //             icon: "error",
  //             title: "Error Adding to Cart",
  //             text: "There was an issue adding the item to the cart. Please try again later.",
  //           });
  //         }
  //       } catch (error) {
  //         console.error("Error adding to cart:", error);
  //         Swal.fire({
  //           icon: "error",
  //           title: "Error Adding to Cart",
  //           text: "There was an unexpected error. Please try again later.",
  //         });
  //       }finally {
  //         setLoading(false); // Set loading state back to false after the request is completed
  //       }
  //     } else {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Item Not Found",
  //         text: "Unable to add item to cart. Please select an item first.",
  //       });
  //     }
  //   } else {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Login First",
  //       text: "Unable to add item to cart. Please login first.",
  //     });
  //     window.location.href = "/login";
  //   }
  // };
  const handleAddToCart = async () => {
    if (userData) {
      const selectedItem = JSON.parse(sessionStorage.getItem("selectedItem"));
      const selectedId = selectedItem._id;
  
      if (selectedItem) {
        setLoading(true);
        const formData = new FormData();
        formData.append("id", selectedId);
        formData.append("quantity", cartQuantity);
  
        // Convert base64 image data to Blob
        // const imageBlob = base64toBlob(selectedItem.image);
        const imageBlob = base64toBlob(selectedItem.image);
  
        // Create a File object from the Blob
        // const imageFile = new File([imageBlob], "selectedItemImage.jpg", { type: "image/jpeg" });
        // console.log(imageFile)
        const imageFile = new File([imageBlob], "selectedItemImage.jpg", { type: "image/jpeg" });

    formData.append("image", imageFile);
  
        formData.append("image", imageFile);
        formData.append("name", selectedItem.name);
        formData.append("price", selectedItem.price);
        formData.append("weight", selectedItem.weight);
        formData.append("colour", selectedItem.colour);
        formData.append("units", selectedItem.units);
        formData.append("value", selectedItem.value);
        formData.append("shape", selectedItem.shape);
        formData.append("dimensions", selectedItem.dimenensions); // Fix the spelling here
        formData.append("transparency", selectedItem.transparency);
        formData.append("hardness", selectedItem.hardness);
        formData.append("microscopicexamination", selectedItem.microscopicexamination);
        formData.append("size", selectedItem.size || 0);
        formData.append("clarity", selectedItem.clarity || "No Data");
        formData.append("subtype", selectedItem.subtype || "No Data");
  
        try {
          const response = await fetch("https://sgl-be.onrender.com/addToCart", {
            method: "POST",
            body: formData,
          });
  
          if (response.ok) {
            onAddToCart(cartQuantity);
            Swal.fire({
              icon: "success",
              title: "Added to Cart!",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Error Adding to Cart",
              text: "There was an issue adding the item to the cart. Please try again later.",
            });
          }
        } catch (error) {
          console.error("Error adding to cart:", error);
          Swal.fire({
            icon: "error",
            title: "Error Adding to Cart",
            text: "There was an unexpected error. Please try again later.",
          });
        } finally {
          setLoading(false);
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Item Not Found",
          text: "Unable to add item to cart. Please select an item first.",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Login First",
        text: "Unable to add item to cart. Please login first.",
      });
      window.location.href = "/login";
    }
  };
  
  // Function to convert base64 to Blob
  // const base64toBlob = (base64Data) => {
  //   const byteCharacters = atob(base64Data);
  //   const byteArrays = [];
  
  //   for (let offset = 0; offset < byteCharacters.length; offset += 512) {
  //     const slice = byteCharacters.slice(offset, offset + 512);
  
  //     const byteNumbers = new Array(slice.length);
  //     for (let i = 0; i < slice.length; i++) {
  //       byteNumbers[i] = slice.charCodeAt(i);
  //     }
  
  //     const byteArray = new Uint8Array(byteNumbers);
  //     byteArrays.push(byteArray);
  //   }
  
  //   return new Blob(byteArrays, { type: "image/jpeg" });
  // };

  const base64toBlob = (base64Data) => {
    const byteCharacters = atob(base64Data);
    const byteArray = new Uint8Array(byteCharacters.length);
  
    for (let i = 0; i < byteCharacters.length; i++) {
      byteArray[i] = byteCharacters.charCodeAt(i);
    }
  
    return new Blob([byteArray], { type: "image/jpeg" });
  };
  
//   const base64toBlob = (base64Data) => {
//     const byteCharacters = atob(base64Data);
//     const byteArrays = [];
  
//     for (let offset = 0; offset < byteCharacters.length; offset += 512) {
//       const slice = byteCharacters.slice(offset, offset + 512);
  
//       const byteNumbers = new Array(slice.length);
//       for (let i = 0; i < slice.length; i++) {
//         byteNumbers[i] = slice.charCodeAt(i);
//       }
  
//       const byteArray = new Uint8Array(byteNumbers);
//       byteArrays.push(byteArray);
//     }
  
//     return new Blob(byteArrays, { type: "image/jpeg" });
//   };
//   const handleAddToCart = async () => {
//     if (userData) {
//       const selectedItem = JSON.parse(sessionStorage.getItem("selectedItem"));
  
//       if (selectedItem) {
//         const formData = new FormData();
//         const imageBlob = base64toBlob(selectedItem.image);
//         const file = new File([imageBlob], "selectedItemImage.jpg", { type: "image/jpeg" });
// formData.append("image", file);
//         console.log(formData,selectedItem,"jnldsnlk")  
//         formData.append("id", selectedItem._id);
// formData.append("quantity", cartQuantity);
// // formData.append("image", selectedItem.file);
// formData.append("name", selectedItem.name);
// formData.append("price", selectedItem.price);
// formData.append("weight", selectedItem.weight);
// formData.append("colour", selectedItem.colour);
// formData.append("units", selectedItem.units);
// formData.append("value", selectedItem.value);
// formData.append("shape", selectedItem.shape);
// formData.append("dimensions", selectedItem.dimenensions); // Check spelling
// formData.append("transparency", selectedItem.transparency);
// formData.append("hardness", selectedItem.hardness);
// formData.append("microscopicexamination", selectedItem.microscopicexamination);
// formData.append("size", selectedItem.size || 0);
// formData.append("clarity", selectedItem.clarity || "No Data");
// formData.append("subtype", selectedItem.subtype || "No Data");

  
//         try {
//           console.log(formData)
//           const response = await fetch("https://sgl-be.onrender.com/addToCart", {
//             method: "POST",
//             body: formData,
//           });
//           console.log(formData,"Fromdata")
  
//           if (response.ok) {
//             onAddToCart(cartQuantity);
//             Swal.fire({
//               icon: "success",
//               title: "Added to Cart!",
//               showConfirmButton: false,
//               timer: 1500,
//             });
//           } else {
//             Swal.fire({
//               icon: "error",
//               title: "Error Adding to Cart",
//               text:
//                 "There was an issue adding the item to the cart. Please try again later.",
//             });
//           }
//         } catch (error) {
//           console.error("Error adding to cart:", error);
//           Swal.fire({
//             icon: "error",
//             title: "Error Adding to Cart",
//             text: "There was an unexpected error. Please try again later.",
//           });
//         }
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Item Not Found",
//           text: "Unable to add item to cart. Please select an item first.",
//         });
//       }
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Login First",
//         text: "Unable to add item to cart. Please login first.",
//       });
//       window.location.href = "/login";
//     }
//   };
  

  const animateButton = () => {
    const buttonElement = document.getElementById("add-to-cart-button");

    if (buttonElement) {
      buttonElement.style.backgroundColor = "#FF6347";
      setTimeout(() => {
        buttonElement.style.backgroundColor = "#FFA500";
      }, 300);
    }
  };

  const buttonStyle = {
    backgroundColor: "#FFA500",
    color: "#FFFFFF",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    border: "none",
    marginRight: "0.5rem",
    cursor: "pointer",
    fontSize: "1rem",
    display: "inline-flex",
    alignItems: "center",
  };

  const wishlistButtonStyle = {
    backgroundColor: "#FFD700",
    color: "#FFFFFF",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    border: "none",
    marginRight: "0.5rem",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s, transform 0.3s",
    display: "inline-flex",
    alignItems: "center",
  };

  wishlistButtonStyle[":hover"] = {
    backgroundColor: "#FFEC8B",
    transform: "scale(1.05)",
  };

  buttonStyle[":hover"] = {
    backgroundColor: "#FF8000",
    transform: "scale(1.05)",
  };

  return (
    <div className="container mt-3">
      <div
        className="p-3 add-cart-container"
        style={{
          backgroundColor: "#FFC777",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
        <div className="text-wrapper-40 m-1 d-flex justify-content-between align-items-center">
          <button
            style={{
              ...wishlistButtonStyle,
              margin: "0.2rem 0",
              padding: "0.3rem 0.5rem",
              fontSize: "0.9rem",
            }}
            onClick={addToWishlist}
          >
            <i className="fas fa-heart"></i> Wishlist
          </button>

          <button
            style={{
              ...buttonStyle,
              margin: "0.2rem 0",
              padding: "0.3rem 0.5rem",
              fontSize: "0.9rem",
            }}
            onClick={handleAddToCart}
          >
            <i className="fas fa-cart-plus"></i> Add{" "}
            <span
              className="badge bg-secondary mx-1"
              style={{ fontSize: "0.8rem" }}
            >
              {cartQuantity}
            </span>
          </button>
          <button
            style={{
              ...buttonStyle,
              margin: "0.2rem 0",
              padding: "0.3rem 0.5rem",
              fontSize: "0.9rem",
            }}
            onClick={incrementCart}
          >
            <i className="fas fa-plus"></i>
          </button>
          <button
            style={{
              ...buttonStyle,
              margin: "0.2rem 0",
              padding: "0.3rem 0.5rem",
              fontSize: "0.9rem",
            }}
            onClick={decrementCart}
          >
            <i className="fas fa-minus"></i>
          </button>
        </div>
        )}
      </div>
      <hr />
    </div>
  );
};

AddCart.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  // isCartOpen: PropTypes.func.isRequired,
};

export default AddCart;
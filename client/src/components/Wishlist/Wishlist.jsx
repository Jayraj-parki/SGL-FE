// import React from 'react'

// const Wishlist = () => {
//   return (
//     <div>
//         <div className="cart-items-grid">
//           {this.state.cartItems.map((item) => (
//             <div className="cart-item" key={item.id}>
//               <div className="cart-item-image">
//                 <img src={item.image} alt={item.name} style={{height:"200px",width:"200px"}} />
//               </div>
//               <div className="cart-item-details">
//                 <h5 className="cart-item-name">{item.name}</h5>
//                 <p className="cart-item-category">Category: {item.category}</p>
//                 <p className="cart-item-price">${item.price.toFixed(2)}</p>
//                 <div className="cart-item-actions">
//                   <button
//                     onClick={() => this.addItem(item.id)}
//                     className="btn btn-success"
//                   >
//                     +
//                   </button>
//                   <span className="quantity">{item.quantity || 1}</span>
//                   <button
//                     onClick={() => this.decreaseItem(item.id)}
//                     className="btn btn-warning"
//                   >
//                     -
//                   </button>
//                   <button
//                     onClick={() => this.deleteItem(item.id)}
//                     className="btn btn-danger"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//     </div>
//   )
// }

// export default Wishlist

// import React, { useState, useEffect } from 'react';

// const Wishlist = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Assuming you have a function to fetch data from the API
//     fetchDataFromAPI();
//   }, []);

//   const fetchDataFromAPI = async () => {
//     try {
//       // Fetch data from the API
//       const response = await fetch('https://sgl-be.onrender.com/getgems');
//       const data = await response.json();

//       // Assuming the API response contains an array of items
//       setCartItems(data.items);
//     } catch (error) {
//       console.error('Error fetching data from API:', error);
//     }
//   };

//   const addItem = (itemId) => {
//     // Implement your logic to add an item to the cart
//     console.log('Add item with ID:', itemId);
//   };

//   const decreaseItem = (itemId) => {
//     // Implement your logic to decrease the quantity of an item in the cart
//     console.log('Decrease item with ID:', itemId);
//   };

//   const deleteItem = (itemId) => {
//     // Implement your logic to remove an item from the cart
//     console.log('Delete item with ID:', itemId);
//   };

//   return (
//     <div>
//       <div className="cart-items-grid">
//         {cartItems.map((item) => (
//           <div className="cart-item" key={item.id}>
//             <div className="cart-item-image">
//               <img src={item.image} alt={item.name} style={{ height: '200px', width: '200px' }} />
//             </div>
//             <div className="cart-item-details">
//               <h5 className="cart-itemname">{item.name}</h5>
//               <p className="cart-item-category">Category: {item.category}</p>
//               <p className="cart-item-price">${item.price.toFixed(2)}</p>
//               <div className="cart-item-actions">
//                 <button onClick={() => addItem(item.id)} className="btn btn-success">
//                   +
//                 </button>
//                 <span className="quantity">{item.quantity || 1}</span>
//                 <button onClick={() => decreaseItem(item.id)} className="btn btn-warning">
//                   -
//                 </button>
//                 <button onClick={() => deleteItem(item.id)} className="btn btn-danger">
//                   Remove
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;   


// import React, { useState, useEffect } from 'react';

// const Wishlist = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Function to fetch data from the API
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://sgl-be.onrender.com/getgems');
//         const data = await response.json();
//         setCartItems(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     // Call the fetch function
//     fetchData();
//   }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

//   const addItem = (itemId) => {
//     // Implement your addItem logic here
//     console.log('Add item with ID:', itemId);
//   };

//   const decreaseItem = (itemId) => {
//     // Implement your decreaseItem logic here
//     console.log('Decrease item with ID:', itemId);
//   };

//   const deleteItem = (itemId) => {
//     // Implement your deleteItem logic here
//     console.log('Delete item with ID:', itemId);
//   };

//   return (
//     <div>
//       <div className="cart-items-grid">
//         {cartItems.map((item) => (
//           <div className="cart-item" key={item.id}>
//             <div className="cart-item-image">
//               <img src={item.image} alt={item.name} style={{ height: '200px', width: '200px' }} />
//             </div>
//             <div className="cart-item-details">
//               <h5 className="cart-item-name">{item.name}</h5>
//               <p className="cart-item-category">Category: {item.category}</p>
//               <p className="cart-item-price">${item.price.toFixed(2)}</p>
//               <div className="cart-item-actions">
                // <button onClick={() => addItem(item.id)} className="btn btn-success">
                //   +
                // </button>
                // <span className="quantity">{item.quantity || 1}</span>
                // <button onClick={() => decreaseItem(item.id)} className="btn btn-warning">
                //   -
                // </button>
//                 <button onClick={() => deleteItem(item.id)} className="btn btn-danger">
//                   Remove
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;


// import React, { useState, useEffect } from 'react';

// const Wishlist = () => {
//   const [wishlistItems, setWishlistItems] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://sgl-be.onrender.com/getgems');
//         const data = await response.json();
//         setWishlistItems(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);
  
//   const updateQuantity = (itemId, newQuantity) => {
//     const updatedWishlist = wishlistItems.map((item) =>
//       item.id === itemId ? { ...item, quantity: newQuantity } : item
//     );
//     setWishlistItems(updatedWishlist);
//     // Assuming you have a function to show success message
//     // showSuccessMessage("Quantity updated!");
//   };

  
//   const addItem = (itemId) => {
//     const item = wishlistItems.find((item) => item.id === itemId);
//     if (item) {
//       const newQuantity = (item.quantity || 0) + 1;
//       updateQuantity(itemId, newQuantity);
//     }
//   };

//   const decreaseItem = (itemId) => {
//     const item = wishlistItems.find((item) => item.id === itemId);
//     if (item) {
//       const newQuantity = Math.max((item.quantity || 1) - 1, 1);
//       updateQuantity(itemId, newQuantity);
//     }
//   };

//   const deleteItem = (itemId) => {
//     const updatedCart = this.state.cartItems.filter(
//       (item) => item.id !== itemId
//     );
//     this.setState({ cartItems: updatedCart });
//     this.showSuccessMessage("Item removed from the cart!");
//   };

//   return (
//     // <div className="perals-map-area" >
//     //         <div className="gemsmain-con" style={{margin:"20px"}}>
//     //           {wishlistItems.map((item, index) => (
//     //             <div key={index}>
//     //               <div>
//     //                 <img
//     //                   src={`data:image/png;base64,${item.image}`}
//     //                   alt="jewelry"
//     //                   width="50%"
//     //                   height="50%"
//     //                   className="beads-image" style={{paddingRight:"1px"}}
//     //                 />
//     //                 <p className="pearlsname">{item.name}</p>

//     //                 <h4 className="">{item.price}</h4>
//     //                 <p>{item. dimenensions}</p>
//     //                 <div style={{display:'flex',marginBottom:"10px"}}>
//     //                 <button onClick={() => addItem(item.id)} className="btn btn-success">
//     //               +
//     //             </button>
//     //             <span className="quantity">{item.quantity || 1}</span>
//     //             <button onClick={() => decreaseItem(item.id)} className="btn btn-warning">
//     //               -
//     //             </button>
//     //                   </div>

//     //                 <button onClick={() => deleteItem(item.id)} className="btn btn-danger">
//     //                Remove
//     //              </button>
//     //               </div>
//     //             </div>
//     //           ))}
//     //         </div>
//     //       </div>

//     <div className="perals-map-area">
//       <div className="gemsmain-con" style={{ margin: "20px" }}>
//         {wishlistItems.map((item, index) => (
//           <div key={index}>
//             <div>
//               <img
//                 src={`data:image/png;base64,${item.image}`}
//                 alt="jewelry"
//                 width="50%"
//                 height="50%"
//                 className="beads-image"
//                 style={{ paddingRight: "1px" }}
//               />
//               <p className="pearlsname">{item.name}</p>

//               <h4 className="">{item.price}</h4>
//               <p>{item.dimenensions}</p>
//               <div style={{ display: 'flex', marginBottom: "10px" }}>
//                 <button onClick={() => addItem(item.id)} className="btn btn-success">
//                   +
//                 </button>
//                 <span className="quantity">{item.quantity || 1}</span>
//                 <button onClick={() => decreaseItem(item.id)} className="btn btn-warning">
//                   -
//                 </button>
//               </div>

//               <button onClick={() => deleteItem(item.id)} className="btn btn-danger">
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//   );
// };

// export default Wishlist;


import React, { useState, useEffect } from 'react';
import "../Perals/PearlsHome.css"
import CircularProgress from "@mui/material/CircularProgress";

const Wishlist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sgl-be.onrender.com/getgems');
        const data = await response.json();
        setWishlistItems(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const updateQuantity = (index, newQuantity) => {
    const updatedWishlist = wishlistItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setWishlistItems(updatedWishlist);
    // Assuming you have a function to show success message
    // showSuccessMessage("Quantity updated!");
  };

  const addItem = (index) => {
    const item = wishlistItems[index];
    if (item) {
      const newQuantity = (item.quantity || 0) + 1;
      updateQuantity(index, newQuantity);
    }
  };

  const decreaseItem = (index) => {
    const item = wishlistItems[index];
    if (item) {
      const newQuantity = Math.max((item.quantity || 1) - 1, 1);
      updateQuantity(index, newQuantity);
    }
  };

  const deleteItem = (index) => {
    const updatedWishlist = wishlistItems.filter((item, i) => i !== index);
    setWishlistItems(updatedWishlist);
    // showSuccessMessage("Item removed from the wishlist!");
  };

  return (
    <div className="perals-map-area">
      {isLoading && (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}
      {!isLoading && 
      (<div className="gemsmain-con " style={{ margin: "20px" }}>
        {wishlistItems.map((item, index) => (
          <div key={index} >
            <div className='beads-box' style={{borderRadius:"7px",width:"250px",textAlign:"center"}}>
              <img
                src={`data:image/png;base64,${item.image}`}
                alt="jewelry"
                width="45%"
                height="45%"
                className="beads-image"
                style={{ paddingTop:"5px",borderRadius:"10px" }}
              />
              <p className="pearlsname">{item.name}</p>

              <h4 className="">₹ {item.price}</h4>
              <p className="pearlsname">{item.subtype}</p>
              <div style={{ display: 'flex', marginBottom: "10px" }}>
                <button onClick={() => addItem(index)} className="btn btn-success">
                  +
                </button>
                <span className="quantity">{item.quantity || 1}</span>
                <button onClick={() => decreaseItem(index)} className="btn btn-warning">
                  -
                </button>
              </div>
              <div style={{marginRight:"0px",display:"flex",marginBottom:"0px"}}>
              <button style={{backgroundColor:"red",paddingBottom:"30px",marginBottom:"20px"}} onClick={() => deleteItem(index)} className="btn btn-danger">
                Remove
              </button>
              <button style={{backgroundColor:"green",paddingBottom:"30px",marginBottom:"20px"}} onClick={() => deleteItem(index)} className="btn btn-danger">
                Add to Cart
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>)}
    </div>
  );
};

export default Wishlist;

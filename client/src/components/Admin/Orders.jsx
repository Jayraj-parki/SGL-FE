import { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Orders-styles.css";
import AdminSideNav from "./AdminSide";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import OrderEditForm from "./OrderEditForm";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const [isEditFormVisible, setEditFormVisible] = useState(false);

  useEffect(() => {
   
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('https://sgl-be.onrender.com/getorders');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };


 
  const [editingOrder, setEditingOrder] = useState(null);

  const handleEditOrder = (orderReqID) => {
    const orderToEdit = orderData.find((order) => order.orderID === orderReqID);

    if (!orderToEdit) {
      console.error(`Order with OrderID ${orderReqID} not found.`);
      return;
    }

    setEditingOrder(orderToEdit);
    setEditFormVisible(true);
  };

  const handleSaveEditForm = (editedOrder) => {
    
    const updatedOrders = orderData.map((order) =>
      order.id === editingOrder.id ? { ...order, ...editedOrder } : order
    );
    setOrderData(updatedOrders);

    // Close the edit form
    setEditFormVisible(false);
  };

  const handleCancelEditForm = () => {
    // Close the edit form without saving
    setEditFormVisible(false);
    setEditingOrder(null);
  };
  const [editIndex, setEditIndex] = useState(null);
  const [editedItem, setEditedItem] = useState({
    username: "",
    editedField: "",
    orderID: "",
    status: "",
    address: "",
  });

  
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    if (hamburgerIcon) {
      hamburgerIcon.addEventListener("click", handleToggleMenu);
    }
    return () => {
      if (hamburgerIcon) {
        hamburgerIcon.removeEventListener("click", handleToggleMenu);
      }
    };
  }, []);

  const handleToggleMenu = () => {
    const adminSideContainer = document.querySelector(".admin-side-container");
    const ordersContainer = document.querySelector(".orders-container");

    if (adminSideContainer) {
      adminSideContainer.classList.toggle("show-menu");
      if (ordersContainer) {
        ordersContainer.style.display = adminSideContainer.classList.contains(
          "show-menu"
        )
          ? "none"
          : "flex";
      }
    }
  };

  const handleUpdateStatus = (orderId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to update the status to Delivered?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedOrders = orderData.map((order) =>
          order.id === orderId ? { ...order, status: "Delivered" } : order
        );
        setOrderData(updatedOrders);

        Swal.fire("Updated!", "Order status has been updated.", "success");
      }
    });
  };

  const handleCancelOrder = (orderId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel the order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedOrders = orderData.filter((order) => order.id !== orderId);
        setOrderData(updatedOrders);

        Swal.fire("Cancelled!", "Order has been cancelled.", "success");
      }
    });
  };

  const handleRefundOrder = (orderId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to refund the order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, refund it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedOrders = orderData.map((order) =>
          order.id === orderId ? { ...order, status: "Refunded" } : order
        );
        setOrderData(updatedOrders);

        Swal.fire("Refunded!", "Order has been refunded.", "success");
      }
    });
  };

  const handleDelete = async (orderId) => {
    try {
      const response = await fetch(`https://sgl-be.onrender.com/delete/${orderId}`, {
        method: 'DELETE',
      });
  
      console.log(response);
  
      if (response.ok) {
        // Refresh the orders list after a successful delete
        fetchOrders();
      } else {
        console.error('Failed to delete order');
      }
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };
  
  const handleSaveEdit = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to save the changes?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, save it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Order Saved!",
          showConfirmButton: false,
          timer: 1500,
        });

        setEditIndex(null);
        setEditedItem({});
      }
    });
  };

  const handleCancelEdit = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to discard the changes?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, discard it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setEditIndex(null);
        setEditedItem({});

        Swal.fire("Cancelled!", "Changes have been discarded.", "info");
      }
    });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="orders-page">
      {isEditFormVisible && (
        <OrderEditForm
          order={editingOrder}
          onSave={handleSaveEditForm}
          onCancel={handleCancelEditForm}
          className="popup-form"
        />
      )}
      <div className="admin-dashboard-container">
        <h1 className="admin-dashboard">Admin Dashboard</h1>
        <div
          onClick={() => {
            navigate("/admin-login");
          }}
          className="logout-button"
        >
          Logout <FaSignOutAlt style={{ marginLeft: "5px" }} />
        </div>
      </div>
      <div className="d-flex page">
        <div
          className={`admin-side-container ${isMenuVisible ? "show-menu" : ""}`}
        >
          <AdminSideNav />
        </div>
        {isMobile && (
          <div className="hamburger-icon" onClick={toggleMenu}>
            {isMenuVisible ? "✖" : "☰"}
          </div>
        )}
        <div className="container mt-3">
         
<>

        <table>
  <thead>
    <tr>
      <th>User Name</th>
      <th>Items</th>
      <th>Order ID</th>
      <th>Date</th>
      <th>Status</th>
      <th>Address</th>
      <th>Total Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {orders.map((order) => (
      <tr key={order._id}>
        <td>{order.userName}</td>
        <td>{order.items}</td>
        <td>{order.orderId}</td>
        <td>{new Date(order.date).toLocaleDateString()}</td>
        <td>{order.status}</td>
        <td>{order.address}</td>
        <td>${order.totalPrice}</td>
        <td>
          <button onClick={() => handleDelete(order._id)}>Delete</button>
          <button>edit </button>
          <button>update</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </>

        </div>
      </div>
    </div>
  );
};

export default Orders;

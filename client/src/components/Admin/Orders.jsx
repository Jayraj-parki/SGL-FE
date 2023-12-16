import { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Orders-styles.css";
import AdminSideNav from "./AdminSide";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import OrderEditForm from "./OrderEditForm";

const Orders = () => {
  const navigate = useNavigate();
  const [isEditFormVisible, setEditFormVisible] = useState(false);

  // State to store the order being edited
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
    // TODO: Update the order in the orderData state
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

  const [orderData, setOrderData] = useState([
    {
      id: 1,
      username: "JohnDoe",
      items: [
        { name: "Product A", quantity: 2, price: 30 },
        { name: "Product B", quantity: 1, price: 20 },
      ],
      orderID: "ABC123",
      date: "2023-01-15",
      status: "Processing",
      address: "123 Main Street, Cityville",
    },
    {
      id: 2,
      username: "JaneDoe",
      items: [
        { name: "Product C", quantity: 1, price: 40 },
        { name: "Product D", quantity: 3, price: 15 },
      ],
      orderID: "XYZ456",
      date: "2023-01-20",
      status: "Shipped",
      address: "456 Oak Street, Townsville",
    },
  ]);
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

  const handleDeleteOrder = (orderId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete the order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedOrders = orderData.filter((order) => order.id !== orderId);
        setOrderData(updatedOrders);

        Swal.fire("Deleted!", "Order has been deleted.", "success");
      }
    });
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
          <div className="orders-container card">
            <h1 className="text-dark mb-4">Orders</h1>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>S.no</th>
                    <th>Username</th>
                    <th>Items</th>
                    <th>OrderID</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Address</th>
                    <th>Total Price</th>
                    <th>Actions</th>
                    <th>Edit Orders</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.map((order, index) => (
                    <tr key={order.id}>
                      <td>{index + 1}</td>
                      <td>
                        {editIndex === index ? (
                          <input
                            type="text"
                            name="username"
                            value={editedItem.username}
                            onChange={(e) => handleEditInputChange(e, index)}
                          />
                        ) : (
                          order.username
                        )}
                      </td>
                      <td>
                        {editIndex === index ? (
                          <input
                            type="text"
                            name="editedField"
                            value={editedItem.editedField}
                            onChange={(e) => handleEditInputChange(e, index)}
                          />
                        ) : (
                          order.items.map((item, i) => (
                            <div key={i}>
                              {item.name} (Qty: {item.quantity}, Price: $
                              {item.price})
                            </div>
                          ))
                        )}
                      </td>
                      <td>
                        {editIndex === index ? (
                          <input
                            type="text"
                            name="orderID"
                            value={editedItem.orderID}
                            onChange={(e) => handleEditInputChange(e, index)}
                          />
                        ) : (
                          order.orderID
                        )}
                      </td>
                      <td>{order.date}</td>
                      <td>
                        {editIndex === index ? (
                          <input
                            type="text"
                            name="status"
                            value={editedItem.status}
                            onChange={(e) => handleEditInputChange(e, index)}
                          />
                        ) : (
                          order.status
                        )}
                      </td>
                      <td>
                        {editIndex === index ? (
                          <input
                            type="text"
                            name="address"
                            value={editedItem.address}
                            onChange={(e) => handleEditInputChange(e, index)}
                          />
                        ) : (
                          order.address
                        )}
                      </td>
                      <td>
                        ${" "}
                        {order.items.reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )}
                      </td>
                      <td>
                        <div className="btn-group" role="group">
                          <button
                            className="btn btn-warning btn-sm"
                            onClick={() => handleUpdateStatus(order.id)}
                          >
                            Update
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleCancelOrder(order.id)}
                          >
                            Cancel
                          </button>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => handleRefundOrder(order.id)}
                          >
                            Refund
                          </button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group" role="group">
                          {editIndex === index ? (
                            <>
                              <button
                                className="btn btn-success btn-sm"
                                onClick={() => handleSaveEdit(index)}
                              >
                                Save
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={handleCancelEdit}
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => handleEditOrder(order.orderID)}
                            >
                              <FaEdit />
                            </button>
                          )}
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDeleteOrder(index)}
                          >
                            <FaTrashAlt />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts";
import "./Orders.css";

export const Orders = () => {
  const { state } = useData();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const sortedOrders = state?.orders?.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setOrders(sortedOrders);
  }, [state]);

  return (
    <div className="order-container">
      <div className="order-placed-container">
        {orders.length ? (
          orders.map((order) => (
            <div
              className="order-details-container"
              key={order.order.paymentId}
            >
              <div className="address-details">
                <span className="order-confirm-text">Order Confirmed</span>
                <span className="order-date">
                  {new Date(order.createdAt).toDateString()}
                </span>
                <div className="order-paymentId">
                  <span className="order-sub-heading">PaymentId: </span>{" "}
                  {order.order.paymentId}
                </div>
                <div className="address">
                  <p className="order-sub-heading">Delivered To:</p>
                  <p>{order.order.deliveryAddress.name}</p>
                  <p>{order.order.deliveryAddress.locality}</p>
                  <p>{order.order.deliveryAddress.city}</p>
                  <p>
                    {order.order.deliveryAddress.state} -
                    {order.order.deliveryAddress.pincode}
                  </p>
                  <p>{`Mobile - ${order.order.deliveryAddress.mobile}`}</p>
                </div>
                <div>
                  <p className="paid-amount">Amount Paid :</p>{" "}
                  <p className="amount">₹{order.order.totalPrice}</p>
                </div>
              </div>
              <div className="items-details-container">
                {order.order.items.map((item) => (
                  <div className="item-details" key={item._id}>
                    <div className="item-imamge">
                      <img src={item.imageUrl} alt="product image" />
                    </div>
                    <div className="item-desc">
                      <p className="item-desc-title">{item.title}</p>
                      <p className="item-desc-qty">Quantity: {item.qty}</p>
                      <p className="item-desc-price">
                        Price: {item.sell_price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="no-orders">
            <p>No Orders Yet</p>
            <div className="btn-order">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/products")}
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

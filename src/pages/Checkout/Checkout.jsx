import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";
import { useData } from "../../contexts";
import { AddressModal } from "../../components/Address/AddressModal";
import { ToastHandler } from "../../utilities/toastUtils";
import { usePayment } from "../../customHooks/usePayment";

export const Checkout = () => {
  const location = useLocation();
  const { state, showAddressModal, setShowAddressModal } = useData();
  const [adderessSelected, setIsAddressSelected] = useState(false);
  const { displayRazorPay } = usePayment();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.cart.length === 0) {
      navigate("/cart", { replace: true });
    }
  });

  const placeOrderHandler = () => {
    if (!adderessSelected._id) {
      ToastHandler("error", "Select any Address");
    } else {
      displayRazorPay(adderessSelected, location.state.cartValue);
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-address-container">
        <h2 className="checkout-address-heading">
          Select from Available Addresses to Deliver :
        </h2>
        {state.address.length !== 0 ? (
          <div className="checkout-address-list">
            {state.address.map((address) => (
              <div className="checkout-address-list-row" key={address._id}>
                <input
                  type="radio"
                  name="address"
                  id={address._id}
                  checked={address._id === adderessSelected._id}
                  onChange={() => setIsAddressSelected(address)}
                />
                <label htmlFor={address._id} className="checkout-address-item">
                  <div className="address-item-row">
                    <div className="address-username">{address.name}</div>
                    <div className="address-mobile">+91 - {address.mobile}</div>
                  </div>
                  <div className="address-item-row address-row">
                    <div className="address-item">{address.locality}, </div>
                    <div className="address-item">{address.city}, </div>
                    <div className="address-item">{address.state} </div>
                    <div className="address-item">- {address.pincode}</div>
                  </div>
                  <div className="address-item-row address-row">
                    <div className="address-item">{address.email}</div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        ) : (
          <div className="checkout-no-address">No Saved Address Found</div>
        )}
        <div
          className="new-address-button checkout-address-button"
          onClick={() => setShowAddressModal(true)}
        >
          + Add New Address
        </div>

        {showAddressModal && (
          <AddressModal setShowAddressModal={setShowAddressModal} />
        )}
      </div>
      <div className="checkout-summary">
        <div className="summary">
          <h3 className="summary-heading checkout-summary-heading">
            Checkout Summary
          </h3>
          <div className="pricing-details">
            <div className="summary-items">
              <label htmlFor="">Price ({location.state.cartItems} items)</label>
              <p>₹ {location.state.cartValue}</p>
            </div>
            <div className="summary-items">
              <label htmlFor="">Delivery Charges</label>
              {location.state.cartValue > 999 ? (
                <div className="free-delivery-container">
                  <span>FREE</span>
                  <p className="free-delivery">₹ 499</p>
                </div>
              ) : (
                <p> ₹ 499 (Already Included)</p>
              )}
            </div>
          </div>

          <div className="horizontal-rule"></div>

          <div className="final-amount">
            <div className="summary-items">
              <label htmlFor="">Amount to be Paid</label>
              <p>₹ {location.state.cartValue}</p>
            </div>
          </div>

          <div className="horizontal-rule"></div>
          <button
            className="btn btn-primary"
            onClick={() => placeOrderHandler()}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

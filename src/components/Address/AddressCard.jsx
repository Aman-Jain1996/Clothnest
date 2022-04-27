import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useAddressHandler } from "../../customHooks/Customhooks";
import { useData } from "../../contexts";

export const AddressCard = ({ address }) => {
  const { removeAddress } = useAddressHandler();
  const { setEditAddress, setShowAddressModal } = useData();
  return (
    <div className="address-list-item">
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
      <div className="address-button-container addressList-button-container">
        <button
          type="submit"
          className="save-address-button"
          onClick={() => {
            setShowAddressModal(true);
            setEditAddress(address);
          }}
        >
          <ModeEditIcon /> Edit
        </button>
        <button
          onClick={() => removeAddress(address._id)}
          className="cancel-address-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

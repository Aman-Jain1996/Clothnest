import React from "react";
import { useFormik } from "formik";
import { useAddressHandler } from "../../customHooks/Customhooks";
import { useData } from "../../contexts";

export const AddressModal = ({ setShowAddressModal }) => {
  const { addAddress, updateAddress } = useAddressHandler();
  const { editAddress, setEditAddress } = useData();

  const initialDataState = {
    name: editAddress.name || "",
    mobile: editAddress.mobile || "",
    pincode: editAddress.pincode || "",
    locality: editAddress.locality || "",
    state: editAddress.state || "",
    city: editAddress.city || "",
    email: editAddress.email || "",
  };

  const formik = useFormik({
    initialValues: initialDataState,
    onSubmit: (values) => {
      editAddress.name
        ? updateAddress(editAddress._id, values)
        : addAddress(values);
      setShowAddressModal(false);
    },
    validate: (values) => {
      let errors = {};

      if (!values.name.trim()) errors.name = "Name is a mandatory Field";
      else if (!new RegExp("[A-Za-z]+").test(values.name))
        errors.name = "Name can only contain alphabets";

      if (!values.locality.trim())
        errors.locality = "Flat / Building No. is a mandatory Field";

      if (!values.city.trim()) errors.city = "City is a mandatory Field";

      if (!values.state.trim()) errors.state = "State is a mandatory Field";

      if (!values.pincode.trim())
        errors.pincode = "Pincode is a mandatory Field";
      else if (!new RegExp("^[0-9]{6}$").test(values.pincode))
        errors.pincode = "Pincode must be a 6 digit Number ";

      if (!values.mobile.trim())
        errors.mobile = "Mobile No. is a mandatory Field";
      else if (!new RegExp("^[6-9]{1}[0-9]{9}$").test(values.mobile))
        errors.mobile = "Mobile No must be of 10 digits and starts b/w 6-9 ";

      if (!values.email.trim()) errors.email = "Email is a mandatory Field";
      else if (
        !new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]{2,4}$").test(
          values.email
        )
      )
        errors.email = "Email must be a valid email";

      return errors;
    },
  });

  return (
    <div className="address-modal-container">
      <div className="newAddress-container">
        <h2 className="newAddress-container-heading">New Address</h2>
        <form onSubmit={formik.handleSubmit} method="POST">
          <div className="field-container">
            <div className="field">
              <input
                className="field-input"
                type="text"
                value={formik.values.name}
                name="name"
                placeholder="Full Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="error-message-container">
                  {formik.errors.name}
                </div>
              )}
            </div>
            <div className="field">
              <input
                className="field-input"
                type="text"
                value={formik.values.mobile}
                name="mobile"
                placeholder="Mobile No."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <div className="error-message-container">
                  {formik.errors.mobile}
                </div>
              )}
            </div>
          </div>

          <div className="field-container">
            <div className="field">
              <input
                className="field-input"
                type="text"
                value={formik.values.email}
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="error-message-container">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div className="field">
              <input
                className="field-input"
                type="text"
                value={formik.values.pincode}
                name="pincode"
                placeholder="Zipcode / Pincode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.pincode && formik.errors.pincode && (
                <div className="error-message-container">
                  {formik.errors.pincode}
                </div>
              )}
            </div>
          </div>

          <div className="field-container address-container">
            <div className="field">
              <input
                className="field-input address-text"
                type="text"
                value={formik.values.locality}
                name="locality"
                placeholder="Flat / Building No."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.locality && formik.errors.locality && (
                <div className="error-message-container">
                  {formik.errors.locality}
                </div>
              )}
            </div>
          </div>

          <div className="field-container">
            <div className="field">
              <input
                className="field-input"
                type="text"
                value={formik.values.city}
                name="city"
                placeholder="City Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.city && formik.errors.city && (
                <div className="error-message-container">
                  {formik.errors.city}
                </div>
              )}
            </div>
            <div className="field">
              <input
                className="field-input"
                type="text"
                value={formik.values.state}
                name="state"
                placeholder="State"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.state && formik.errors.state && (
                <div className="error-message-container">
                  {formik.errors.state}
                </div>
              )}
            </div>
          </div>

          <div className="address-button-container">
            <button type="submit" className="save-address-button">
              Save Address
            </button>
            <button
              onClick={() => setShowAddressModal(false)}
              className="cancel-address-button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

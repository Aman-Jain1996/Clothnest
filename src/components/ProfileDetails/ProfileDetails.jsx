import React from "react";
import { useAuth } from "../../contexts";

export const ProfileDetails = () => {
  const { activeUser, logoutHandler } = useAuth();

  return (
    <div className="profile-details-container">
      <h4 className="account-details-heading">Account Details</h4>
      <div className="profile-details">
        <div className="profile-row">
          <span className="profile-content-field">Name : </span>
          <span className="profile-content-value">{activeUser?.firstName}</span>
        </div>

        <div className="profile-row">
          <span className="profile-content-field">Email : </span>
          <span className="profile-content-value">{activeUser?.email}</span>
        </div>
      </div>

      <button onClick={logoutHandler} className="profile-btn-logout">
        Logout
      </button>
    </div>
  );
};
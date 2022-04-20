import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile-page-container">
      <div className="tab-container">
        <NavLink to="details">My Profile</NavLink>
        <NavLink to="address">Addresses</NavLink>
        <NavLink to="orders">My Orders</NavLink>
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
};

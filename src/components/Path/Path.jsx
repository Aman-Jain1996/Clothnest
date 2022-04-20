import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import "./Path.css";
import { Link } from "react-router-dom";

export const Path = ({ path }) => {
  return (
    <div className="page-path">
      <HomeIcon />
      <Link to="/" className="path-item">
        <span>Home</span>
      </Link>
      {path
        .split("/")
        .filter((i) => i)
        .map((i) => {
          if (i === "wishlist" || i === "cart") {
            return (
              <span className="sub-path" key={i}>
                <Link
                  key={`product  + ${i}`}
                  to={`/products`}
                  className="path-item"
                >
                  / Products
                </Link>
                <Link to={`/${i}`} className="path-item">
                  <span>/ {i[0].toUpperCase() + i.slice(1)}</span>
                </Link>
              </span>
            );
          } else {
            return (
              <Link key={i} to={`/${i}`} className="path-item">
                <span>/ {i[0].toUpperCase() + i.slice(1)}</span>
              </Link>
            );
          }
        })}
    </div>
  );
};

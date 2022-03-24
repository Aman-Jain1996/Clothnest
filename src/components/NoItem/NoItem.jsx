import React from "react";
import { Link } from "react-router-dom";

export default function NoItem({
  imageUrl,
  textContent,
  isButtonVisible,
  buttonContent,
  redirectionUrl,
}) {
  return (
    <div className="no-item">
      <img className="empty-image" alt="No Item on page" src={imageUrl} />
      <span className="empty-content">{textContent}</span>
      {isButtonVisible && (
        <Link to="/products" className="btn-logout">
          {buttonContent}
        </Link>
      )}
    </div>
  );
}

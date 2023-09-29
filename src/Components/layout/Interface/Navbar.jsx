import React from "react";
import { RouterProvider } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Welcome <i className="fab fa-typo3"></i>
        </Link>
        <h1>test</h1>
      </div>
    </div>
  );
}

export default Navbar;

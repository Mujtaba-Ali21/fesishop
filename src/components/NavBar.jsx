import React from "react";
import { NavLink } from "react-router-dom";
import nav_logo from "../assets/nav_logo.webp";
import "../styles/navbar.css";

function NavBar() {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg custom-navbar"
      data-bs-theme="dark"
    >
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src={nav_logo} alt="nav logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/men-shirts"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Men Shirts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/women-shirts"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Women Shirts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/kids-shirts"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Kids Shirts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center me-5">
            <NavLink to="/cart" className="nav-link">
              <i
                className={
                  "bi" +  
                  (window.location.pathname === "/cart"
                    ? " bi-cart-fill"
                    : " bi-cart")
                }
              ></i>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

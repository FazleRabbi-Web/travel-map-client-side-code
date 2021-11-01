import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";
const Navbar = () => {
  const { logOut, user } = useAuth();

  return (
    <div className="bg-secondary">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="d-flex">
              <h2 className="fw-bold">
                <span className="text-warning">T</span>ravel
              </h2>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
                <Link to="/packages" className="nav-link">
                  packages
                </Link>
                <Link to="/services" className="nav-link">
                  services
                </Link>
                <Link to="/review" className="nav-link">
                  Review
                </Link>
                <Link to="/Gallery" className="nav-link">
                  Gallery
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
                {user.email ? (
                  <Link to="/Mybooking" className="nav-link">
                    My Booking
                  </Link>
                ) : (
                  ""
                )}
                {user.email ? (
                  <Link to="/Managebooking" className="nav-link">
                    Manage Booking
                  </Link>
                ) : (
                  ""
                )}
                {user.email ? (
                  <Link to="/addservice" className="nav-link">
                    Add Package
                  </Link>
                ) : (
                  ""
                )}

                {user.email ? (
                  <p className="text-center pt-2 me-2 text-info">
                    {user.displayName}
                  </p>
                ) : (
                  ""
                )}
                {user.email ? (
                  <Link to="/login">
                    <button
                      onClick={logOut}
                      className="btn btn-warning me-2 fw-bold"
                    >
                      Log-out
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-warning me-2 fw-bold">
                      Log In
                    </button>
                  </Link>
                )}
                {user.email ? (
                  ""
                ) : (
                  <Link to="/register">
                    <button className="btn btn-success me-2 fw-bold">
                      Register
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import logo from "../../logo_yellow.svg";

function Header({ handleLogout }) {
  return (
    <header
      className="p-3 text"
      style={{
        backgroundColor: "#142749",
        fontFamily: "Tilt Neon, sans-serif",
        fontWeight: "100",
        fontStyle: "normal",
      }}
    >
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <img
            src={logo}
            style={{ height: "90px", padding: "9px" }}
            href="https://smp.gymkhana.iitb.ac.in/"
            alt="smp logo"
          />

          {/* THIS UL IS TO SPACE THE ELEMENTS EVENLY */}
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 text-secondary"></a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white"></a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white"></a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white"></a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white"></a>
            </li>
          </ul>

          <div className="text-end">
            <button
              type="button"
              href="/home"
              className="btn hover-effect-button"
              onClick={handleLogout}
            >
              <a style={{ fontWeight: "500" }}>Logout</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

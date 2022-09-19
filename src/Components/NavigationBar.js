import React from "react";
import "./NavigationBar.css";
const NavigationBar = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar">
          <ul>
            <li>
              <i
                className="fa-sharp fa-solid fa-envelope-open"
                style={{ color: "#3c5dca" }}
              ></i>
              <span style={{ fontWeight: "800", marginLeft: "6px" }}>
                Estatery
              </span>
            </li>
            <li id="rent">
              <a href="#home">Rent</a>
            </li>
            <li>
              <a href="#home">Buy</a>
            </li>
            <li>
              <a href="#home">Sell</a>
            </li>
            <li>
              <a href="#home">Manage Propery</a>
              <i className="fa-sharp fa-solid fa-angle-down"></i>
            </li>
            <li>
              <a href="#home">Resources</a>
              <i className="fa-sharp fa-solid fa-angle-down"></i>
            </li>
          </ul>
          <div className="actions">
            <button className="btn-1">Login</button>
            <button className="btn-2">Sign up</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;

import React from "react";
import "./Nav.css";

export default function Nav(props) {
  return (
    <div className="nav_wrapper">
      <div className="nav_container">
        <img
          className="cfd_icon_mobile"
          src="https://i.imgur.com/gCNeJi8.png"
          alt="CareFree Direct Logo"
        />
        <img
          className="cfd_icon"
          src="https://i.imgur.com/hpOyKyC.png"
          alt="CareFree Direct Logo"
        />
      </div>
      <div>
        <p>To call our Medicare Coverage Help Center</p>
        <ul>
          <li>1-855-931-0267(TTY:711)</li>
          <li>
            <span>8am to 8pm, Monday-Friday</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

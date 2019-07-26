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
        <img className="phoneIcon"src="https://i.imgur.com/PhmyHS2.png" alt="phone icon" />
        <ul>
          <a
            data-replaceable-phone-dialable=""
            href="tel:18559310268"
            style={{ textDecoration: "none" }}
          >
            <li>1-855-931-0268(TTY:711)</li>
          </a>
          <li>
            <span>8am to 8pm, Monday-Friday</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

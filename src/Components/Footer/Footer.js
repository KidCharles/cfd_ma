import React from "react";
import "./Footer.css";

export default function Footer(props) {
  let logo = "https://i.imgur.com/hpOyKyC.png";
  let phone = "https://i.imgur.com/PhmyHS2.png";
  let fb = "https://i.imgur.com/jOBXFmz.png";
  let ig = "https://i.imgur.com/AfNv3Wi.png";
  let linked = "https://i.imgur.com/1JOMbnX.png";
  let mail = "https://i.imgur.com/k4uSafY.png";

  return (
    <div className="footer_wrapper">
      <div className="footer_container">
        <div>
          <ul>
            <a
              href="https://carefreedirect.com/#/About"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <li onClick={() => props.to_top()}> About Us</li>
            </a>
            <span>|</span>
            <a
              href="https://carefreedirect.com/#/termsPrivacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <li onClick={() => props.to_top()}> Terms of Use</li>
            </a>
            <span>|</span>
            <a
              href="https://carefreedirect.com/#/termsPrivacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <li onClick={() => props.to_top()}>Privacy Policy</li>
            </a>
            <span>|</span>
            <a
              href="mailto:info@mycarefree.com"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
      </div>

      <div className="footer_cta">
        <p>Speak to a Licensed Benefits Advisor!</p>
        <img className="footer_phone" src={phone} alt="phone icon" />
        <a
          data-replaceable-phone-dialable=""
          className="footer_number"
          href="tel:18559310268"
        >
          <span className="">1-855-931-0268</span>
        </a>
      </div>
      <div className="social_media_wrapper">
        <div>
          <a
            href="https://carefreedirect.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              className="footer_logo"
              src={logo}
              alt="CareFree Direct Logo"
              onClick={() => props.to_top()}
            />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/CareFreeDirect"
          >
            <img className="social_media_icon" src={fb} alt="" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/carefree_direct"
          >
            <img className="social_media_icon" src={ig} alt="" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/carefree-direct"
          >
            <img className="social_media_icon" src={linked} alt="" />
          </a>
          <a
            href="mailto:cfdirect@mycarefree.com"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <img className="social_media_icon" src={mail} alt="" />
          </a>
        </div>
      </div>
      <p className="footer_copyright">
        ©2019 CareFree Direct All Rights Reserved.
      </p>
    </div>
  );
}

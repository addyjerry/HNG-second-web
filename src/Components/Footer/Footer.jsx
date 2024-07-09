import React from "react";
import "./Footer.css";
import facebook from "../../assets/Fb.png";
import twitter from "../../assets/Tw.png";
import instagram from "../../assets/In.png";
import linkedin from "../../assets/Ln.png";
import { MdOutlineCopyright } from "react-icons/md";
import logo from "../../assets/orange.png";

const Footer = () => {
  return (
    <div id="Footer">
      <div id="footer__body">
        <div id="icons">
          <ul>
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>
            <li>
              <img src={instagram} alt="" />
            </li>
            <li>
              <img src={linkedin} alt="" />
            </li>
          </ul>
        </div>
          <p>
            <MdOutlineCopyright /> 2023 iordered. All rights reserved
          </p>
          <div id="logo__area">
            <img src={logo} alt="logo" />
          </div>
       
      </div>
    </div>
  );
};

export default Footer;

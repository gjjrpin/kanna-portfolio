import React from "react";
import Logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#196B76]">
      <ul className="list-none grid grid-cols-1 md:grid-cols-3 p-4 border-t  border-[#D3D3D3] text-[#FFFFFF]">
        <li className="p-0 flex justify-center">
          <a href="/#home">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "60px" }}
              className="cursor-pointer"
            />
          </a>
        </li>
        <li className="p-0 flex justify-center">
          <a href="https://www.linkedin.com/in/kanna-ng/">
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="p-0 flex justify-center">
          <a href="mailto:kannalee.ng@gmail.com">kannalee.ng@gmail.com</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

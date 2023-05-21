import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 md:px-40 bg-[#196B76] text-white">
      <a href="/#home">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "60px" }}
          className="cursor-pointer"
        />
      </a>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <a href="/#home" className="py-2 hover:border-b-2 border-white">
            Home
          </a>
        </li>
        <li>
          <a href="/#work" className="py-2 hover:border-b-2 border-white">
            Work
          </a>
        </li>
        <li>
          <a
            className="py-2 hover:border-b-2 border-white"
            target="_blank"
            href="https://drive.google.com/file/d/1Fpqrjn491WLENIG5qIxGhcOuSdzeC1qA/view?usp=sharing"
          >
            Resume
          </a>
        </li>
        <li>
          <Link
            to="/contact"
            smooth={true}
            duration={500}
            className="py-2 hover:border-b-2 border-white"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            smooth={true}
            duration={500}
            className="py-2 hover:border-b-2 border-white"
          >
            About
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#196B76] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <a onClick={handleClick} href="/#home">
            Home
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a onClick={handleClick} href="/#work">
            Work
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a
            onClick={handleClick}
            className="py-2"
            target="_blank"
            href="https://drive.google.com/file/d/1Fpqrjn491WLENIG5qIxGhcOuSdzeC1qA/view?usp=sharing"
          >
            Resume
          </a>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="/contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/about" smooth={true} duration={500}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

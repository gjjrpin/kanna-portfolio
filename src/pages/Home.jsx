import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import HomeProfile from "../assets/homeprofile.png";
import { data } from "../data/data.js";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const project = data;

  return (
    <div>
      <div id="home" name="home" className="py-36 w-full h-screen bg-[#97DBEC]">
        {/* Container */}
        <div className="flex flex-col md:flex-row gap-16 px-4 md:px-40 h-full">
          <div className="p-0 flex-1">
            <p className="sm:text-3xl text-black">Hi, my name is</p>
            <p className="text-4xl sm:text-6xl font-bold text-black">Kanna</p>
            <p className="text-4xl sm:text-6xl font-bold text-black">
              I'm a UX/UI Designer who makes designs human - friendly.
            </p>
            <div>
              <Link onClick={handleClick} to="/contact">
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-black hover:bg-[#0397B2]">
                  Contact Me
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="p-0 flex-1 flex justify-end">
            <img
              src={HomeProfile}
              alt="homeprofile"
              className="object-contain w-auto"
            />
          </div>
        </div>
      </div>
      {/* Work Page */}
      <div id="work" name="work" className="w-full md:h-screen text-[#196B76]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-center text-4xl italic text-[#196B76]">
              Recent Work
            </p>
          </div>

          {/* container for projects */}
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
            {/* Gird Item */}
            {project.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
              >
                {/* Hover effect for images */}
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font bold text-white tracking-wider ">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center ">
                    {/* eslint-disable-next-line */}
                    <a href={item.github} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                      >
                        Code
                      </button>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href={item.live} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                      >
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

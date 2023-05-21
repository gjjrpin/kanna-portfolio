import React from "react";
import Profile from "../assets/profile.png";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#97DBEC] text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl italic inline border-b-2 border-black">
              About Yours Truly
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="flex justify-center items-center w-50 h-50 p-[3rem]">
            <img
              src={Profile}
              alt="profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center leading-loose">
            <p>
              As a passionate web developer, I stay ahead of emerging
              technologies to create innovative web applications that meet the
              needs of users. My commitment to staying up-to-date with emerging
              AI technologies and understanding diverse perspectives ensures
              that my work is human-centered and cutting-edge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

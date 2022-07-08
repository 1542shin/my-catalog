import React from "react";
import horizonlogo from "../asset/horizonlogo.png";
import "../index.css";
import { NavLink } from "react-router-dom";
import githubIcon from "../asset/github.png";
import linkedinIcon from "../asset/linkedin.png";
import emailIcon from "../asset/email.png";

function TopBar() {
  return (
    <div id="topbar" className=" flex border-b-2 border-black h-30">
      <div id="logo" className="  hidden lg:flex" data-aos="fade-up" data-aos-duration="1000">
        <img className=' w-52' src={horizonlogo} alt="logo" />
      </div>

      <div
        id="title"
        className="font-['Tangerine'] text-4xl sm:text-6xl lg:text-7xl m-auto p-5 grow whitespace-nowrap font-bold text-center"
      >
        <NavLink to="/my-catalog/">Expand Your Horizon</NavLink>
      </div>

      <div className=" hidden lg:flex  m-auto  p-10 justify-center items-center">
        <a id="github" href='https://github.com/1542shin/my-catalog' target="_blank" rel="noreferrer">
          <img className="w-8 mr-3 hover:scale-110" src={githubIcon} alt='github icon'/>
        </a>
        <a id="linkedin" href='https://www.linkedin.com/in/aahan-shin-300722235' target="_blank" rel="noreferrer">
          <img className="w-8 mr-2 hover:scale-110" src={linkedinIcon} alt='linkedIn icon'/>
        </a>
        <a id="mail" href='mailto:1542shin@gmail.com'>
          <img className="w-10 hover:scale-110" src={emailIcon} alt='email icon'/>
        </a>
      </div>
    </div>
  );
}

export default TopBar;

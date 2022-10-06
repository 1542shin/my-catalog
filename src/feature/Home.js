import panorama from "../asset/panorama.jpg";
import closeIcon from "../asset/closeIcon.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
let activeClassName = "font-bold border-l-4 border-black pl-3";
let normalClassName = "hover:font-bold ";

function Home() {
  const [close, setClose] = useState(false);

  return (
    <div id="Home">
      <div className="relative">
        <img
          src={panorama}
          alt="seychelles source:pixabay.com"
          className="absolute min-w-screen min-h-screen  object-cover -z-10"
        />
      </div>
      {close ? null : (
        <div className='flex items-center fixed bg-white m-2 p-1 z-10'>
          <button className='w-5 m-2' aria-label="close" onClick={() => setClose("true")}>
           <img src={closeIcon} alt='close icon'/>
          </button>
          <div>
            This project needs access to CORS-anywhere Server{" "}
            <a
              href="https://cors-anywhere.herokuapp.com"
              target="_blank"
              rel="noreferrer"
              className='underline text-blue-700'
            >
              (https://cors-anywhere.herokuapp.com)
            </a>
          </div>
        </div>
      )}
      <div
        id="smallMenu"
        className="flex fixed text-md sm:text-2xl justify-center w-full gap-5 pt-20 mx-auto lg:hidden"
      >
        <div>
          <NavLink
            to="/my-catalog/buddhism"
            className={({ isActive }) =>
              isActive ? activeClassName : normalClassName
            }
          >
            <span>Buddhism</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/my-catalog/physics">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : normalClassName}>
                <span>Physics</span>
              </span>
            )}
          </NavLink>
        </div>
        <div>
          <NavLink to="/my-catalog/ai">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : normalClassName}>
                <span>AI</span>
              </span>
            )}
          </NavLink>
        </div>
        <div>
          <NavLink to="/my-catalog/biology">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : normalClassName}>
                <span>Biology</span>
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Home;
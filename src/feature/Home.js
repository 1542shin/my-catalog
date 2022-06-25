import panorama from "../asset/panorama.jpg";
import { NavLink } from "react-router-dom";
let activeClassName = "font-bold border-l-4 border-black pl-3";
let normalClassName = "hover:font-bold ";

function Home() {
  return (
    <div id="Home" className="">
      <div className="relative">
      <img
        src={panorama}
        alt='seychelles source: pixabay.com'
        className="absolute min-w-screen min-h-screen  object-cover shrink-0 -z-10"
      />
      </div>
      <div
        id="smallMenu"
        className="flex fixed text-2xl  justify-center w-full gap-5 pt-20  mx-auto lg:hidden"
      >
     
        <div>
          <NavLink
            to="/my-catalog/buddhism"
            className={({ isActive }) =>
              isActive ? activeClassName : normalClassName
            }
          >
            <span className=" ">Buddhism</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/my-catalog/physics">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : normalClassName}>
                <span className="">Physics</span>
              </span>
            )}
          </NavLink>
        </div>{" "}
        <div>
          <NavLink to="/my-catalog/ai">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : normalClassName}>
                <span className=" ">AI</span>
              </span>
            )}
          </NavLink>
        </div>{" "}
        <div>
          <NavLink to="/my-catalog/biology">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : normalClassName}>
                <span className=" ">Biology</span>
              </span>
            )}
          </NavLink>
        </div>
      </div>
      
    </div>
  );
}
export default Home;

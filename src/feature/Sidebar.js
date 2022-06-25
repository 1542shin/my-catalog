import { NavLink } from "react-router-dom";

export function Sidebar() {
  let activeClassName = "font-bold border-l-4 border-black pl-3";
  let normalClassName = "hover:font-bold ";
  return (
    <div
      id="sidebar"
      className="invisible lg:visible fixed flex flex-col h-full w-[14rem] "
    >
      <ul
        id="links"
        className="grow flex flex-col justify-center gap-5 text-xl ml-20 pb-60   "
      >
        <li>
          <NavLink
            exact to="/my-catalog/"
            className={({ isActive }) =>
              isActive ? activeClassName : normalClassName
            }
          >
            <span>Home</span>
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/my-catalog/physics">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : normalClassName}>
                <span className="">Physics</span>
              </span>
            )}
          </NavLink>
        </li>{" "}
        <li>
          <NavLink to="/my-catalog/ai">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : normalClassName}>
                <span className=" ">Artificial Intelligence</span>
              </span>
            )}
          </NavLink>
        </li>{" "}
        <li>
          <NavLink to="/my-catalog/biology">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : normalClassName}>
                <span className=" ">Biology</span>
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-catalog/buddhism"
            className={({ isActive }) =>
              isActive ? activeClassName : normalClassName
            }
          >
            <span className=" ">Buddhism</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

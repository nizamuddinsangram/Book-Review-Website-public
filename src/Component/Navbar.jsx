import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mb-12 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "bg-red-400" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/listed-book"
              className={({ isActive }) => (isActive ? "bg-red-400" : "")}
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/pages-read"
              className={({ isActive }) => (isActive ? "bg-red-400" : "")}
            >
              Pages to Read
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-black">Book vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu  menu-horizontal px-1 text-xl  text-gray-500">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-red-400  rounded-lg py-1 px-2" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/listed-book"
            className={({ isActive }) =>
              isActive ? "bg-red-400 mx-12 rounded-lg py-1 px-2" : "mx-12"
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/pages-read"
            className={({ isActive }) =>
              isActive ? "bg-red-400 mr-6 rounded-lg py-1 px-2" : "mr-6"
            }
          >
            Pages to Read
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "bg-red-400 mr-6 rounded-lg py-1 px-2" : "mr-6"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "bg-red-400  rounded-lg py-1 px-2" : ""
            }
          >
            Contact
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end  ">
        <a className="btn text-white btn-secondary">Sign In</a>
        <a className="btn ml-6 text-white  btn-accent">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;

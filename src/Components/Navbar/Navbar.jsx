import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  const activeLinkStyle = ({ isActive }) =>
    isActive ? "border-b-4 border-primary" : "";

  const navItems = (
    <>
      <li>
        <NavLink className={activeLinkStyle} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={activeLinkStyle} to="/contact-us">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink className={activeLinkStyle} to="about-us">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink className={activeLinkStyle} to="/give-review">
          Reviews
        </NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink className={activeLinkStyle} to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className={activeLinkStyle} to="/signup">
              Sign Up
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 border-b">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to="/" className="px-4">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:flex items-center">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-3">
            <input
              type="text"
              placeholder="Search"
              className="input border-gray-300 w-full sm:w-auto"
            />
          </div>
          {user && (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://cdn.donmai.us/original/52/bf/52bf62f501feeda384c15cf20f4dd168.png" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <Link to="/buyer-my-profile" className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={() => handleLogOut()}>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

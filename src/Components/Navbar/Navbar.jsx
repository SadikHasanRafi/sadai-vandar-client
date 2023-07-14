import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import profile from "../../assets/profile.svg"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isBuyer, setIsBuyer] = useState(true)

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/user-type/${user?.uid}`
        );
        if (response.data.role === "buyer") {
          setIsBuyer(true)
        }else{
          setIsBuyer(false)
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch user role:", error);
        setIsLoading(false);
      } 
    };

    fetchData();

    return () => {
      // Clean up any necessary resources
    };
  }, [user?.uid]);

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  const activeLinkStyle = ({ isActive }) =>
    isActive
      ? "rounded-none text-primary btn capitalize btn-ghost hover:bg-white text-[16px] btn-sm"
      : "rounded-none hover:text-primary btn capitalize btn-ghost hover:bg-white text-[16px] btn-sm";

  const navItems = (
    <>
      <NavLink className={activeLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink className={activeLinkStyle} to="/contact-us">
        Contact
      </NavLink>
      <NavLink className={activeLinkStyle} to="about-us">
        About Us
      </NavLink>
      <NavLink className={activeLinkStyle} to="/give-review">
        Review
      </NavLink>
      {!user && (
        <>
          <NavLink className={activeLinkStyle} to="/login">
            Login
          </NavLink>
          <NavLink className={activeLinkStyle} to="/signup">
            Sign Up
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div>
            {isLoading ? <Loading></Loading>:
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
           <NavLink className={activeLinkStyle} to="show-all-products">All Products</NavLink>

          {user && (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={profile} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

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
      </div>}


    </div>
  );
};

export default Navbar;

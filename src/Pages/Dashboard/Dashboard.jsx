import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const activeLinkStyle = ({ isActive }) => isActive ? "border-b-4 border-primary" : "";
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user-type/${user.uid}`);
        console.log(response.data.role);
        setRole(response.data.role);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch user role:', error);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      // Clean up any necessary resources
    };
  }, [user.uid]);

  return (
    <div className="flex">
      <div className="flex min-h-screen flex-col justify-between border-e min-w-[15vw]">
        <div className="px-4 py-4">
          <ul className="mt-6 space-y-1">
            <li className="block px-4 pb-4 font-medium text-lg">Dashboard</li>
            
            {isLoading ? (
              <li>Loading...</li>
            ) : (
              <>
                {role === "shopkeeper" && (
                  <>
                    <li>
                      <NavLink to="sells" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
                        sells
                      </NavLink>
                    </li>
                    <li><NavLink to="seller-experimental" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
            seller-experimental</NavLink></li>
          <li><NavLink to="my-profile-seller" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
            my-profile-seller</NavLink></li>
          <li><NavLink to="all-expired-products" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
            all-expired-products</NavLink></li>
          <li><NavLink to="available-products" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
            available-products</NavLink></li>
          <li><NavLink to="add-new-transactions" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
            add-new-transactions</NavLink></li>
          <li><NavLink to="add-new-products" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
            add-new-products</NavLink></li>
          <li><NavLink to="add-loyal-buyers" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
            add-loyal-buyers</NavLink></li>
          <li><NavLink to="update-personal-info" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
            update-personal-info</NavLink></li>
          <li><NavLink to="show-all-buyers" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
            show-all-buyers</NavLink></li>
                  </>
                )}
                
                {role === "buyer" && (
                  <>
                    <li>
                      <NavLink to="buyer-my-buyings" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
                        buyer-my-buyings
                      </NavLink>
                    </li>
                    <li><NavLink to="buyer-experimental-features" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
          buyer-experimental-features</NavLink></li>
        <li><NavLink to="buyer-update-profile" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
          buyer-update-profile</NavLink></li>
        <li><NavLink to="buyer-my-profile" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
          buyer-my-profile</NavLink></li>
                  </>
                )}

                {role === "super-admin" && (
                  <>
                    <li>
                      <NavLink to="pending-requests" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
                        pending-requests
                      </NavLink>
                      <li><NavLink to="show-all-buyers" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
          show-all-buyers</NavLink></li>
        <li><NavLink to="show-all-reviews" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>
          show-all-reviews</NavLink></li>
                    </li>
                    {/* ...other super admin menu items */}
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
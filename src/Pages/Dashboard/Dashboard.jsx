import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom";

const Dashboard = () => {

    const activeLinkStyle = ({ isActive }) => isActive ? "border-b-4 border-primary" : "";


  return (
<div className="flex">
<div className="flex h-screen flex-col justify-between border-e min-w-[15vw]">
      <div className="px-4 py-4">
        <ul className="mt-6 space-y-1">
          <li className="block px-4 pb-4 font-medium text-lg">Dashboard</li>
          <li><NavLink to="/" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>General</NavLink></li>

          <li>
            <NavLink to="buyer-my-buyings" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>My buyings</NavLink>
          </li>

          <li>
            <NavLink to="/as" className={`block px-4 py-2 text-gray-500 hover:text-primary ${activeLinkStyle}`}>Invoices</NavLink>
          </li>
        </ul>
      </div>
    </div>
    <Outlet></Outlet>
</div>
  );
};

export default Dashboard;

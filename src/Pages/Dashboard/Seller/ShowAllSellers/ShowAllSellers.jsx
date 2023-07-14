import { useContext } from "react";
import useMultipleAPIs from "../../../../Hooks/useMultipleAPIs";
import { AuthContext } from "../../../../Context/AuthProvider";
import buyerImg from "../../../../assets/buyerr.svg";
import { IconDots } from "@tabler/icons-react";

const ShowAllSellers = () => {
  const { shopkeepers } = useMultipleAPIs();
  console.log(shopkeepers);
  return (
    <div className="flex justify-center w-full">
      <div className="my-20">
        <p className="text-center text-3xl font-semibold">
          All Seller ({shopkeepers.length})
        </p>
        <div className="w-[80vw] mt-10">
          <div className="grid grid-cols-4 gap-5">
            {shopkeepers.map((buyer, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-primary hover:bg-opacity-10 hover:border-primary w-full p-5 rounded-lg">
                <div className="flex flex-row-reverse justify-between">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn-ghost btn m-1 btn-sm"><IconDots className="text-black" size={20}/></label>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52">
                    <li><a className="text-error hover:text-error">Ban</a></li>
                    <li><a>Restrict</a></li>
                  </ul>
                </div>
                  <div>
                    <div>
                      <p className="font-medium">Shop Owner</p>
                      <p>Name: {buyer.ownerName}</p>
                      <p>Email: {buyer.email}</p>
                      <p>Phone: {buyer.phoneNumber}</p>
                    </div>
                    <div className="mt-3">
                      <p className="font-medium">Shop</p>
                      <p>Shop Name: {buyer.shopName}</p>
                      <p>Register ID: {buyer.registerID}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAllSellers;

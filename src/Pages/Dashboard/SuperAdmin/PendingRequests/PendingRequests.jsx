/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useMultipleAPIs from "../../../../Hooks/useMultipleAPIs";
import Loading from "../../../../Components/Loading/Loading";

const PendingRequests = () => {
  const { shopkeepers, isLoading } = useMultipleAPIs();
  const [unApproved, setUnApproved] = useState([]);
  // console.log(shopkeepers)

  useEffect(() => {
    if (!isLoading) {
      const unApprovedShopkeepers = shopkeepers.filter((seller) => seller?.isApproved === false);
      console.log(unApprovedShopkeepers)
      setUnApproved(unApprovedShopkeepers);
    }
    
  }, [isLoading]);


  const handleSeller = (seller) => {
    console.log(seller)
  }

  return (
    <div className="flex w-full justify-center">
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="my-20">
          <p className="text-center text-3xl mb-10 font-semibold">
            Pending Requests
          </p>
          <div className="overflow-x-auto">
            <table className="table table-md">
              <thead>
                <tr className="text-[16px] capitalize">
                  <th></th>
                  <th>Owner Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Location</th>
                  <th>Precise Location</th>
                  <th>Shop Name</th>
                  <th>Registered ID</th>
                </tr>
              </thead>
              <tbody>
                {unApproved.map((shopkeeper, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{shopkeeper.ownerName}</td>
                    <td>{shopkeeper.email}</td>
                    <td>
                      {shopkeeper.phoneNumber || (
                        <span className="text-red-300 italic">Not found</span>
                      )}
                    </td>
                    <td>
                      {shopkeeper.location || (
                        <span className="text-red-300 italic">Not found</span>
                      )}
                    </td>
                    <td>
                      {shopkeeper.preciseLocation || (
                        <span className="text-red-300 italic">Not found</span>
                      )}
                    </td>
                    <td>
                      {shopkeeper.shopName || (
                        <span className="text-red-300 italic">Not found</span>
                      )}
                    </td>
                    <td>
                    <button className="btn btn-sm btn-ghost text-success hover:btn-success mt-[5.5px]" onClick={() => handleSeller(shopkeeper)}>
                      Accept
                    </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingRequests;

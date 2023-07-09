/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import useMultipleAPIs from "../../../../Hooks/useMultipleAPIs";
import { AuthContext } from "../../../../Context/AuthProvider";
import moment from "moment";
import Loading from "../../../../Components/Loading/Loading";

const Sells = () => {
  const { transactions } = useMultipleAPIs();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const filtered = transactions.filter((trans) => trans?.shopUID === user?.uid);
  console.log(filtered);

  // useEffect(() => {
  //   setLoading(true);

  //   async () => {
  //     if (filtered.length === 0) {
  //       console.log(filtered.length)
  //     } 
  //   };
  //   return () =>{
  //     setLoading(false);

  //   }
  // }, []);


  

  return (
    <div className="flex justify-center w-full">
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <div className="my-20">
            <p className="text-3xl text-center font-semibold mb-10">Sells</p>
            <div className="overflow-x-auto">
              {filtered.length !== 0 && (
                <table className="table table-md">
                  {/* head */}
                  <thead>
                    <tr className="text-[16px] capitalize">
                      <th></th>
                      <th>Company Name</th>
                      <th>Product</th>
                      <th>Original Price</th>
                      <th>Selling Price</th>
                      <th>Buying Quantity</th>
                      <th>Buyer Email</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.reverse().map((transaction, index) => (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{transaction.company}</td>
                        <td>{transaction.productName}</td>
                        <td>{transaction.mainPrice}</td>
                        <td>{transaction.sellPrice}</td>
                        <td>{transaction.quantity}</td>
                        <td>{transaction.buyerEmail}</td>
                        <td>{moment(transaction.time).format("lll")}</td>
                        {console.log(transaction)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sells;

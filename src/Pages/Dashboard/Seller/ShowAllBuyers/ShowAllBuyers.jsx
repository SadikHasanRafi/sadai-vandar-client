import { useContext } from "react";
import useMultipleAPIs from "../../../../Hooks/useMultipleAPIs";
import { AuthContext } from "../../../../Context/AuthProvider";
import buyerImg from "../../../../assets/buyerr.svg"

const ShowAllBuyers = () => {
  const { transactions } = useMultipleAPIs();
  const { user } = useContext(AuthContext);
  const shopkeeperBuyer = transactions.filter((x) => x.shopUID === user?.uid);
  console.log(shopkeeperBuyer);
  return (
    <div className="flex justify-center w-full">
      <div className="my-20">
        <p className="text-center text-3xl font-semibold">
          All Buyers ({shopkeeperBuyer.length})
        </p>
        <div className="w-[80vw] mt-10">
          <div className="grid grid-cols-3 gap-5">
            {shopkeeperBuyer.map((buyer, index) => (
              <div key={index} className="bg-gray-50 hover:bg-primary hover:bg-opacity-10 hover:border-primary w-full p-5 rounded-lg">
                <div className="flex">
                  <div className="avatar">
                    <div className="w-12 mr-5 rounded-lg hover:shadow-lg">
                      <img src={buyerImg} />
                    </div>
                  </div>
                  <div>
                    <p>{buyer.buyerUID}</p>
                    <p>{buyer.time}</p>
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

export default ShowAllBuyers;

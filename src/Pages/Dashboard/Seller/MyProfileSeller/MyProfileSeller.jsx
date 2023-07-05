import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";
import Loading from "../../../../Components/Loading/Loading";
import bgImg from "../../../../assets/profile-bg.jpg";

const MyProfileSeller = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/shopkeeper/${user.uid}`
        );
        const sellerData = response.data;
        setData(sellerData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSellerData();

    return () => {};
  }, [user.uid]);

  if (isLoading) {
    return;
  }

  console.log(data)

  return isLoading ? (
    <Loading></Loading>
  ) : (
    <>
      <div className="min-h-screen flex-col flex w-full">
        <div
          className="hero h-[20vh]"
          style={{ backgroundImage: `url(${bgImg})` }}></div>
        <div className="mb-20 m-10 mx-14">
          <div>
            <div>
              <p className="font-semibold text-3xl">
                Welcome Back!{" "}
                <span className="text-primary">{data.ownerName}.</span>
              </p>













              <div className="mt-8">
      <div className="px-4 sm:px-0">
        <p className="mt-1 max-w-2xl leading-6">Personal details</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="font-medium leading-6 text-gray-900">Your Name</dt>
            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.ownerName}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="font-medium leading-6 text-gray-900">Email Address</dt>
            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="font-medium leading-6 text-gray-900">Phone Number</dt>
            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.phoneNumber}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="font-medium leading-6 text-gray-900">Shop</dt>
            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.shopName}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="font-medium leading-6 text-gray-900">Location</dt>
            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.location}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="font-medium leading-6 text-gray-900">Precise Location</dt>
            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.preciseLocation}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="font-medium leading-6 text-gray-900">Available Products</dt>
            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.shopProducts.length}</dd>
          </div>
        </dl>
      </div>
    </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfileSeller;

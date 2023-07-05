import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";
import Loading from "../../../../Components/Loading/Loading";

const MyProfileSeller = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  console.log(user);

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/shopkeeper/${user.uid}`
        );
        const sellerData = response.data;
        console.log(sellerData);
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

  return isLoading ? (
    <Loading></Loading>
  ) : (
    <>
      <div className="min-h-screen flex justify-center w-full">
        <div className="my-20">
          <p className="text-center font-semibold text-3xl mb-5">
            Welcome Back,{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default MyProfileSeller;

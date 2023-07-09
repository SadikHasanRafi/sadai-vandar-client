import { AuthContext } from "../../Context/AuthProvider";
import {  useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const ApprovalPage = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isApproved, setIsApproved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch shopkeeper data by UID
        const response = await axios.get(`http://localhost:5000/shopkeeper/${user?.uid}`);
        const shopkeeperData = response.data;

        // Check if shopkeeper is approved
        if (shopkeeperData && shopkeeperData.isApproved) {
          setIsApproved(true);
        }
      } catch (error) {
        console.error('Failed to fetch shopkeeper data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      // Perform clean-up tasks if needed
    };
  }, [user?.uid]);

  const handleOnClick = () => {
    navigate("/dashboard");
  };

  if (isLoading) {
    return <Loading />; // Show loading component while fetching data
  }

  return (
    <div>
      <div className="min-h-[70vh] flex justify-center items-center">
        {isApproved ? (
          // Approved
          <>
            <p className="text-xl mr-3 text-green-500">Approved </p>
            <button onClick={handleOnClick} className="btn-primary btn">
              Go to dashboard
            </button>
          </>
        ) : (
          // Pending
          <p className="text-xl text-warning">Your approval is pending</p>
        )}
      </div>
    </div>
  );
};

export default ApprovalPage;

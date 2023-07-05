// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AuthContext } from "../../Context/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";
// import Loading from "../../Components/Loading/Loading"
import { Link } from "react-router-dom";

const ApprovalPage = () => {
//     const { user } = useContext(AuthContext);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isApproved, setIsApproved] = useState(false);
//   const [isRejected, setIsRejected] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//             "https://restcountries.com/v3.1/all?fields=name,flags"
//         );
//         const data = response.data;
//         console.log(data.approval);
//         setIsApproved(data?.approval);
//         setIsRejected(data?.isRejected);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();

//     return () => {
//       // Perform clean-up tasks if needed
//     };
//   }, [user.uid]);

//   const handleOnClick = () => {
//     navigate("/dashboard");
//   };

  return (
    <div>
        <div className="min-h-[70vh] flex justify-center items-center">


            {/* approved */}
              {/* <p className="text-xl mr-3 text-green-500">Approved </p>
              <button className="btn-primary btn">
                Go to dashboard
              </button> */}


            {/* pending */}
            {/* <p className="text-xl text-warning">Your approval is pending</p> */}

        </div>
    </div>
  );
};

export default ApprovalPage;
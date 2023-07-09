/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";




const BuyerSetProfile = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    location: "",
    preciseLocation: "",
    name: "",
    phoneNumber: "",
    uid: user?.uid,
    email: user.email,
    transactionID: [],
    isLoyal: [],
    totalSpendMoney: 0,
    role: "buyer",
  });
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)
    try {
      const res = await axios.post("https://sadai-vandar-server.onrender.com/registered-buyers",formData);
        // Reset the form fields after successful insertion
        setFormData({
          location: "",
          preciseLocation: "",
          name: "",
          phoneNumber: "",
        });
        console.log("🚀 ~ file: BuyerSetProfile.jsx:34 ~ handleSubmit ~ res:", res)
        if (res.data.success === true) {
          navigate('/dashboard')
          setLoading(false)
        }
      
    } catch (error) {
      console.error("Failed to insert data:", error);
    }finally{
      setLoading(false)

    }
  };

  return (
    <div className="min-h-screen flex justify-center">
      {

        loading ? <Loading></Loading>
        :
        <div className="my-20">
        <p className="text-3xl font-semibold mb-5 text-center">
          Register your profile
        </p>
        <form
          className="mt-8 grid grid-cols-4 gap-6 justify-center w-full shadow-lg p-10 rounded-lg"
          onSubmit={handleSubmit}>
          <div className="col-span-5">
            <label className="block mb-2" htmlFor="name">
              Name:
            </label>
            <input
              value={formData.name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="your name"         className="input input-bordered w-full border-base-300 focus:border-primary-focus focus:outline-none"
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-2">
              Phone Number:
            </label>
            <input
              value={formData.phoneNumber}
              onChange={handleChange}
              type="text"
              placeholder="phone number"
              name="phoneNumber"
              className="input input-bordered w-full border-base-300 focus:border-primary-focus focus:outline-none"
            />
          </div>

          <div className="col-span-3">
            <label className="block mb-2">
              Location:
            </label>
            <input
              value={formData.location}
              onChange={handleChange}
              type="text"
              placeholder="street, city"
              name="location"
              className="input input-bordered w-full border-base-300 focus:border-primary-focus focus:outline-none"
            />
          </div>

          <div className="col-span-5">
            <label className="block mb-2">
              Precise Location:
            </label>
            <input
              value={formData.preciseLocation}
              onChange={handleChange}
              type="text"
              placeholder="A/B street, city"
              name="preciseLocation"
              className="input input-bordered w-full border-base-300 focus:border-primary-focus focus:outline-none"
            />
          </div>

          <input
            type="submit"
            value="Submit"
            className="btn btn-primary col-span-5 mt-3"
          />
        </form>
      </div>

      }
    </div>
  );
};

export default BuyerSetProfile;

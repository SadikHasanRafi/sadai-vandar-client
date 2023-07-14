import { useContext, useState } from "react";
import Loading from "../../../../Components/Loading/Loading";
import { AuthContext } from "../../../../Context/AuthProvider";
import axios from "axios";

const BuyerUpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    location: "",
    preciseLocation: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .put(`http://localhost:5000/buyers/${user.uid}`, formData)
      .then((response) => {
        // Handle success response
        console.log("Data updated successfully");
        setLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.error("Error updating data:", error);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen w-full flex justify-center">
      {loading ? (
        <Loading />
      ) : (
        <div className="my-20">
          <p className="text-3xl font-semibold mb-5 text-center">
            Update your profile
          </p>
          <form
            className="mt-8 grid grid-cols-4 gap-6 justify-center w-full shadow-lg p-10 rounded-lg"
            onSubmit={handleSubmit}
          >
            <div className="col-span-5">
              <label className="block mb-2" htmlFor="name">
                Name:
              </label>
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="your name"
                className="input input-bordered w-full border-base-300 focus:border-primary-focus focus:outline-none"
              />
            </div>

            <div className="col-span-2">
              <label className="block mb-2">Phone Number:</label>
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
              <label className="block mb-2">Location:</label>
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
              <label className="block mb-2">Precise Location:</label>
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
              value="Update"
              className="btn btn-primary col-span-5 mt-3"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default BuyerUpdateProfile;

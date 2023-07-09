import  { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';


const SellerSetProfile = () => {
  const [location, setLocation] = useState('');
  const [preciseLocation, setPreciseLocation] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [shopName, setShopName] = useState('');
  const [registerID, setRegisterID] = useState('');
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)

    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Create an object with the data to be sent
        const data = {
          location,
          uid: user?.uid,
          isApproved: false,
          loyalUsers: [],
          anonymousBuyer: [],
          dateFailProducts: [],
          role: 'shopkeeper',
          isOpen: false,
          email: user.email,
          ownerName: user.displayName||name,
          preciseLocation,
          shopName,
          phoneNumber,
          transactionID: [],
          shopProducts: [],
          registeredBuyerID: [],
          registerID,
        };
        // Send a POST request to the /shopkeeper API
      //   const response = await axios.post('https://sadai-vandar-server.onrender.com/shopkeeper', data);
        const response = await axios.post('http://localhost:5000/shopkeeper', data);
        navigate("/approval")
        console.log(response.data); // Optional: Handle the response as needed
  
        // Clear the input fields
        
      } catch (error) {
        console.error('Failed to send data:', error);
      }finally{
          setLocation('');
          setPreciseLocation('');
          setName('');
          setRegisterID('');
          setPhoneNumber('');
          setShopName('');
      }
    };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="my-20">
      <p className="text-3xl font-semibold mb-5 text-center">Register your profile</p>
        <form
          onSubmit={handleFormSubmit}
          className="mt-8 grid grid-cols-3 gap-6 justify-center w-full shadow-lg p-10 rounded-lg">
          <div className="col-span-4">
            <label htmlFor="name" className="block mb-2">
              Owner Name:
            </label>
            <input
              type="text"
              id="ownerName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 focus:border-primary-focus rounded px-3 py-2 w-full"
              placeholder="your name"
            />
          </div>

          <div className="col-span-3">
            <label htmlFor="shopName" className="block mb-2">
              Shop Name:
            </label>
            <input
              type="text"
              id="shopName"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              className="border border-gray-300 focus:border-primary-focus rounded px-3 py-2 w-full"
              placeholder="your shop name"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="phoneNumber" className="block mb-2">
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border border-gray-300 focus:border-primary-focus rounded px-3 py-2 w-full"
              placeholder="your phone number"
            />
          </div>



          <div className="col-span-2">
            <label htmlFor="location" className="block mb-2">
              Location:
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border border-gray-300 focus:border-primary-focus rounded px-3 py-2 w-full"
              placeholder="street, city"
            />
          </div>

          <div className="col-span-2">
            <label htmlFor="preciseLocation" className="block mb-2">
              Precise Location:
            </label>
            <input
              type="text"
              id="preciseLocation"
              value={preciseLocation}
              onChange={(e) => setPreciseLocation(e.target.value)}
              className="border border-gray-300 focus:border-primary-focus rounded px-3 py-2 w-full"
              placeholder="A/B street, city"
            />
          </div>

          <div className="col-span-4">
            <label htmlFor="registeredID" className="block mb-2">
              Registered ID:
            </label>
            <input
              type="text"
              id="registeredID"
              value={registerID}
              onChange={(e) => setRegisterID(e.target.value)}
              className="border border-gray-300 focus:border-primary-focus rounded px-3 py-2 w-full"
              placeholder="registered ID"
            />
          </div>

          <input
            type="submit"
            value="Submit"
            className="btn btn-primary col-span-5 mt-3"
          />
        </form>
      </div>
    </div>
  );
};

export default SellerSetProfile;

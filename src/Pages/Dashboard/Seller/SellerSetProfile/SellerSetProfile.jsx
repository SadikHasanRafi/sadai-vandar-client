import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const SellerSetProfile = () => {

    const [location, setLocation] = useState('');
    const [preciseLocation, setPreciseLocation] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [shopName, setShopName] = useState('');
    const [registerID, setRegisterID] = useState('');
      const navigate = useNavigate()


      const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Create an object with the data to be sent
          const data = {
            location,
            uid: "uid from context",
            isApproved: false,
            loyalUsers: [],
            anonymousBuyer: [],
            dateFailProducts: [],
            role: 'shopkeeper',
            isOpen: false,
            email: 'eta context theke asbe',
            ownerName: 'etao user context theke asbe'||name,
            preciseLocation,
            shopName,
            phoneNumber,
            transactionID: [],
            shopProducts: [],
            registeredBuyerID: [],
            registerID,
          };
    
          // Send a POST request to the /shopkeeper API
          const response = await axios.post('https://sadai-vandar-server.onrender.com/shopkeeper', data);
    
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
        <div className="max-w-md mx-auto mt-8">
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="location" className="block font-medium">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="registeredID" className="block font-medium">Registered ID:</label>
            <input
              type="text"
              id="registeredID"
              value={registerID}
              onChange={(e) => setRegisterID(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="shopName" className="block font-medium">Shop Name:</label>
            <input
              type="text"
              id="shopName"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="preciseLocation" className="block font-medium">Precise Location:</label>
            <input
              type="text"
              id="preciseLocation"
              value={preciseLocation}
              onChange={(e) => setPreciseLocation(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="name" className="block font-medium">Owner Name:</label>
            <input
              type="text"
              id="ownerName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block font-medium">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Submit</button>
        </form>
      </div>
    );
};

export default SellerSetProfile;
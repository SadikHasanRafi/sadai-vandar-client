import  { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SelectRole = () => {
  // const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const {user} = useContext(AuthContext)




  const handleButtonClick = async (selectedRole) => {
    try {
      setLoading(true);

      const roleData = {
        uid: user.uid,
        displayName: user.displayName,
        serviceReview: "",
        phone:user.phoneNumber,
        email: user.email,
        role: selectedRole
      };

      // Call the API to insert the data
      await axios.post("https://sadai-vandar-server.onrender.com/roles-and-reviews", roleData);

      // Redirect to the "/setBuyerProfile" path
      if (roleData.role==="shopkeeper") {
        history("/seller-set-profile");
      }else{
        history("/buyer-set-profile");
      }
    } catch (error) {
      console.error('Error inserting data:', error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div>
      <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
        <button
          className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
          onClick={() => handleButtonClick('shopkeeper')}
          disabled={loading}
        >
          Shopkeeper
        </button>
        <button
          className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
          onClick={() => handleButtonClick('buyer')}
          disabled={loading}
        >
          Buyer
        </button>
      </span>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default SelectRole;




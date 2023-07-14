import  { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../../Components/Loading/Loading';

const SelectRole = () => {
  // const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const {user} = useContext(AuthContext)




  const handleButtonClick = async (selectedRole) => {
    try {
      setLoading(true);

      const roleData = {
        uid: user?.uid,
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
    <div className='min-h-[80vh] flex justify-center items-center'>
      
      {loading ? <Loading></Loading>
      :
      <div>
      <p className='text-center font-semibold mb-5 text-3xl'>Select your role</p>
<div className='flex flex-col w-[25vw]'>
<button
        className=" btn m-3 btn-outline btn-primary h-[5rem]"
        onClick={() => handleButtonClick('shopkeeper')}
        disabled={loading}
      >
        Shop Keeper
      </button>


      <button
        className=" btn m-3 btn-outline btn-primary h-[5rem]"
        onClick={() => handleButtonClick('buyer')}
        disabled={loading}
      >
        Buyer
      </button>



      <button
        className=" btn m-3 btn-outline btn-primary h-[5rem]"
        onClick={() => handleButtonClick('dealer')}
        disabled={loading}
      >
        Dealer
      </button>



</div>
    </div>
    }
    </div>
  );
};

export default SelectRole;




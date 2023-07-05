import  { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../../Context/AuthProvider';


const BuyerSetProfile = () => {
  const {user} = useContext(AuthContext)
    const [formData, setFormData] = useState({
      location: '',
      preciseLocation: '',
      name: '',
      phoneNumber: '',
      uid: user.uid,
      email: user.email,
      transactionID:[],
      isLoyal:[],
      totalSpendMoney:0,
      role:"buyer"
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await axios.post('https://sadai-vandar-server.onrender.com/registered-buyers', formData);
        console.log('Data inserted successfully');
        // Reset the form fields after successful insertion
        setFormData({
          location: '',
          preciseLocation: '',
          name: '',
          phoneNumber: '',
        });
      } catch (error) {
        console.error('Failed to insert data:', error);
      }
    };
  




    return (
        <div className="min-h-screen flex justify-center">
            <div className="my-20">
            <p className="text-3xl font-semibold mb-5 text-center">Register your profile</p>
            <form className="mt-8 grid grid-cols-4 gap-6 justify-center w-full shadow-lg p-10 rounded-lg" onSubmit={handleSubmit}>



                <div className="col-span-5">
                    <label className="block mb-2" htmlFor="name">Name:</label>
                    <input             value={formData.name}
            onChange={handleChange} type="text" name="name" placeholder="your name" className="input input-bordered w-full border-base-300 focus:border-primary-focus focus:outline-none"/>
                </div>


                



                                
                <div className="col-span-2">
                    <label className="block mb-2" htmlFor="">Phone Number:</label>
                    <input             value={formData.phoneNumber}
            onChange={handleChange} type="text" placeholder="phone number" className="input input-bordered w-full border-base-300 focus:border-primary-focus focus:outline-none"/>
                </div>



                <div className="col-span-3">
                    <label className="block mb-2" htmlFor="">Location:</label>
                    <input             value={formData.location}
            onChange={handleChange} type="text" placeholder="street, city" className="input input-bordered w-full border-base-300 focus:border-primary-focus focus:outline-none"/>
                </div>


                <div className="col-span-5">
                    <label className="block mb-2" htmlFor="">Precise Location:</label>
                    <input             value={formData.preciseLocation}
            onChange={handleChange} type="text" placeholder="A/B street, city" className="input input-bordered w-full border-base-300 focus:border-primary-focus focus:outline-none"/>
                </div>


                <input type="button" value="Submit" className="btn btn-primary col-span-5 mt-3"/>
            </form>
            </div>
        </div>
    );
};

export default BuyerSetProfile;
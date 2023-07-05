import { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";

const BuyerSetProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen flex justify-center">
            <div className="my-20">
            <p className="text-3xl font-semibold mb-5 text-center">Register your profile</p>
            <form className="mt-8 grid grid-cols-5 gap-6 justify-center w-full shadow-lg p-10 rounded-lg">



                <div className="col-span-5">
                    <label className="block mb-2" htmlFor="name">Name:</label>
                    <input type="text" name="name" placeholder="your name" className="input input-bordered w-full border-base-300 focus:border-primary-focus focus:outline-none"/>
                </div>


                
                <div className="col-span-3">
                    <label className="block mb-2" htmlFor="">Email</label>
                    <input disabled type="text" value="{user.email}" className="input input-bordered w-full border-base-300 focus:border-primary-focus focus:outline-none"/>
                </div>


                                
                <div className="col-span-2">
                    <label className="block mb-2" htmlFor="">Phone Number:</label>
                    <input type="number" placeholder="phone number" className="input input-bordered w-full border-base-300 focus:border-primary-focus focus:outline-none"/>
                </div>



                <div className="col-span-2">
                    <label className="block mb-2" htmlFor="">Location:</label>
                    <input type="text" placeholder="street, city" className="input input-bordered w-full border-base-300 focus:border-primary-focus focus:outline-none"/>
                </div>


                <div className="col-span-3">
                    <label className="block mb-2" htmlFor="">Precise Location:</label>
                    <input type="text" placeholder="A/B street, city" className="input input-bordered w-full border-base-300 focus:border-primary-focus focus:outline-none"/>
                </div>


                <input type="button" value="Submit" className="btn btn-primary col-span-5 mt-3"/>
            </form>
            </div>
        </div>
    );
};

export default BuyerSetProfile;
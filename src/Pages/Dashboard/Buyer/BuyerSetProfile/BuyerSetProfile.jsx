
const BuyerSetProfile = () => {
    return (
        <div className="min-h-screen flex justify-center">
            <div className="my-20">
            <p className="text-3xl font-semibold mb-5 text-center">Set your profile</p>
            <form className="mt-8 grid grid-cols-4 gap-6 justify-center w-full border p-10 rounded-lg">



                <div className="col-span-2">
                    <label className="block mb-3" htmlFor="name">Name:</label>
                    <input type="text" name="name" placeholder="your name" className="input input-bordered w-full"/>
                </div>


                
                <div className="col-span-2">
                    <label className="block mb-3" htmlFor="">Email</label>
                    <input type="text" placeholder="your email" className="input input-bordered w-full"/>
                </div>


                                
                <div>
                    <label className="block mb-3" htmlFor="">Phone Number:</label>
                    <input type="number" placeholder="phone number" className="input input-bordered w-full"/>
                </div>
            </form>
            </div>
        </div>
    );
};

export default BuyerSetProfile;

const SelectRole = () => {





    const handleButtonClick =(r) => {
        console.log(r)
        //send this r to database with user info from AuthContext
    }



  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Select role</h1>
           
            <button onClick={() => handleButtonClick("shopkeeper")} className="btn btn-primary btn-outline">shopkeeper</button>
            <button onClick={() => handleButtonClick("buyer")} className="btn btn-outline btn-primary">buyer</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;

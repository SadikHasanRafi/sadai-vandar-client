import  'react';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Signup = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState("");
      
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit =async (event) => {
      event.preventDefault();
      try {
        await createUser(email,password)
        .then((result)=>{
          // const user = result.user
          if (result.user) {
               navigate("/set-role")
          } 
      });
        
      } catch (error) {
        console.error('Login error:', error);

        setError(error.message);
      }

    };

    
    return (
        <div>
            

            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <div className="card-body">
      <p className='text-3xl'>Sign Up</p>
      <form onSubmit={handleSubmit}>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered"       value={email}
                    onChange={handleEmailChange}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered"  value={password}
                    onChange={handlePasswordChange} />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <p className='text-red-500'>{error}</p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Signup;
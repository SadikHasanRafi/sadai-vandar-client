import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {

    const {signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleSignInWithGoogle = () => {
        signInWithGoogle().then(()=>{                
            navigate("/")
        })
    }
    
    return (
        <div>
            <div className="hero min-h-screen">
                <div >
                   
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <p className='text-xl font-semibold'>Login</p>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <button className="btn btn-primary">Login</button>
                            <div className="divider">OR</div>
                            <div className="form-control mt-6">
                                <button onClick={handleSignInWithGoogle} className="btn btn-primary">Login by Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
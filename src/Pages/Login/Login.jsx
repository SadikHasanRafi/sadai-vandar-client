import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { IconBrandGoogle } from "@tabler/icons-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password).then((result) => {
        // const user = result.user
        if (result.user) {
          navigate("/dashboard");
        }
      });
    } catch (error) {
      console.error("Login error:", error);

      setError(error.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card flex-shrink-0 w-full max-w-md shadow-lg bg-base-100">
        <div className="card-body">
          <p className="text-center font-semibold mb-5 text-3xl">Login</p>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="email"
                className="input input-bordered max-w-lg"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                value={password}
                onChange={handlePasswordChange}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <p className="text-red-500">{error}</p>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button> 
              <div className="divider">or</div>
              <button className="btn btn-primary btn-outline">
                Login with google <IconBrandGoogle size={16}></IconBrandGoogle>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

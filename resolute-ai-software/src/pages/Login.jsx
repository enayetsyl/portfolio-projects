import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center justify-center max-w-96 mx-auto bg-gray-800 rounded-xl">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-8">
          Login
          
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 rounded-md px-2"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <label className="label p-2">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 rounded-md px-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block text-white"
          >
            {"Don't"} have an account?
          </Link>

          <div className="flex justify-center">
            <button
              className=' mt-2 border border-slate-700 rounded-md py-2 px-4 text-white/80 hover:bg-slate-600 transition-all duration-500'
              
              disabled={loading}

            > 
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};
export default Login;

import { useState } from "react";
import { useAuth } from "./authContext";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);

    const from = location.state?.from || "/dashboard";
    navigate(from);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 to-gray-200 px-4">
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-green-600 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 text-lg"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 text-lg"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-500 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

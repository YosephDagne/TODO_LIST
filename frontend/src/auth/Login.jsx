import { useState } from "react";
import { useAuth } from "./authContext";
import { useLocation, useNavigate } from "react-router-dom";

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
    <div>
      <h2 className="text-2xl font-semibold text-center text-orange-500 mb-4">
        Login
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

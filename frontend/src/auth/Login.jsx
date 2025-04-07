import { useState } from "react";
import { useAuth } from "./authContext";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login({ username, password });
    setMsg(result.error || "Logged in successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 border border-gray-300 rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Log In
      </button>
      {msg && <p className="text-sm text-red-600">{msg}</p>}
    </form>
  );
};

export default Login;

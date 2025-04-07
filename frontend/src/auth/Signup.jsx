import { useState } from "react";
import { useAuth } from "./authContext";

const Signup = () => {
  const { signup } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = signup({ username, password });
    setMsg(result.error || "Signed up successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

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
      <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 cousor-pointer transition duration-200 ">
        Sign Up
      </button>
      {msg && <p className="text-sm text-red-600">{msg}</p>}
    </form>
  );
};

export default Signup;

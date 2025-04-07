import { useState } from "react";
import { useAuth } from "./authContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate(); // Navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(""); // Clear previous messages

    try {
      const result = await signup({ username, password });

      if (result.error) {
        setMsg(result.error); // Display error message
      } else {
        setMsg("Signed up successfully! Redirecting to dashboard...");
        setUsername("");
        setPassword("");
        // Redirect to dashboard after successful signup
        navigate("/dashboard");
      }
    } catch (error) {
      setMsg("Something went wrong. Please try again.");
    }
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
      <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 cursor-pointer transition duration-200">
        Sign Up
      </button>
      {msg && <p className="text-sm text-red-600">{msg}</p>}
    </form>
  );
};

export default Signup;

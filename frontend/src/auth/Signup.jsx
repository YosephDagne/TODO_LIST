import { useState } from "react";
import { useAuth } from "./authContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup } = useAuth();
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Name field state
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    // Basic validation
    if (!email.trim() || !password.trim() || !name.trim()) {
      setMsg("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setMsg("Password must be at least 6 characters.");
      return;
    }

    try {
      const result = await signup({ email, password, name });

      if (result.error) {
        setMsg(result.error);
      } else {
        setMsg("Signed up successfully! Redirecting to dashboard...");
        setEmail("");
        setPassword("");
        setName(""); 
        navigate("/dashboard");
      }
    } catch (error) {
      setMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center text-orange-500 mb-4">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Sign Up
        </button>
        {msg && <p className="text-sm text-center text-red-500 mt-2">{msg}</p>}
      </form>
    </div>
  );
};

export default Signup;

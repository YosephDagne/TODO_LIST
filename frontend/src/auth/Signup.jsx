import { useState } from "react";
import { useAuth } from "./authContext";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

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
      console.error("Signup error:", error);
      setMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-blue-200 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 sm:p-10 w-full max-w-md">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-600 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50"
          />
          <input
            type="password"
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Sign Up
          </button>
        </form>

        {msg && <p className="text-sm text-center text-red-500 mt-4">{msg}</p>}

        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

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

      console.log("Signup result:", result);

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold py-2 rounded-lg transition duration-300 hover:border-[1px] hover:bg-white hover:text-black cursor-pointer"
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

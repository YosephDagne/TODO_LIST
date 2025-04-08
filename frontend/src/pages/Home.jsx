import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import { useAuth } from "../auth/authContext";

const Home = () => {
  const [hasAccount, setHasAccount] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  // Redirect to dashboard if user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-4">
          Welcome to TaskMate
        </h1>

        <p className="text-lg text-center text-gray-700 mb-6">
          Your personal to-do list manager.{" "}
          {hasAccount ? "Login to continue." : "Create your account."}
        </p>

        {hasAccount ? <Login /> : <Signup />}

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            {hasAccount ? "Don’t have an account?" : "Already have an account?"}
          </p>
          <button
            onClick={() => setHasAccount(!hasAccount)}
            className="mt-2 text-orange-500 hover:underline font-semibold"
          >
            {hasAccount ? "Sign up" : "Log in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

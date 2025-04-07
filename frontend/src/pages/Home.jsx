import { useState } from "react";
import Signup from "../auth/Signup";
import Login from "../auth/Login";

const Home = () => {
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to TaskMate
        </h1>
        <p className="text-gray-600 mb-6">
          Your personal to-do list manager.{" "}
          {hasAccount ? "Login to continue." : "Create your account."}
        </p>

        {hasAccount ? <Login /> : <Signup />}

        <p className="mt-4 text-sm text-gray-500">
          {hasAccount ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setHasAccount(!hasAccount)}
            className="text-indigo-600 font-medium hover:underline"
          >
            {hasAccount ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Home;

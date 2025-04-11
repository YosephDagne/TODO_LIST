import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";

const Home = () => {
  const [hasAccount, setHasAccount] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleCreateTask = () => {
    navigate("/signup");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br flex items-center justify-center p-6">
      <div className="w-full  bg-white  rounded-3xl p-10 sm:p-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 mb-4">
          Welcome to TaskMate
        </h1>

        <p className="text-md sm:text-lg text-gray-700 mb-6">
          Organize your life, one task at a time. Stay productive, stay focused,
          and make every moment count.
        </p>

        <p className="text-orange-500 font-medium text-base sm:text-lg mb-8">
          Create your first task today and take the first step toward your
          goals. 🚀
        </p>

        {!user && (
          <button
            onClick={handleCreateTask}
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-md"
          >
            Get Started
          </button>
        )}

        <div className="mt-10 text-sm text-gray-500">
          <p>✨ Built for dreamers, doers, and achievers like you.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

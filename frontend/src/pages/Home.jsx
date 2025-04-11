import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { image } from "../assets/image";

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
    <div className="w-full min-h-screen bg-gradient-to-br flex items-center justify-center p-2">
      <div className="w-full max-w-6xl bg-white rounded-3xl p-10 sm:p-16 flex items-center">
        {/* Left Section (Image) */}
        <div className="flex-1">
          <img
            src={image.img}
            alt="Task Management"
            className="w-full h-auto rounded-lg shadow-md mr-10 ml-2"
          />
        </div>

        {/* Right Section (Text and Button) */}
        <div className="flex-1 ml-8 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 mb-4">
            Welcome
          </h1>
          <p className="text-md sm:text-lg text-gray-700 mb-6">
            Organize your life, one task at a time. Stay productive, stay
            focused, and make every moment count.
          </p>

          <p className="text-orange-500 font-medium text-base sm:text-lg mb-8">
            Create your first task today and take the first step toward your
            goals. 🚀
          </p>

          {!user && (
            <button
              onClick={handleCreateTask}
              className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold text-lg hover:bg-white  shadow-md cursor-pointer hover:border-[1px] hover:text-black border-[1px] border-black"
            >
              Get Started
            </button>
          )}

          <div className="mt-10 text-sm text-gray-500">
            <p>✨ Built for dreamers, doers, and achievers like you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

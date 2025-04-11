import { Link } from "react-router-dom";
import { useAuth } from "../auth/authContext";

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/"; // Redirect to Home page after logout
  };

  return (
    <nav className="bg-gray-600 text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-semibold">
          <Link to="/" className="hover:text-orange-300 transition-colors hover:underline">
            HOME
          </Link>
        </div>

        <div className="flex space-x-6">
          {/* If user is logged in, show dashboard and logout options */}
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="hover:text-orange-300 transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-700 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* If not logged in, show login and signup links */}
              <Link
                to="/login"
                className="hover:text-orange-300 transition-colors hover:bg-green-700 px-4 py-2 bg-blue-700 rounded-lg "
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-700 transition-all"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

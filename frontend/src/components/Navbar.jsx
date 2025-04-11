import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";

const Navbar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-600 text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo or Home Link */}
        <div className="text-2xl font-semibold">
          <Link
            to="/"
            className="hover:text-orange-300 transition-colors hover:underline italic"
          >
            HOME
          </Link>
        </div>

        {/* Navigation Links or Button depending on user's login status */}
        <div className="flex space-x-6">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-700 transition-all cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className=" transition-colors hover:bg-white px-8 py-2 hover:border-[1px] border-2 border-black hover:text-black bg-green-600 rounded-full "
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-orange-500 px-6 py-2 transition-all rounded-full hover:bg-cyan-500 hover:border-[1px] border-2 border-black hover:text-black"
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

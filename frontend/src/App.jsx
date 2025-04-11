import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth/authContext";
import Login from "./auth/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Signup from "./auth/Signup";
import Navbar from "./components/Navbar";

function App() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <div>
      {/* Render Navbar always */}
      <Navbar />

      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Login route */}
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />

        {/* Signup route */}
        <Route
          path="/signup"
          element={user ? <Navigate to="/dashboard" /> : <Signup />}
        />

        {/* Dashboard route, protected */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;

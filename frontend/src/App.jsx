import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth/authContext";
import Login from "./auth/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  const { user } = useAuth();
  const location = useLocation(); // Get the current location

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          user ? (
            <Dashboard />
          ) : (
            <Navigate
              to="/login"
              state={{ from: location }} 
            />
          )
        }
      />
    </Routes>
  );
}

export default App;

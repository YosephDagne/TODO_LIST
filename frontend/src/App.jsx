import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth/authContext";
import Login from "./auth/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Signup from "./auth/Signup";

function App() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

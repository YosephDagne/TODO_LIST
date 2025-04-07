// File: App.jsx
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./auth/authContext";
import Login from "./auth/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;

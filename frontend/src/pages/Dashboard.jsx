// File: pages/Dashboard.jsx
import TodoList from "../todos/TodoList";
import TodoForm from "../todos/TodoForm";
import { useAuth } from "../auth/authContext";

const Dashboard = () => {
  const { logout, user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-1">
              Hello, {user?.username}
            </h1>
            <p className="text-gray-500 text-sm">
              Welcome back to your task manager
            </p>
          </div>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Todo Form */}
        <div className="mb-6">
          <TodoForm />
        </div>

        {/* Todo List */}
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// File: pages/Dashboard.jsx
import TodoList from "../todos/TodoList";
import TodoForm from "../todos/TodoForm";
import { useAuth } from "../auth/authContext";

const Dashboard = () => {
  const { logout, user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-semibold text-gray-800 mb-2">
              Hello, {user?.username}
            </h1>
            <p className="text-gray-500 text-lg">
              Welcome to your task manager
            </p>
          </div>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
          >
            Logout
          </button>
        </div>

        {/* Todo Form */}
        <div className="mb-8">
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

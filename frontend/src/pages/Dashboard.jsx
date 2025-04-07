import { useState } from "react";
import TodoList from "../todos/TodoList";
import TodoForm from "../todos/TodoForm";
import { useAuth } from "../auth/authContext";
import { useTodos } from "../todos/todoContext"; // Assuming this contains editTodo and setEditTodo

const Dashboard = () => {
  const { logout, user } = useAuth();
  const { editTodo, setEditTodo } = useTodos(); // Assuming useTodos context handles editing state

  const handleTaskCreated = () => {
    // Function for when a task is created (no longer needed to hide form)
  };

  const handleCancel = () => {
    setEditTodo(null); // Reset the editTodo state when cancelled
  };

  const handleEdit = (todo) => {
    setEditTodo(todo); // Set the task to be edited in context
  };

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
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            Logout
          </button>
        </div>

        {/* Todo Form */}
        <div className="flex flex-col mb-8">
          <TodoForm
            onTaskCreated={handleTaskCreated}
            onCancel={handleCancel}
            editTodo={editTodo} // Pass editTodo if available
          />
        </div>

        {/* Todo List */}
        <div className="space-y-6 mt-8">
          <TodoList onEdit={handleEdit} />{" "}
          {/* Pass handleEdit to TodoList to handle editing */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

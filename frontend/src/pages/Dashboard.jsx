import { useAuth } from "../auth/authContext";
import { useTodos } from "../todos/todoContext";
import TodoForm from "../todos/TodoForm";
import TodoList from "../todos/TodoList";

const Dashboard = () => {
  const { logout, user } = useAuth();
  const { editTodo, setEditTodo } = useTodos();

  const handleEdit = (todo) => {
    setEditTodo(todo);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-xl space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-gray-900 text-2xl text-center pl-60 font-bold">
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
        <div className="space-y-6">
          <TodoForm editTodo={editTodo} />
        </div>

        {/* Todo List */}
        <div className="space-y-6 mt-8">
          <TodoList onEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
